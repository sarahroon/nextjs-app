let comments = [
  { postId: "1", id: "c1", text: "Great post!" },
  { postId: "1", id: "c2", text: "Thanks for sharing." },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { postId, text } = req.body;
    if (!postId || !text) {
      return res.status(400).json({ error: "Missing postId or text" });
    }

    const newComment = { postId, id: Date.now().toString(), text };
    comments.push(newComment);
    return res.status(201).json(newComment);
  }

  if (req.method === "GET") {
    const { postId } = req.query;
    if (!postId) {
      return res.status(400).json({ error: "Missing postId" });
    }

    const filtered = comments.filter((c) => c.postId === postId);
    return res.status(200).json(filtered);
  }

  res.status(405).end(); // Method not allowed
}
