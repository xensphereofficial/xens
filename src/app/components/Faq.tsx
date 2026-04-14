import { motion } from 'motion/react';

const faqs = [
  {
    question: 'How quickly can I launch on Xensphere?',
    answer:
      'Most creators can publish their first digital product in under an hour using ready-to-use templates and guided steps.',
  },
  {
    question: 'Do I need technical skills to start?',
    answer:
      'No. Xensphere is beginner-friendly and includes no-code flows for product setup, checkout, and delivery.',
  },
  {
    question: 'What kinds of products can I sell?',
    answer:
      'You can sell courses, templates, e-books, marketing kits, memberships, and other downloadable digital products.',
  },
  {
    question: 'Can I sell globally?',
    answer:
      'Yes. Your products can be purchased worldwide with automated delivery and 24/7 availability.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,253,104,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            Frequently Asked <span className="text-[#dcfd68]">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before launching your digital business.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <summary className="cursor-pointer list-none text-white text-lg group-open:text-[#dcfd68] transition-colors">
                {item.question}
              </summary>
              <p className="text-gray-400 mt-3 leading-relaxed">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
