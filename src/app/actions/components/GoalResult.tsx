import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function GoalResult({ result }: any) {
  if (!result) return null;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Your Goal Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">{result.goal}</p>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Step</TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Complexity</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {result.tasks.map((task: any, i: number) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.complexity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
