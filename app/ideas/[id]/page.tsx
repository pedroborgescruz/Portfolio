import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIdea, listIdeaIds } from "@/lib/ideas";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const ids = await listIdeaIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const idea = await getIdea(id);
  return {
    title: idea?.title ?? "idea not found",
  };
}

export default async function IdeaPage({ params }: Props) {
  const { id } = await params;
  const idea = await getIdea(id);

  if (!idea) notFound();

  return (
    <article className="container idea-page">
      <Link className="idea-back" href="/ideas">
        ← ideas
      </Link>
      <header className="idea-header">
        {idea.date ? <p className="idea-date">{idea.date}</p> : null}
        <h1 className="idea-title">{idea.title}</h1>
        {idea.subtitle ? (
          <p className="idea-subtitle">{idea.subtitle}</p>
        ) : null}
      </header>
      <div className="idea-body">
        {idea.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
