import { sql } from "@vercel/postgres";

// POST: add a comment
export async function POST(request) {
  try {
    const { postId, name, email, comment_text } = await request.json();

    if (!postId || !name || !comment_text) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    await sql`
      INSERT INTO comments (post_id, name, email, comment_text)
      VALUES (${postId}, ${name}, ${email}, ${comment_text})
    `;

    return Response.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Failed to add comment:", error);
    return Response.json({ message: "Error adding comment" }, { status: 500 });
  }
}

// GET: fetch comments for a post
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId)
      return Response.json({ message: "Missing postId" }, { status: 400 });

    const result = await sql`
      SELECT * FROM comments
      WHERE post_id = ${postId}
      ORDER BY created_at DESC
    `;

    return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    return Response.json(
      { message: "Error fetching comments" },
      { status: 500 },
    );
  }
}

// DELETE: remove a comment
export async function DELETE(req, { params }) {
  try {
    const { commentId } = params;
    await sql`DELETE FROM comments WHERE comment_id = ${commentId}`;
    return new Response(JSON.stringify({ message: "Comment deleted" }));
  } catch (error) {
    console.error("Failed to delete comment:", error);
    return Response.json(
      { message: "Error deleting comment" },
      { status: 500 },
    );
  }
}
