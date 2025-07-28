import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  MessageSquare, 
  Trophy, 
  Star, 
  Crown, 
  Medal,
  Flame,
  ThumbsUp,
  Reply,
  MoreHorizontal,
  Zap
} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const topPlayers = [
    {
      id: 1,
      name: "CyberNinja",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      level: 98,
      score: 125670,
      rank: 1,
      badge: "Legendary",
      achievements: 42
    },
    {
      id: 2,
      name: "QuantumGamer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332b734?w=100&h=100&fit=crop",
      level: 95,
      score: 118450,
      rank: 2,
      badge: "Elite",
      achievements: 38
    },
    {
      id: 3,
      name: "NeonStrike",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      level: 92,
      score: 112380,
      rank: 3,
      badge: "Master",
      achievements: 35
    },
    {
      id: 4,
      name: "VoidWalker",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      level: 89,
      score: 108920,
      rank: 4,
      badge: "Expert",
      achievements: 31
    },
    {
      id: 5,
      name: "StarForge",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      level: 87,
      score: 105670,
      rank: 5,
      badge: "Expert",
      achievements: 29
    }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Best strategies for Cyber Nexus boss battles",
      author: "CyberNinja",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop",
      replies: 24,
      likes: 67,
      timeAgo: "2h ago",
      category: "Strategy",
      isHot: true
    },
    {
      id: 2,
      title: "New VR mode coming to Quantum Realms - My thoughts",
      author: "QuantumGamer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332b734?w=40&h=40&fit=crop",
      replies: 18,
      likes: 45,
      timeAgo: "4h ago",
      category: "News",
      isHot: true
    },
    {
      id: 3,
      title: "Looking for team members for competitive play",
      author: "NeonStrike",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop",
      replies: 12,
      likes: 28,
      timeAgo: "6h ago",
      category: "Teams"
    },
    {
      id: 4,
      title: "Graphics settings optimization guide",
      author: "VoidWalker",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
      replies: 31,
      likes: 89,
      timeAgo: "8h ago",
      category: "Help"
    }
  ];

  const communityStats = [
    { icon: Users, value: "5.2M+", label: "Active Members", color: "var(--neon-cyan)" },
    { icon: MessageSquare, value: "230K+", label: "Forum Posts", color: "var(--neon-green)" },
    { icon: Trophy, value: "15K+", label: "Tournaments", color: "var(--neon-pink)" },
    { icon: Flame, value: "98%", label: "Online Rate", color: "var(--neon-purple)" }
  ];

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
          <Badge className="mb-4 bg-gradient-to-r from-[var(--neon-pink)]/20 to-[var(--neon-purple)]/20 text-white border-[var(--neon-pink)]/30">
            <Users className="w-4 h-4 mr-2" />
            Gaming Community
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Connect with Gamers
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the ultimate 3D gaming community where players share, compete, and grow together
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-[var(--gaming-card)] border-[var(--gaming-border)] text-center">
                <CardContent className="pt-6">
                  <div className="relative mb-4 mx-auto w-12 h-12 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 rounded-full blur-lg opacity-30"
                      style={{ backgroundColor: stat.color }}
                    ></div>
                    <Icon 
                      className="w-6 h-6 relative z-10" 
                      style={{ color: stat.color }}
                    />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 neon-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[var(--gaming-card)] border border-[var(--gaming-border)]">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-[var(--neon-cyan)] data-[state=active]:text-black text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="leaderboard"
                className="data-[state=active]:bg-[var(--neon-cyan)] data-[state=active]:text-black text-white"
              >
                Leaderboard
              </TabsTrigger>
              <TabsTrigger 
                value="forums"
                className="data-[state=active]:bg-[var(--neon-cyan)] data-[state=active]:text-black text-white"
              >
                Forums
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Top Players Preview */}
                <Card className="bg-[var(--gaming-card)] border-[var(--gaming-border)]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Crown className="w-5 h-5 mr-2 text-[var(--neon-cyan)]" />
                      Top Players
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {topPlayers.slice(0, 3).map((player, index) => (
                      <div key={player.id} className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex-shrink-0">
                          <Badge 
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              index === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                              index === 1 ? 'bg-gray-400/20 text-gray-300' :
                              'bg-orange-500/20 text-orange-400'
                            }`}
                          >
                            {player.rank}
                          </Badge>
                        </div>
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{player.name}</span>
                            <Badge className="bg-[var(--neon-green)]/20 text-[var(--neon-green)] text-xs">
                              Lv.{player.level}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-400">{player.score.toLocaleString()} pts</div>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="outline" 
                      className="w-full border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10"
                      onClick={() => setActiveTab('leaderboard')}
                    >
                      View Full Leaderboard
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-[var(--gaming-card)] border-[var(--gaming-border)]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Zap className="w-5 h-5 mr-2 text-[var(--neon-pink)]" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {forumPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarImage src={post.avatar} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm line-clamp-2 mb-1">
                              {post.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.timeAgo}</span>
                              <Badge className="bg-[var(--neon-purple)]/20 text-[var(--neon-purple)] text-xs">
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="outline" 
                      className="w-full border-[var(--neon-pink)] text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/10"
                      onClick={() => setActiveTab('forums')}
                    >
                      View All Posts
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-6">
              <Card className="bg-[var(--gaming-card)] border-[var(--gaming-border)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Trophy className="w-5 h-5 mr-2 text-[var(--neon-cyan)]" />
                    Global Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPlayers.map((player, index) => (
                      <motion.div 
                        key={player.id}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex-shrink-0">
                          <Badge 
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' :
                              index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black' :
                              index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-black' :
                              'bg-white/10 text-white'
                            }`}
                          >
                            {index < 3 ? (
                              index === 0 ? <Crown className="w-5 h-5" /> :
                              index === 1 ? <Medal className="w-5 h-5" /> :
                              <Trophy className="w-4 h-4" />
                            ) : (
                              player.rank
                            )}
                          </Badge>
                        </div>
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>{player.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-white font-bold">{player.name}</span>
                            <Badge 
                              className={`${
                                player.badge === 'Legendary' ? 'bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] text-black' :
                                player.badge === 'Elite' ? 'bg-[var(--neon-pink)]/20 text-[var(--neon-pink)]' :
                                player.badge === 'Master' ? 'bg-[var(--neon-green)]/20 text-[var(--neon-green)]' :
                                'bg-[var(--neon-purple)]/20 text-[var(--neon-purple)]'
                              }`}
                            >
                              {player.badge}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-400">
                            Level {player.level} • {player.achievements} achievements
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-[var(--neon-cyan)]">
                            {player.score.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">points</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forums" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Community Forums</h3>
                  <p className="text-gray-400">Share strategies, find teammates, and get help</p>
                </div>
                <Button className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-green)]">
                  Create New Post
                </Button>
              </div>

              <div className="space-y-4">
                {forumPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-[var(--gaming-card)] border-[var(--gaming-border)] hover:bg-white/5 transition-colors cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12 flex-shrink-0">
                            <AvatarImage src={post.avatar} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {post.isHot && (
                                <Flame className="w-4 h-4 text-orange-500" />
                              )}
                              <h4 className="text-white font-bold">{post.title}</h4>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                              <span className="font-medium text-white">{post.author}</span>
                              <span>•</span>
                              <span>{post.timeAgo}</span>
                              <Badge 
                                className={`${
                                  post.category === 'Strategy' ? 'bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)]' :
                                  post.category === 'News' ? 'bg-[var(--neon-green)]/20 text-[var(--neon-green)]' :
                                  post.category === 'Teams' ? 'bg-[var(--neon-pink)]/20 text-[var(--neon-pink)]' :
                                  'bg-[var(--neon-purple)]/20 text-[var(--neon-purple)]'
                                }`}
                              >
                                {post.category}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center gap-1 hover:text-[var(--neon-cyan)] cursor-pointer">
                                <ThumbsUp className="w-4 h-4" />
                                {post.likes}
                              </div>
                              <div className="flex items-center gap-1 hover:text-[var(--neon-green)] cursor-pointer">
                                <Reply className="w-4 h-4" />
                                {post.replies}
                              </div>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityPage;