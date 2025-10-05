import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'


const links = [
{ href: '#about', label: 'About' },
{ href: '#skills', label: 'Skills' },
{ href: '#projects', label: 'Projects' },
{ href: '#certs', label: 'Certifications' },
{ href: '#contact', label: 'Contact' },
]


export default function Navbar() {
const [open, setOpen] = useState(false)


useEffect(() => {
const onScroll = () => setOpen(false)
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


return (
<header className="sticky top-0 z-50 w-full backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<a href="#" className="text-lg font-semibold tracking-tight">Cyber<span className="text-brand-400">Sec</span> | Portfolio</a>
<nav className="hidden gap-6 md:flex">
{links.map(l => (
<a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
{l.label}
</a>
))}
</nav>
<button className="md:hidden" aria-label="menu" onClick={() => setOpen(v => !v)}>
<Menu />
</button>
</div>
{open && (
<div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
<div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-3">
{links.map(l => (
<a key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white">
{l.label}
</a>
))}
</div>
</div>
)}
</header>
)
}
