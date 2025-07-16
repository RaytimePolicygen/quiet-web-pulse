
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Bell, Sparkles } from 'lucide-react';
import EmailSubscriptionDialog from '@/components/EmailSubscriptionDialog';

const Firsttoknow: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubscribe = () => {
    console.log('Notify Me button clicked - opening dialog');
    setIsDialogOpen(true);
  };

  const handleInputClick = () => {
    console.log('Email input clicked - opening dialog');
    setIsDialogOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px, 50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-8">
              <Bell className="h-10 w-10 text-blue-300" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Be the First to <span className="text-blue-400">Know</span>
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join our waitlist to receive updates on our launch, early access opportunities, 
              and exclusive insights into the future of autonomous mobility.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Exclusive Access</span>
              </div>
              
              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 cursor-pointer rounded-xl h-12"
                  readOnly
                  onClick={handleInputClick}
                />
                <Button 
                  onClick={handleSubscribe}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 rounded-xl h-12 font-semibold"
                  type="button"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-blue-300 mt-8 max-w-2xl mx-auto">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </section>

      <EmailSubscriptionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Be the First to Know"
        description="Join our waitlist to receive updates on our launch, early access opportunities, and exclusive insights into the future of autonomous mobility."
        source="firsttoknow"
      />
    </>
  );
};

export default Firsttoknow;
