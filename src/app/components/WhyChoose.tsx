import { motion } from 'motion/react';
import { Rocket, DollarSign, Users, Lightbulb } from 'lucide-react';

export function WhyChoose() {
  const features = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Easy to Start',
      description: 'Launch your digital product business in minutes with our intuitive platform and step-by-step guidance.',
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'High Profit Margins',
      description: 'Keep more of what you earn with low overhead costs and automated delivery systems.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Beginner-Friendly',
      description: 'No technical expertise required. Our platform is designed for creators of all skill levels.',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'No Inventory Needed',
      description: 'Digital products mean zero storage costs, no shipping hassles, and instant delivery.',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#dcfd68]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#dcfd68]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Why Choose <span className="text-[#dcfd68]">Xensphere?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of successful creators who have transformed their 
            ideas into profitable digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#dcfd68]/50 transition-all">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#dcfd68]/20 to-[#dcfd68]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#dcfd68]/30 transition-shadow"
                >
                  <div className="text-[#dcfd68]">{feature.icon}</div>
                </motion.div>

                <h3 className="text-2xl text-white mb-3 group-hover:text-[#dcfd68] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#dcfd68] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-br from-[#dcfd68]/10 via-[#dcfd68]/5 to-transparent rounded-3xl border border-[#dcfd68]/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#dcfd68] mb-2">24/7</div>
              <div className="text-gray-400">Automated Sales</div>
            </div>
            <div>
              <div className="text-4xl text-[#dcfd68] mb-2">100%</div>
              <div className="text-gray-400">Digital Delivery</div>
            </div>
            <div>
              <div className="text-4xl text-[#dcfd68] mb-2">∞</div>
              <div className="text-gray-400">Scalability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
