import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Zap, Wifi, Wrench } from 'lucide-react';

export const Utilities = () => {
  const utilities = [
    {
      name: "Electricity",
      status: "Connected",
      lastBill: "₹45,000",
      dueDate: "2024-02-01",
      icon: Zap
    },
    {
      name: "Internet",
      status: "Active",
      lastBill: "₹12,000", 
      dueDate: "2024-01-25",
      icon: Wifi
    }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Utilities Management</h1>
            <p className="text-muted-foreground">Manage utility services and settings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {utilities.map((utility, index) => {
            const IconComponent = utility.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-medium">{utility.name}</h3>
                      <p className="text-sm text-muted-foreground">Status: {utility.status}</p>
                      <p className="text-sm text-muted-foreground">Last Bill: {utility.lastBill}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};