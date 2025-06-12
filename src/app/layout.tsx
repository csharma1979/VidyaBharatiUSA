import dynamic from 'next/dynamic';
import { Inter } from "next/font/google";
import "../../styles/style.scss";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Dynamic imports for client components
const ClientLayout = dynamic(() => import('./ClientLayout'), {
  ssr: false
});

export const metadata = {
  title: 'Vidyabharti',
  description: 'Schools Of Dream',
  icons: {
    icon: '/assets/logo.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/assets/logo.webp" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}