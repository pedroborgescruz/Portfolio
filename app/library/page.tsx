import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "library",
};

const books = [
  {
    tag: "comp sci",
    tagClass: "tag-comp-sci",
    title: "speech and language processing",
    author: "Daniel Jurafsky & James H. Martin",
  },
  {
    tag: "comp sci",
    tagClass: "tag-comp-sci",
    title: "the elements of statistical learning",
    author: "Trevor Hastie, Robert Tibshirani & Jerome Friedman",
  },
  {
    tag: "comp sci",
    tagClass: "tag-comp-sci",
    title: "designing data-intensive applications",
    author: "Martin Kleppmann",
  },
  {
    tag: "comp sci",
    tagClass: "tag-comp-sci",
    title: "computer networks: a systems approach",
    author: "Larry L. Peterson & Bruce S. Davie",
  },
  {
    tag: "linguistics",
    tagClass: "tag-linguistics",
    title: "the language instinct",
    author: "Steven Pinker",
  },
  {
    tag: "linguistics",
    tagClass: "tag-linguistics",
    title: "through the language glass",
    author: "Guy Deutscher",
  },
  {
    tag: "nonfiction",
    tagClass: "tag-nonfiction",
    title: "gödel, escher, bach",
    author: "Douglas Hofstadter",
  },
  {
    tag: "fiction",
    tagClass: "tag-fiction",
    title: "the phoenix project",
    author: "Gene Kim, Kevin Behr & George Spafford",
  },
  {
    tag: "business",
    tagClass: "tag-business",
    title: "zero to one",
    author: "Peter Thiel",
  },
  {
    tag: "nonfiction",
    tagClass: "tag-nonfiction",
    title: "sapiens",
    author: "Yuval Noah Harari",
  },
  {
    tag: "fiction",
    tagClass: "tag-fiction",
    title: "dom casmurro",
    author: "Machado de Assis",
  },
  {
    tag: "fiction",
    tagClass: "tag-fiction",
    title: "grande sertão: veredas",
    author: "João Guimarães Rosa",
  },
] as const;

export default function LibraryPage() {
  return (
    <div className="container reading-list">
      <ul className="book-list list-unstyled">
        {books.map((book) => (
          <li key={book.title}>
            <div className="book-main">
              <span className={`book-tag ${book.tagClass}`}>{book.tag}</span>
              <span className="book-title">{book.title}</span>
            </div>
            <span className="book-author">{book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
