export async function GET() {
  return new Response(JSON.stringify({ status: "ok", message: "Meta Roofing API is healthy" }), { 
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}