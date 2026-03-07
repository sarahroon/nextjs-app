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

// GET: fetch comments
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return Response.json([]);
    }

    const result = await sql`
      SELECT * FROM comments
      WHERE post_id = ${postId}
      ORDER BY created_at DESC
    `;

    return Response.json(result.rows ?? []);
  } catch (err) {
    console.error("Failed to fetch comments:", err);
    return Response.json([], { status: 500 });
  }
}

// DELETE: remove comment
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get("commentId");

    await sql`
      DELETE FROM comments
      WHERE comment_id = ${commentId}
    `;

    return Response.json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Failed to delete comment:", error);
    return Response.json(
      { message: "Error deleting comment" },
      { status: 500 },
    );
  }
}
