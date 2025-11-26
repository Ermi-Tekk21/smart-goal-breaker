"use client";

import { useState } from "react";
import { GoalForm } from "./actions/components/GoalForm";
import { GoalResult } from "./actions/components/GoalResult";

export default function Page() {
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-col items-center p-10 max-w-xl mx-auto">
      <GoalForm setResult={setResult} />
      <GoalResult result={result} />
    </div>
  );
}
