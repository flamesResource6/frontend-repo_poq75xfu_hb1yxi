import { motion } from 'framer-motion'
import { UploadCloud } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="p-8 sm:p-10">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Try the prompt-powered editor</h3>
              <p className="mt-3 text-slate-300">Upload a short clip and describe your edit. We’ll simulate the flow for the demo experience.</p>
            </div>

            <div className="mt-8">
              <label className="block">
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 px-6 py-10 text-center text-slate-300 hover:border-white/30 transition">
                  <UploadCloud className="h-6 w-6 text-white" />
                  <span className="text-white">Drop a video or click to upload</span>
                  <input type="file" accept="video/*" className="sr-only" />
                </div>
              </label>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                <input placeholder="e.g. Trim to highlights, add bold captions, upbeat synthwave track" className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Generate preview</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
