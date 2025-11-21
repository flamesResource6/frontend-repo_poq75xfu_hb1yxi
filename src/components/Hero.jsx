import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/90">Type a prompt. VIDDNA edits your video.</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
            AI video editing that feels like magic
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200/90">
            Upload a clip, describe your vision, and watch it come to life. Cuts, color, captions, music — all from a single prompt.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
              Try VIDDNA free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-medium hover:bg-white/15 transition">
              Learn more
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
