import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useRealTimeData } from '@/hooks/useRealTimeData';

export const GeneralLedger = () => {
  const { data: ledgerEntries } = useRealTimeData('ledger_entries');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          General Ledger 
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">(Real-Time)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead className="text-right">Credit</TableHead>
              <TableHead className="text-right">Debit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ledgerEntries.slice(0, 5).map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.entry_class}</TableCell>
                <TableCell className="text-right">₹{entry.credit.toLocaleString()}</TableCell>
                <TableCell className="text-right">₹{entry.debit.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};