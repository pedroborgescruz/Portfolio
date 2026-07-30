import type { Metadata } from "next";
import Link from "next/link";
import { listIdeas } from "@/lib/ideas";

export const metadata: Metadata = {
  title: "ideas",
};

export default async function IdeasPage() {
  const ideas = await listIdeas();

  return (
    <div className="container ideas-list">
      <header className="ideas-header">
        <h1 className="ideas-heading titles">ideas</h1>
        <p className="ideas-sub">notes and thoughts, in no particular order.</p>
      </header>

      <ul className="idea-list list-unstyled">
        {ideas.map((idea) => (
          <li key={idea.id}>
            <Link className="idea-link" href={`/ideas/${idea.id}`}>
              {idea.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
