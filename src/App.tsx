import Navbar from './components/Navbar'
</ul>
</div>
<div className="rounded-xl border border-white/10 p-4">
<dl className="grid grid-cols-3 gap-3 text-sm">
<div><dt className="text-zinc-400">Email</dt><dd className="text-white break-all">{profile.email}</dd></div>
<div><dt className="text-zinc-400">LinkedIn</dt><dd><a className="text-brand-400 hover:underline" href={profile.linkedin} target="_blank">/in/profile</a></dd></div>
<div><dt className="text-zinc-400">Twitter</dt><dd><a className="text-brand-400 hover:underline" href={profile.twitter} target="_blank">@handle</a></dd></div>
<div><dt className="text-zinc-400">Website</dt><dd><a className="text-brand-400 hover:underline" href={profile.website} target="_blank">Portfolio</a></dd></div>
</dl>
</div>
</div>
</div>
</Section>


{/* SKILLS */}
<Section id="skills" title="Skills">
<div className="grid gap-6 md:grid-cols-2">
{Object.entries(profile.skills).map(([group, items]) => (
<div key={group} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
<h3 className="mb-3 text-lg font-semibold text-white">{group}</h3>
<div className="flex flex-wrap gap-2">
{items.map((i) => (
<SkillBadge key={i} label={i} />
))}
</div>
</div>
))}
</div>
</Section>


{/* PROJECTS */}
<Section id="projects" title="Projects">
<div className="grid gap-6 md:grid-cols-3">
{profile.projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</Section>


{/* CERTIFICATIONS */}
<Section id="certs" title="Certifications">
<div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
{profile.certifications.length ? (
<ul className="list-disc space-y-2 pl-5 text-zinc-300">
{profile.certifications.map((c) => (
<li key={c}>{c}</li>
))}
</ul>
) : (
<p className="text-zinc-400">Add your certifications in <code>src/data/profile.ts</code>.</p>
)}
</div>
</Section>


{/* CONTACT */}
<Section id="contact" title="Contact">
<div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
<p className="text-zinc-300">Feel free to reach out for collaborations, questions, or to discuss cybersecurity topics!</p>
<div className="mt-4 flex flex-wrap gap-3">
<a href={`mailto:${profile.email}`} className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Email me</a>
<a href={profile.linkedin} target="_blank" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5">LinkedIn</a>
<a href={profile.twitter} target="_blank" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5">Twitter</a>
</div>
</div>
</Section>


<Footer />
</div>
)
}
