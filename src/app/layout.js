import "./globals.css";

export const metadata = {
  title: "Shortly",
  description: "More than just shorter links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
