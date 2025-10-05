import { ReactNode } from 'react'
import { motion } from 'framer-motion'


export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
return (
<section id={id} className="relative py-20">
<div className="pointer-events-none absolute inset-0 bg-grid" />
<div className="relative mx-auto w-full max-w-6xl px-6">
<motion.h2
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl"
>
{title}
</motion.h2>
<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="grid gap-6"
>
{children}
</motion.div>
</div>
</section>
)
}
