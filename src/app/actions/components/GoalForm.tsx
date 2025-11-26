"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createGoal } from "@/app/actions/create-goal";

export function GoalForm({ setResult }: any) {
  const [goal, setGoal] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await createGoal(goal);
    setResult(result);
  }

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Smart Goal Breaker</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your goal..."
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
          <Button type="submit">Break My Goal</Button>
        </form>
      </CardContent>
    </Card>
  );
}
