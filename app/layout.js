export const metadata = {
  title: "Prompt Injection Demo Lab",
  description: "AI Security Testing Environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}