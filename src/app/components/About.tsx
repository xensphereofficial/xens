import { motion } from 'motion/react';
import { TrendingUp, Zap, Globe } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Passive Income',
      description: 'Create once, sell forever. Build sustainable revenue streams.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation',
      description: 'Automated delivery system. Focus on creating, not managing.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Sell worldwide, 24/7. No boundaries, limitless potential.',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,253,104,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            About <span className="text-[#dcfd68]">Xensphere</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Xensphere is your gateway to the digital economy. We empower creators, 
            entrepreneurs, and innovators to build, launch, and scale their digital 
            product businesses with cutting-edge tools and resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#dcfd68]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#dcfd68]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dcfd68]/20 transition-colors">
                    <div className="text-[#dcfd68]">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#dcfd68]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '50K+', label: 'Products Sold' },
            { number: '$2M+', label: 'Revenue Generated' },
            { number: '150+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-[#dcfd68] mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
