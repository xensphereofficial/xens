import { motion } from 'motion/react';
import { Sparkles, Upload, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Pick Your Product',
    description: 'Choose your best digital offer: course, template, toolkit, or membership.',
  },
  {
    icon: <Upload className="w-6 h-6" />,
    title: 'Upload and Customize',
    description: 'Add product files, pricing, and brand assets in a simple setup flow.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Launch in Minutes',
    description: 'Publish your page and start accepting orders with automated delivery.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Scale with Analytics',
    description: 'Track performance, optimize conversions, and grow your recurring sales.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,253,104,0.1),transparent_45%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            How It <span className="text-[#dcfd68]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Build your digital business with a clean workflow designed for speed and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#dcfd68]/15 border border-[#dcfd68]/30 flex items-center justify-center text-[#dcfd68] mb-4">
                {step.icon}
              </div>
              <p className="text-xs uppercase tracking-wider text-[#dcfd68] mb-2">Step {index + 1}</p>
              <h3 className="text-xl text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
