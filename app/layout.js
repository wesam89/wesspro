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
title: 'WESS PRO CONSTRUCTION INC | Ottawa Drywall & Painting Experts',
description: 'Experts in drywall installation, painting, popcorn ceiling removal, taping and finishing in Ottawa.',
icons: {
icon: '/favicon.png',
},
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<head>
{/* ✅ كود الـ Schema */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "WESS PRO CONSTRUCTION INC",
"image": "https://www.wesspro.ca/images/wesspro-logoo.png",
"url": "https://www.wesspro.ca",
"telephone": "+1-613-286-1085",
"address": {
"@type": "PostalAddress",
"streetAddress": "3240 Southgate Road",
"addressLocality": "Ottawa",
"addressRegion": "ON",
"postalCode": "K1V8W7",
"addressCountry": "CA"
},
"openingHours": "Mo-Fr 09:00-18:00",
"priceRange": "$$",
"sameAs": [
"https://www.facebook.com/wesspro.ca/",
"https://www.instagram.com/wesspro.ca/"
]
})
}}
/>
</head>
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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