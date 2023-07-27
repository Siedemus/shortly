import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Shortly",
  description: "More than just shorter links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
