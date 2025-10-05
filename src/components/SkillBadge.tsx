export default function SkillBadge({ label }: { label: string }) {
return (
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
{label}
</span>
)
}
