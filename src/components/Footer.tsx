export default function Footer() {
return (
<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-6xl px-6 text-center text-xs text-zinc-400">
© {new Date().getFullYear()} • Built with React + TS + Tailwind • Deployed on GitHub Pages
</div>
</footer>
)
}
