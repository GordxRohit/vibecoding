import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import GameCard from './GameCard';
import { Search, Filter, Grid3X3, List, Zap } from 'lucide-react';

const GameLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const games = [
    {
      id: 1,
      title: "Cyber Nexus",
      genre: "Action RPG",
      rating: 4.8,
      players: "2.3M",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      tags: ["New", "Popular"],
      price: "FREE"
    },
    {
      id: 2,
      title: "Quantum Realms",
      genre: "Adventure",
      rating: 4.9,
      players: "1.8M",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
      tags: ["Featured", "VR Ready"],
      price: "$29.99"
    },
    {
      id: 3,
      title: "Mech Warriors",
      genre: "Simulation",
      rating: 4.7,
      players: "956K",
      image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=600&h=400&fit=crop",
      tags: ["Trending"],
      price: "$19.99"
    },
    {
      id: 4,
      title: "Stellar Odyssey",
      genre: "Space Exploration",
      rating: 4.6,
      players: "1.2M",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      tags: ["New", "HD"],
      price: "$39.99"
    },
    {
      id: 5,
      title: "Dragon's Realm",
      genre: "Fantasy RPG",
      rating: 4.9,
      players: "3.1M",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      tags: ["Popular", "Exclusive"],
      price: "FREE"
    },
    {
      id: 6,
      title: "Neon Runner",
      genre: "Racing",
      rating: 4.5,
      players: "876K",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      tags: ["VR Ready", "Trending"],
      price: "$24.99"
    }
  ];

  const genres = [
    { value: 'all', label: 'All Genres' },
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'simulation', label: 'Simulation' },
    { value: 'rpg', label: 'RPG' },
    { value: 'racing', label: 'Racing' },
    { value: 'space', label: 'Space' }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || 
                        game.genre.toLowerCase().includes(selectedGenre) ||
                        (selectedGenre === 'rpg' && game.genre.toLowerCase().includes('rpg')) ||
                        (selectedGenre === 'space' && game.genre.toLowerCase().includes('space'));
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20 text-white border-[var(--neon-cyan)]/30">
            <Zap className="w-4 h-4 mr-2" />
            Game Library
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Discover Amazing 3D Games
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our vast collection of immersive 3D gaming experiences
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[var(--gaming-card)] border-[var(--gaming-border)] text-white placeholder-gray-400"
                />
              </div>

              {/* Genre Filter */}
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-full sm:w-48 bg-[var(--gaming-card)] border-[var(--gaming-border)] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[var(--gaming-card)] border-[var(--gaming-border)]">
                  {genres.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value} className="text-white hover:bg-white/10">
                      {genre.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 bg-[var(--gaming-card)] border-[var(--gaming-border)] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[var(--gaming-card)] border-[var(--gaming-border)]">
                  <SelectItem value="popular" className="text-white hover:bg-white/10">Most Popular</SelectItem>
                  <SelectItem value="rating" className="text-white hover:bg-white/10">Highest Rated</SelectItem>
                  <SelectItem value="newest" className="text-white hover:bg-white/10">Newest</SelectItem>
                  <SelectItem value="alphabetical" className="text-white hover:bg-white/10">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 p-1 bg-[var(--gaming-card)] rounded-lg border border-[var(--gaming-border)]">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                className={viewMode === 'grid' ? 'bg-[var(--neon-cyan)] text-black' : 'text-gray-400 hover:text-white'}
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                className={viewMode === 'list' ? 'bg-[var(--neon-cyan)] text-black' : 'text-gray-400 hover:text-white'}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <Badge variant="outline" className="border-[var(--neon-cyan)] text-[var(--neon-cyan)]">
                Search: "{searchQuery}"
                <button 
                  onClick={() => setSearchQuery('')}
                  className="ml-2 hover:text-white"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedGenre !== 'all' && (
              <Badge variant="outline" className="border-[var(--neon-green)] text-[var(--neon-green)]">
                Genre: {genres.find(g => g.value === selectedGenre)?.label}
                <button 
                  onClick={() => setSelectedGenre('all')}
                  className="ml-2 hover:text-white"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400">
            Showing {filteredGames.length} of {games.length} games
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div 
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredGames.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-2">No games found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search criteria or browse all games
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('all');
              }}
              className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-green)]"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredGames.length > 0 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 px-8 py-3"
            >
              Load More Games
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GameLibrary;