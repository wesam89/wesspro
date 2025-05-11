import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Logo from './components/Logo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Wissams Website',
  description: 'Best Renovation Company!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header>
          <Logo />
          <Menu />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
