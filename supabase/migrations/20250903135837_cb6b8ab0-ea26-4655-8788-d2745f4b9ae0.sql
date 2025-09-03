-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('admin', 'owner', 'tenant', 'accountant');

-- Create enum for complaint status
CREATE TYPE public.complaint_status AS ENUM ('open', 'in_progress', 'resolved', 'closed');

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  unit_number TEXT,
  role user_role NOT NULL DEFAULT 'tenant',
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create accounts table for cash & bank balances
CREATE TABLE public.accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_name TEXT NOT NULL,
  account_type TEXT NOT NULL, -- 'cash', 'bank', etc.
  balance DECIMAL(15,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create income_expenses table for monthly financial data
CREATE TABLE public.income_expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  month DATE NOT NULL, -- First day of the month
  income DECIMAL(15,2) NOT NULL DEFAULT 0,
  expense DECIMAL(15,2) NOT NULL DEFAULT 0,
  per_unit_cost DECIMAL(15,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(month)
);

-- Create ledger_entries table for general ledger
CREATE TABLE public.ledger_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_class TEXT NOT NULL,
  description TEXT,
  credit DECIMAL(15,2) NOT NULL DEFAULT 0,
  debit DECIMAL(15,2) NOT NULL DEFAULT 0,
  account_id UUID REFERENCES public.accounts(id),
  entry_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create complex_stats table for apartment complex statistics
CREATE TABLE public.complex_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_units INTEGER NOT NULL DEFAULT 0,
  sold_units INTEGER NOT NULL DEFAULT 0,
  unsold_units INTEGER NOT NULL DEFAULT 0,
  total_owners INTEGER NOT NULL DEFAULT 0,
  total_tenants INTEGER NOT NULL DEFAULT 0,
  total_residents INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create complaints table
CREATE TABLE public.complaints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status complaint_status NOT NULL DEFAULT 'open',
  assigned_to UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create notices table
CREATE TABLE public.notices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_by UUID NOT NULL REFERENCES auth.users(id),
  is_urgent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create documents table (metadata only, files stored in Supabase Storage)
CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  uploaded_by UUID NOT NULL REFERENCES auth.users(id),
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create meetings table
CREATE TABLE public.meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  meeting_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  created_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.income_expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ledger_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.complex_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meetings ENABLE ROW LEVEL SECURITY;

-- Create function to check user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS user_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = user_id AND is_approved = true;
$$;

-- Create function to check if user has role
CREATE OR REPLACE FUNCTION public.has_role(user_id UUID, required_role user_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_id 
    AND role = required_role 
    AND is_approved = true
  );
$$;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(user_id, 'admin');
$$;

-- RLS Policies for profiles table
CREATE POLICY "Users can view approved profiles" ON public.profiles
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can manage all profiles" ON public.profiles
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for accounts table
CREATE POLICY "Authenticated users can view accounts" ON public.accounts
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins and accountants can manage accounts" ON public.accounts
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'accountant')
  );

-- RLS Policies for income_expenses table
CREATE POLICY "Authenticated users can view income_expenses" ON public.income_expenses
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins and accountants can manage income_expenses" ON public.income_expenses
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'accountant')
  );

-- RLS Policies for ledger_entries table
CREATE POLICY "Authenticated users can view ledger_entries" ON public.ledger_entries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins and accountants can manage ledger_entries" ON public.ledger_entries
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'accountant')
  );

-- RLS Policies for complex_stats table
CREATE POLICY "Authenticated users can view complex_stats" ON public.complex_stats
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can manage complex_stats" ON public.complex_stats
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for complaints table
CREATE POLICY "Users can view own complaints and all for admins" ON public.complaints
  FOR SELECT USING (
    auth.uid() = user_id OR 
    public.is_admin(auth.uid())
  );

CREATE POLICY "Users can create complaints" ON public.complaints
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own complaints, admins can update all" ON public.complaints
  FOR UPDATE USING (
    auth.uid() = user_id OR 
    public.is_admin(auth.uid())
  );

-- RLS Policies for notices table
CREATE POLICY "Authenticated users can view notices" ON public.notices
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can manage notices" ON public.notices
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for documents table
CREATE POLICY "Authenticated users can view documents" ON public.documents
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can upload documents" ON public.documents
  FOR INSERT WITH CHECK (auth.uid() = uploaded_by);

CREATE POLICY "Admins can manage all documents" ON public.documents
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for meetings table
CREATE POLICY "Authenticated users can view meetings" ON public.meetings
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can manage meetings" ON public.meetings
  FOR ALL USING (public.is_admin(auth.uid()));

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role, is_approved)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'tenant'),
    false -- Requires admin approval
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create triggers for updating timestamps
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_accounts_updated_at
  BEFORE UPDATE ON public.accounts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_income_expenses_updated_at
  BEFORE UPDATE ON public.income_expenses
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_complex_stats_updated_at
  BEFORE UPDATE ON public.complex_stats
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_complaints_updated_at
  BEFORE UPDATE ON public.complaints
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial complex stats record
INSERT INTO public.complex_stats (id, total_units, sold_units, unsold_units, total_owners, total_tenants, total_residents)
VALUES (gen_random_uuid(), 100, 75, 25, 45, 30, 180);

-- Insert some initial accounts
INSERT INTO public.accounts (account_name, account_type, balance) VALUES
('Main Cash Account', 'cash', 50000.00),
('Society Bank Account', 'bank', 250000.00),
('Maintenance Fund', 'bank', 100000.00);

-- Enable realtime for all tables
ALTER TABLE public.profiles REPLICA IDENTITY FULL;
ALTER TABLE public.accounts REPLICA IDENTITY FULL;
ALTER TABLE public.income_expenses REPLICA IDENTITY FULL;
ALTER TABLE public.ledger_entries REPLICA IDENTITY FULL;
ALTER TABLE public.complex_stats REPLICA IDENTITY FULL;
ALTER TABLE public.complaints REPLICA IDENTITY FULL;
ALTER TABLE public.notices REPLICA IDENTITY FULL;
ALTER TABLE public.documents REPLICA IDENTITY FULL;
ALTER TABLE public.meetings REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE public.accounts;
ALTER PUBLICATION supabase_realtime ADD TABLE public.income_expenses;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ledger_entries;
ALTER PUBLICATION supabase_realtime ADD TABLE public.complex_stats;
ALTER PUBLICATION supabase_realtime ADD TABLE public.complaints;
ALTER PUBLICATION supabase_realtime ADD TABLE public.notices;
ALTER PUBLICATION supabase_realtime ADD TABLE public.documents;
ALTER PUBLICATION supabase_realtime ADD TABLE public.meetings;

-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', false);

-- Create storage policies for documents
CREATE POLICY "Authenticated users can view documents" ON storage.objects
  FOR SELECT TO authenticated USING (bucket_id = 'documents');

CREATE POLICY "Authenticated users can upload documents" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update own documents" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Admins can delete documents" ON storage.objects
  FOR DELETE TO authenticated USING (
    bucket_id = 'documents' AND (
      auth.uid()::text = (storage.foldername(name))[1] OR
      public.is_admin(auth.uid())
    )
  );