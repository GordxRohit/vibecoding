import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Home, 
  Gamepad2, 
  Users, 
  Newspaper, 
  HelpCircle, 
  Menu,
  X,
  Zap,
  LogOut,
  Settings,
  User
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
  user?: any;
  onSignOut?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  onNavigate, 
  isAuthenticated = false, 
  user, 
  onSignOut 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 glass-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl glass-button bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] opacity-30 blur-lg"></div>
            </div>
            <span className="text-2xl font-bold liquid-text">
              GameHub
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`relative px-6 py-3 rounded-2xl transition-all duration-500 ${
                      isActive 
                        ? 'glass-button bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] text-white' 
                        : 'text-white/80 hover:text-white hover:glass-button'
                    }`}
                    onClick={() => onNavigate(item.id)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] opacity-20 blur-sm"
                        layoutId="activeTab"
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                <Badge 
                  variant="secondary" 
                  className="glass-button bg-gradient-to-r from-[var(--apple-green)]/30 to-[var(--apple-blue)]/30 text-white border-[var(--glass-border)] rounded-2xl px-4 py-2 font-medium"
                >
                  Pro User
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-12 w-12 rounded-2xl glass-button hover:scale-105 transition-all duration-300">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback className="bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] text-white">
                          {user.firstName?.[0]}{user.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60 glass-card border-[var(--glass-border)] rounded-2xl p-2" align="end">
                    <div className="flex items-center space-x-3 p-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback className="bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] text-white">
                          {user.firstName?.[0]}{user.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium text-white">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-white/60">@{user.username}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator className="bg-[var(--glass-border-light)]" />
                    <DropdownMenuItem className="text-white hover:bg-[var(--glass-primary)] rounded-xl cursor-pointer">
                      <User className="mr-3 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-[var(--glass-primary)] rounded-xl cursor-pointer">
                      <Settings className="mr-3 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[var(--glass-border-light)]" />
                    <DropdownMenuItem 
                      className="text-red-400 hover:bg-red-500/10 rounded-xl cursor-pointer"
                      onClick={onSignOut}
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button 
                size="sm" 
                className="glass-button bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] text-white font-medium rounded-2xl px-8 py-3 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--apple-blue)]/20"
                onClick={() => onNavigate('auth')}
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:glass-button rounded-2xl p-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden py-8 border-t border-[var(--glass-border-light)] glass-card mt-4 rounded-3xl mx-4"
            initial={{ opacity: 0, height: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, height: 'auto', scale: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4 px-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start rounded-2xl py-4 transition-all duration-500 ${
                      isActive 
                        ? 'glass-button bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] text-white' 
                        : 'text-white/80 hover:text-white hover:glass-button'
                    }`}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="w-5 h-5 mr-4" />
                    {item.label}
                  </Button>
                );
              })}
              <div className="pt-6 border-t border-[var(--glass-border-light)] space-y-4">
                {isAuthenticated && user ? (
                  <>
                    <div className="flex items-center space-x-3 p-3 glass-button rounded-2xl">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback className="bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] text-white">
                          {user.firstName?.[0]}{user.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium text-white">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-white/60">@{user.username}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="w-full glass-button bg-gradient-to-r from-[var(--apple-green)]/30 to-[var(--apple-blue)]/30 text-white border-[var(--glass-border)] rounded-2xl py-3"
                    >
                      Pro User
                    </Badge>
                    <Button 
                      className="w-full glass-button bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30 font-medium rounded-2xl py-4"
                      onClick={() => {
                        onSignOut?.();
                        setMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button 
                    className="w-full glass-button bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] text-white font-medium rounded-2xl py-4"
                    onClick={() => {
                      onNavigate('auth');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;