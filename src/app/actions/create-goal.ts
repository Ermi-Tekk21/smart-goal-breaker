"use server";

export async function createGoal(goal: string) {
  const response = await fetch(process.env.BACKEND_URL + "/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ goal }),
    cache: "no-store",
  });

  return response.json();
}
