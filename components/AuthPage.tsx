import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowLeft,
  Github,
  Linkedin,
  Apple,
  Chrome
} from 'lucide-react';

interface AuthPageProps {
  onSignIn: (userData: any) => void;
  onNavigate: (page: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onSignIn, onNavigate }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        firstName: authMode === 'signup' ? formData.firstName : 'John',
        lastName: authMode === 'signup' ? formData.lastName : 'Doe',
        username: authMode === 'signup' ? formData.username : 'johndoe',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.email}`,
        provider: 'email'
      };
      
      onSignIn(userData);
      setIsLoading(false);
    }, 1500);
  };

  const handleOAuthSignIn = (provider: string) => {
    setIsLoading(true);
    
    // Simulate OAuth flow
    setTimeout(() => {
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email: `user@${provider.toLowerCase()}.com`,
        firstName: 'Demo',
        lastName: 'User',
        username: `demouser_${provider.toLowerCase()}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`,
        provider: provider.toLowerCase()
      };
      
      onSignIn(userData);
      setIsLoading(false);
    }, 1000);
  };

  const oauthProviders = [
    { name: 'Google', icon: Chrome, color: 'from-red-500 to-orange-500' },
    { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-800' },
    { name: 'Apple', icon: Apple, color: 'from-gray-800 to-black' },
  ];

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0">
        {/* Background Animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[var(--apple-blue)]/20 to-[var(--apple-purple)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[var(--apple-green)]/20 to-[var(--apple-pink)]/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[var(--apple-orange)]/10 to-[var(--apple-blue)]/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Back Button */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="ghost"
            className="glass-button text-white hover:bg-[var(--glass-primary)] rounded-2xl p-3"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        <Card className="glass-card border-[var(--glass-border)] rounded-3xl p-8 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 glass-button bg-gradient-to-br from-[var(--apple-blue)] to-[var(--apple-purple)] rounded-3xl flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-2">
                {authMode === 'signin' ? 'Welcome Back' : 'Join GameHub'}
              </CardTitle>
              <CardDescription className="text-white/60 text-lg">
                {authMode === 'signin' 
                  ? 'Sign in to continue your gaming journey' 
                  : 'Create your account to get started'
                }
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* OAuth Providers */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {oauthProviders.map((provider, index) => {
                  const Icon = provider.icon;
                  return (
                    <motion.div
                      key={provider.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full glass-button border-[var(--glass-border-light)] text-white hover:bg-[var(--glass-primary)] rounded-2xl py-6 group transition-all duration-500"
                        onClick={() => handleOAuthSignIn(provider.name)}
                        disabled={isLoading}
                      >
                        <Icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        {provider.name}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Separator className="bg-[var(--glass-border-light)]" />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--glass-secondary)] px-4 py-2 rounded-full">
                <span className="text-white/60 text-sm">or continue with email</span>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <AnimatePresence mode="wait">
                {authMode === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white/80">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required={authMode === 'signup'}
                          className="glass-button bg-[var(--glass-tertiary)] border-[var(--glass-border-light)] text-white placeholder:text-white/40 rounded-2xl py-6"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required={authMode === 'signup'}
                          className="glass-button bg-[var(--glass-tertiary)] border-[var(--glass-border-light)] text-white placeholder:text-white/40 rounded-2xl py-6"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-white/80">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange}
                        required={authMode === 'signup'}
                        className="glass-button bg-[var(--glass-tertiary)] border-[var(--glass-border-light)] text-white placeholder:text-white/40 rounded-2xl py-6"
                        placeholder="johndoe"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-button bg-[var(--glass-tertiary)] border-[var(--glass-border-light)] text-white placeholder:text-white/40 rounded-2xl py-6 pl-12"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/80">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="glass-button bg-[var(--glass-tertiary)] border-[var(--glass-border-light)] text-white placeholder:text-white/40 rounded-2xl py-6 pl-12 pr-12"
                    placeholder="••••••••"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white rounded-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {authMode === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-2"
                  >
                    <Label htmlFor="confirmPassword" className="text-white/80">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={authMode === 'signup'}
                        className="glass-button bg-[var(--glass-tertiary)] border-[var(--glass-border-light)] text-white placeholder:text-white/40 rounded-2xl py-6 pl-12 pr-12"
                        placeholder="••••••••"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white rounded-xl"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                className="w-full glass-button bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] text-white font-semibold py-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--apple-blue)]/30"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  authMode === 'signin' ? 'Sign In' : 'Create Account'
                )}
              </Button>
            </motion.form>

            {/* Switch Auth Mode */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-white/60">
                {authMode === 'signin' ? "Don't have an account?" : "Already have an account?"}
              </p>
              <Button
                variant="ghost"
                className="text-[var(--apple-blue)] hover:text-white hover:bg-[var(--glass-primary)] rounded-2xl mt-2"
                onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
              >
                {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
              </Button>
            </motion.div>
          </CardContent>
        </Card>

        {/* Terms and Privacy */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-white/40 text-sm">
            By continuing, you agree to our{' '}
            <span className="text-[var(--apple-blue)] cursor-pointer hover:underline">Terms of Service</span>
            {' '}and{' '}
            <span className="text-[var(--apple-blue)] cursor-pointer hover:underline">Privacy Policy</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;