import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRealTimeData } from '@/hooks/useRealTimeData';

export const ComplaintsWidget = () => {
  const { data: complaints } = useRealTimeData('complaints');
  const recentComplaints = complaints.slice(0, 3);

  return (
    <Card className="bg-blue-500 text-white">
      <CardHeader>
        <CardTitle className="text-white">Complaints</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {recentComplaints.map((complaint) => (
          <div key={complaint.id} className="flex justify-between items-center">
            <span className="text-sm">Status: {complaint.status}</span>
            <Badge 
              variant={complaint.status === 'open' ? 'destructive' : 'secondary'}
              className={complaint.status === 'open' ? 'bg-red-500' : 'bg-green-500'}
            >
              {complaint.status === 'open' ? 'Pending' : 'Resolved'}
            </Badge>
          </div>
        ))}
        {recentComplaints.length === 0 && (
          <p className="text-sm text-white/80">No complaints</p>
        )}
      </CardContent>
    </Card>
  );
};