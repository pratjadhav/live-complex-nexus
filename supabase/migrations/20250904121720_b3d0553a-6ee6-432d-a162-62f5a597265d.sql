-- Approve the most recent user and make them admin
UPDATE profiles 
SET is_approved = true, role = 'admin'
WHERE id = '653e9448-8659-4806-a201-50657f714d80';

-- Also approve the other user if needed
UPDATE profiles 
SET is_approved = true
WHERE id = 'f4e9a98a-c0d5-4664-9e85-dbdb20cd1acf';

-- Create a function to automatically approve the first admin user in future
CREATE OR REPLACE FUNCTION auto_approve_first_admin()
RETURNS TRIGGER AS $$
BEGIN
  -- If this is the first user and they signed up as admin, auto-approve them
  IF (SELECT COUNT(*) FROM profiles WHERE is_approved = true) = 0 
     AND NEW.role = 'admin' THEN
    NEW.is_approved = true;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;