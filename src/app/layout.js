import "./globals.css";

export const metadata = {
  title: "Communication App",
  description: "This is going to be a sick app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
