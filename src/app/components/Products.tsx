import { motion } from 'motion/react';
import { GraduationCap, Video, FileText, Brain, TrendingUp, BookOpen } from 'lucide-react';

export function Products() {
  const products = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Online Courses',
      description: 'Comprehensive learning experiences with video content, quizzes, and certificates.',
      image: 'https://images.unsplash.com/photo-1762330916233-221b49fce7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY291cnNlJTIwb25saW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc2MTk1MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Reels Packs',
      description: 'High-quality video content packs designed for social media success.',
      image: 'https://images.unsplash.com/photo-1775559049057-e527a9568246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHJlZWxzJTIwY29udGVudCUyMGNyZWF0aW9ufGVufDF8fHx8MTc3NjE5NTMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Design Templates',
      description: 'Professional templates for presentations, graphics, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1487338875411-8880f74114a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZW1wbGF0ZXMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc2MTk1MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Tools',
      description: 'Cutting-edge artificial intelligence tools to automate and optimize your workflow.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzYxNDkwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Marketing Kits',
      description: 'Complete digital marketing packages including assets, guides, and strategies.',
      image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdG9vbHN8ZW58MXx8fHwxNzc2MTk1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'E-Books',
      description: 'Digital books covering various topics from business to personal development.',
      image: 'https://images.unsplash.com/photo-1767528402946-e9faf7aac858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGRpZ2l0YWwlMjBsaWJyYXJ5fGVufDF8fHx8MTc3NjE5NTMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="products" className="relative py-32 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,253,104,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Our <span className="text-[#dcfd68]">Digital Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our curated collection of premium digital products designed 
            to help you succeed in the digital economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#dcfd68]/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <div className="text-black">{product.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  <button className="w-full py-3 bg-[#dcfd68]/10 border border-[#dcfd68]/30 text-[#dcfd68] rounded-lg hover:bg-[#dcfd68] hover:text-black transition-all group-hover:shadow-lg group-hover:shadow-[#dcfd68]/30">
                    View Details
                  </button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#dcfd68]/0 via-[#dcfd68]/0 to-[#dcfd68]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
