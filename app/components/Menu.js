"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};

window.addEventListener("scroll", handleScroll);
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);

// إغلاق القائمة عند الضغط خارجها
useEffect(() => {
const closeMenu = (event) => {
if (!event.target.closest(".menu") && !event.target.closest(".menu-toggle")) {
setMenuOpen(false);
}
};

document.addEventListener("click", closeMenu);
return () => {
document.removeEventListener("click", closeMenu);
};
}, []);

return (
<nav
style={{
position: "fixed",
top: 0,
left: 0,
right: 0,
zIndex: 999,
background: scrolled
? "rgba(0, 0, 0, 0.4)"
: "linear-gradient(to left, #000000, #b57e2b)",
backdropFilter: scrolled ? "blur(10px)" : "none",
transition: "all 0.4s ease",
height: "140px",
padding: "25px 60px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}
>
<div>
<Image
src="/images/wesspro-logoo.png"
alt="WESS PRO Logo"
width={200}
height={200}
style={{
transition: "all 0.3s ease",
filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))",
}}
/>
</div>

{/* زر الهامبرغر لإظهار القائمة */}
<div
className="menu-toggle"
style={{
display: "none",
cursor: "pointer",
fontSize: "30px",
color: "#fff",
}}
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</div>

{/* القائمة المتجاوبة */}
<div className={`menu ${menuOpen ? "active" : ""}`} style={{ display: menuOpen ? "flex" : "none" }}>
<Link href="/" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "22px" }} onClick={() => setMenuOpen(false)}>Home</Link>
<Link href="/about" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "22px" }} onClick={() => setMenuOpen(false)}>About</Link>
<Link href="/services" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "22px" }} onClick={() => setMenuOpen(false)}>Services</Link>
<Link href="/quote" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "22px" }} onClick={() => setMenuOpen(false)}>Get a Quote</Link>
<Link href="/contact" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "22px" }} onClick={() => setMenuOpen(false)}>Contact</Link>
</div>
</nav>
);
}