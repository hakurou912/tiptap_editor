import NextScript from 'next/script'
import "./css/bootstrap.css";
import "./css/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: "Editor",
  description: "TIPTAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main id="main_container" className="container">
          {children}
        </main>
      <NextScript src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" strategy="lazyOnload"></NextScript>
      </body>
    </html>
  );
}
