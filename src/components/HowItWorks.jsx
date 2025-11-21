import { motion } from 'framer-motion'
import { Upload, MessageSquare, Wand2, Download } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Upload', desc: 'Drop in your footage or paste a link. We support all major formats.' },
    { icon: MessageSquare, title: 'Prompt', desc: 'Describe your edit: “trim to highlights, add captions, upbeat vibe.”' },
    { icon: Wand2, title: 'Magic', desc: 'Our AI edits, color grades, captions, and scores your video in minutes.' },
    { icon: Download, title: 'Export', desc: 'Review, tweak, and export for any platform in one click.' }
  ]

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">From prompt to premiere</h2>
          <p className="mt-4 text-slate-300 text-lg">Four simple steps. Infinite possibilities.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
