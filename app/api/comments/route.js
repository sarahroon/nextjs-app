export async function GET() {
  return new Response(JSON.stringify([]), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST() {
  return new Response(JSON.stringify({ message: "Comments disabled" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE() {
  return new Response(JSON.stringify({ message: "Comments disabled" }), {
    headers: { "Content-Type": "application/json" },
  });
}
