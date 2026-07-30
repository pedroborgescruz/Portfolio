import type { Metadata } from "next";
import { compSciBooks, fictionBooks, nonFictionBooks } from "./data";
export const metadata: Metadata = {
  title: "library",
};

const books = [
  ...compSciBooks,
  ...fictionBooks,
  ...nonFictionBooks,
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
