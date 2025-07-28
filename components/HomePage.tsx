import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Play, 
  Star, 
  Users, 
  TrendingUp, 
  Award,
  Sparkles,
  Zap,
  Target,
  Gamepad2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredGames = [
    {
      id: 1,
      title: "Cyber Nexus",
      genre: "Action RPG",
      rating: 4.8,
      players: "2.3M",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      tags: ["New", "Popular"]
    },
    {
      id: 2,
      title: "Quantum Realms",
      genre: "Adventure",
      rating: 4.9,
      players: "1.8M",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
      tags: ["Featured", "VR Ready"]
    },
    {
      id: 3,
      title: "Mech Warriors",
      genre: "Simulation",
      rating: 4.7,
      players: "956K",
      image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=600&h=400&fit=crop",
      tags: ["Trending"]
    }
  ];

  const stats = [
    { icon: Users, value: "5.2M+", label: "Active Players" },
    { icon: Gamepad2, value: "150+", label: "3D Games" },
    { icon: Award, value: "98%", label: "User Rating" },
    { icon: TrendingUp, value: "24/7", label: "Live Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] rounded-full opacity-40 animate-pulse blur-sm"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-[var(--apple-green)] to-[var(--apple-blue)] rounded-full opacity-30 animate-pulse delay-1000 blur-sm"></div>
          <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-gradient-to-br from-[var(--apple-pink)] to-[var(--apple-orange)] rounded-full opacity-50 animate-pulse delay-2000 blur-md"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-gradient-to-br from-[var(--apple-purple)] to-[var(--apple-blue)] rounded-full opacity-60 animate-pulse delay-3000 blur-sm"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-60 left-1/3 w-12 h-12 bg-gradient-to-br from-[var(--apple-blue)]/20 to-[var(--apple-purple)]/20 rounded-full blur-2xl animate-pulse delay-4000"></div>
          <div className="absolute bottom-60 right-1/3 w-16 h-16 bg-gradient-to-br from-[var(--apple-green)]/20 to-[var(--apple-pink)]/20 rounded-full blur-3xl animate-pulse delay-5000"></div>
        </div>

        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Badge className="mb-8 glass-button bg-gradient-to-r from-[var(--apple-blue)]/30 to-[var(--apple-purple)]/30 text-white border-[var(--glass-border)] rounded-full px-8 py-4">
              <Sparkles className="w-5 h-5 mr-3" />
              Welcome to Premium Gaming
            </Badge>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 liquid-text"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Discover Amazing
              <br />
              <span className="bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] bg-clip-text text-transparent">
                Game Experiences
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Immerse yourself in beautiful, high-quality games with stunning graphics and engaging gameplay.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button 
                size="lg"
                className="glass-button bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] text-white font-semibold px-12 py-5 text-lg rounded-3xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--apple-blue)]/30"
                onClick={() => onNavigate('games')}
              >
                <Play className="w-6 h-6 mr-4" />
                Explore Games
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="glass-button border-[var(--glass-border)] text-white hover:bg-[var(--glass-primary)] px-12 py-5 text-lg rounded-3xl hover:scale-105 transition-all duration-500"
                onClick={() => onNavigate('community')}
              >
                <Users className="w-6 h-6 mr-4" />
                Join Community
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Character/Environment Placeholder */}
        <motion.div 
          className="absolute right-16 top-1/2 transform -translate-y-1/2 hidden xl:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-[var(--apple-blue)]/40 to-[var(--apple-purple)]/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-12 bg-gradient-to-br from-[var(--apple-green)]/30 to-[var(--apple-pink)]/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 glass-button bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] rounded-3xl flex items-center justify-center">
              <Target className="w-24 h-24 text-white opacity-90" />
              <div className="absolute inset-0 w-48 h-48 bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] rounded-3xl opacity-50 blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--glass-tertiary)] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="relative mb-8 mx-auto w-24 h-24 flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotateY: 10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--apple-blue)]/30 to-[var(--apple-purple)]/30 rounded-3xl blur-2xl"></div>
                    <div className="relative w-20 h-20 glass-button bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] rounded-3xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <div className="text-4xl font-bold text-white mb-3 liquid-text">
                    {stat.value}
                  </div>
                  <div className="text-white/60 font-medium text-lg">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 glass-button bg-gradient-to-r from-[var(--apple-orange)]/30 to-[var(--apple-pink)]/30 text-white border-[var(--glass-border)] rounded-full px-8 py-4">
              <Zap className="w-5 h-5 mr-3" />
              Featured Games
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-text">
              Popular This Week
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Discover the most loved games in our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--gaming-card)] border-[var(--gaming-border)] overflow-hidden game-card-hover cursor-pointer">
                  <div className="relative">
                    <ImageWithFallback
                      src={game.image}
                      alt={game.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {game.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          className={`text-xs ${
                            tag === 'New' ? 'bg-[var(--neon-green)]/20 text-[var(--neon-green)] border-[var(--neon-green)]/30' :
                            tag === 'Featured' ? 'bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] border-[var(--neon-cyan)]/30' :
                            tag === 'Popular' ? 'bg-[var(--neon-pink)]/20 text-[var(--neon-pink)] border-[var(--neon-pink)]/30' :
                            tag === 'VR Ready' ? 'bg-[var(--neon-purple)]/20 text-[var(--neon-purple)] border-[var(--neon-purple)]/30' :
                            'bg-white/10 text-white border-white/20'
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <Button className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-green)] transform hover:scale-105 transition-all duration-300">
                        <Play className="w-4 h-4 mr-2" />
                        Play Now
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
                        <p className="text-[var(--neon-cyan)] font-medium">{game.genre}</p>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="font-medium">{game.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {game.players} players
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="glass-button border-[var(--glass-border)] text-white hover:bg-[var(--glass-primary)] px-12 py-5 rounded-3xl hover:scale-105 transition-all duration-500"
              onClick={() => onNavigate('games')}
            >
              View All Games
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;