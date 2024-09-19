import "./globals.css";

export const metadata = {
  title: "Luke Andrew Coleman | Portfolio Website",
  description: "Personal portfolio website | Luke Andrew Coleman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
