import "./styles.css";

export const metadata = {
  title: "Emre Toros — Political Scientist",
  description:
    "Research on electoral integrity, political trust, democratic backsliding, and political communication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
