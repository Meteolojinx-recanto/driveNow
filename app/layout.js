import Header from "./components/header";
import "./globals.css";


export const metadata = {
  title: "Drive Now",
  description: "Rent a car and drive now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
