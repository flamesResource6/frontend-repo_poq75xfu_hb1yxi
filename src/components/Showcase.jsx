import { motion } from 'framer-motion'

const items = [
  { title: 'Podcast clip: tech founder insights', color: 'from-fuchsia-500 to-violet-500' },
  { title: 'Travel reel: neon nights in Tokyo', color: 'from-sky-500 to-cyan-400' },
  { title: 'Cooking short: 30-sec pesto pasta', color: 'from-emerald-500 to-teal-400' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">See the vibes</h2>
            <p className="mt-4 text-slate-300 text-lg">A taste of the styles you can create in seconds.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/15">
            Create your first edit
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`aspect-[9/16] w-full bg-gradient-to-br ${card.color}`} />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="rounded-lg bg-slate-900/70 backdrop-blur px-3 py-2 text-white text-sm font-medium">
                  {card.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
