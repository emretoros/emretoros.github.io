import "./styles.css";

export const metadata = {
  title: "Emre Toros — Political Scientist",
  description:
    "Research on political trust, democratic representation, populism, and public opinion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
