let posts = [
  { id: "1", title: "First Post", content: "Hello World!" },
  { id: "2", title: "Second Post", content: "Another post" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Missing title or content" });
    }

    const newPost = { id: Date.now().toString(), title, content };
    posts.push(newPost);
    return res.status(201).json(newPost);
  }

  res.status(405).end(); // Method not allowed
}
