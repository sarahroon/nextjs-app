// Home page with a list of posts

import Link from "next/link";

const posts = [
  { id: 1, title: "My First Post About Snakes", content: "my favourite snake" },
  { id: 2, title: "What snakes can do", content: "Things snakes do" },
];

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
