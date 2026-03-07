// app/api/comments/route.js

export async function GET(request) {
  // Returns an empty array for all posts
  return new Response(JSON.stringify([]), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  // Simple stub response
  return new Response(JSON.stringify({ message: "Comment received (stub)" }), {
    headers: { "Content-Type": "application/json" },
  });
}
