let commentsDB = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { postId, comment } = req.body;
    if (!commentsDB[postId]) commentsDB[postId] = [];
    commentsDB[postId].push(comment);
    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const { postId } = req.query;
    res.status(200).json(commentsDB[postId] || []);
  }
}
