import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("inserted_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ error: "Missing title or content" });

    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, content }])
      .select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data[0]);
  }

  res.status(405).end();
}
