import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isUp: boolean;
  };
  className?: string;
}

export const DashboardCard = ({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  trend,
  className 
}: DashboardCardProps) => {
  return (
    <Card className={cn("transition-all hover:shadow-lg relative overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-current">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-current opacity-80" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-current">{value}</div>
        {description && (
          <p className="text-xs text-current opacity-80 mt-1">
            {description}
          </p>
        )}
        {trend && (
          <div className={cn(
            "text-xs flex items-center mt-2",
            trend.isUp ? "text-green-600" : "text-red-600"
          )}>
            <span className={cn(
              "mr-1",
              trend.isUp ? "↗" : "↘"
            )}>
              {trend.isUp ? "↗" : "↘"}
            </span>
            {Math.abs(trend.value)}% from last month
          </div>
        )}
        
        {/* Live indicator for income card */}
        {title === "Monthly Income" && (
          <div className="absolute top-2 right-12">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">LIVE</span>
          </div>
        )}
        
        {/* Live indicator for expense card */}
        {title === "Monthly Expenses" && (
          <div className="absolute top-2 right-12">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">LIVE</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};