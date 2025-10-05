import SkillBadge from './SkillBadge'


interface ProjectProps {
title: string
description: string
tags: string[]
link?: string
}


export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
return (
<a
href={link || '#'}
className="group block rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-glow transition hover:-translate-y-1 hover:bg-zinc-900/80"
target={link ? '_blank' : undefined}
rel={link ? 'noreferrer noopener' : undefined}
>
<div className="mb-2 text-lg font-semibold text-white">{title}</div>
<p className="mb-4 text-sm text-zinc-300">{description}</p>
<div className="flex flex-wrap gap-2">
{tags.map(t => (
<SkillBadge key={t} label={t} />
))}
</div>
</a>
)}
