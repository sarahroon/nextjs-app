import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { postId } = req.query;
    if (!postId) return res.status(400).json({ error: "Missing postId" });

    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", postId)
      .order("inserted_at", { ascending: true });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { postId, text } = req.body;
    if (!postId || !text)
      return res.status(400).json({ error: "Missing postId or text" });

    const { data, error } = await supabase
      .from("comments")
      .insert([{ post_id: postId, text }])
      .select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data[0]);
  }

  res.status(405).end();
}
