import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Play,
  Star,
  Users,
  Download,
  Heart,
} from "lucide-react";

interface GameCardProps {
  game: {
    id: number;
    title: string;
    genre: string;
    rating: number;
    players: string;
    image: string;
    tags: string[];
    price?: string;
  };
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
    >
      <Card className="glass-card liquid-border overflow-hidden liquid-card-hover cursor-pointer group rounded-3xl">
        <div className="relative">
          <ImageWithFallback
            src={game.image}
            alt={game.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-3xl"
          />

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <Badge
                key={tag}
                className={`text-xs rounded-full px-3 py-1 font-medium ${
                  tag === "New" || tag === "FREE"
                    ? "bg-[var(--apple-green)]/90 text-white backdrop-blur-md"
                    : tag === "Featured" || tag === "Exclusive"
                      ? "bg-[var(--apple-blue)]/90 text-white backdrop-blur-md"
                      : tag === "Popular" || tag === "Trending"
                        ? "bg-[var(--apple-pink)]/90 text-white backdrop-blur-md"
                        : tag === "VR Ready" || tag === "HD"
                          ? "bg-[var(--apple-purple)]/90 text-white backdrop-blur-md"
                          : "bg-white/90 text-[var(--apple-text-primary)] backdrop-blur-md"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Favorite Button */}
          <motion.button
            className="absolute top-4 right-4 p-3 rounded-2xl glass-button text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-5 h-5" />
          </motion.button>

          {/* Price Tag */}
          {game.price && (
            <div className="absolute bottom-4 right-4 glass-button text-white px-4 py-2 rounded-2xl text-sm font-semibold">
              {game.price}
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center rounded-t-3xl">
            <div className="text-center space-y-4">
              <Button
                size="sm"
                className="bg-white text-[var(--apple-blue)] hover:bg-white/90 transform hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 font-semibold liquid-shadow"
              >
                <Play className="w-4 h-4 mr-2" />
                Play Now
              </Button>
              <div className="flex gap-3 justify-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/20 rounded-full backdrop-blur-md"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-bold text-white mb-1 line-clamp-1">
                {game.title}
              </h3>
              <p className="text-[var(--neon-cyan)] text-sm font-medium">
                {game.genre}
              </p>
            </div>
            <div className="flex items-center text-yellow-400 ml-2">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span className="text-sm font-medium">
                {game.rating}
              </span>
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
  );
};

export default GameCard;