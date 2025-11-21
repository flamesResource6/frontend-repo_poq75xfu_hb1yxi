import { motion } from 'framer-motion'
import { Scissors, Captions, Music4, Palette, Timer, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Scissors,
    title: 'Smart cuts',
    desc: 'Auto-cut scenes, remove silence, and keep the best moments with one prompt.'
  },
  { icon: Palette, title: 'Cinematic color', desc: 'Choose a vibe — teal & orange, moody noir, pastel pop — and we grade it.' },
  { icon: Captions, title: 'Perfect captions', desc: 'Stylish, accurate subtitles with brand fonts and emoji support.' },
  { icon: Music4, title: 'Soundtrack sync', desc: 'Royalty-free tracks that match your energy, timed to your cuts.' },
  { icon: Timer, title: 'Auto reels & shorts', desc: 'Instant vertical crops, safe areas, and aspect ratios for every platform.' },
  { icon: Sparkles, title: 'Prompt presets', desc: 'One-click styles for podcast clips, trailers, tutorials, and more.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Edit by describing it</h2>
          <p className="mt-4 text-slate-300 text-lg">Say what you want — we handle the cuts, color, captions and sound. It’s the fastest way to go from raw to ready.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-white/20"
            >
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 grid place-items-center text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-white text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-300">{f.desc}</p>
              </div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
