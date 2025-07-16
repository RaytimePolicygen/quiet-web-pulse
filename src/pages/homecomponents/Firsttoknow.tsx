
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Bell } from 'lucide-react';
import EmailSubscriptionDialog from '@/components/EmailSubscriptionDialog';

const Firsttoknow: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubscribe = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-800 mb-6">
              <Bell className="h-8 w-8 text-blue-200" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the First to Know</h2>
            <p className="text-lg text-blue-200 mb-8">
              Join our waitlist to receive updates on our launch, early access opportunities, 
              and exclusive insights into the future of autonomous mobility.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                readOnly
                onClick={handleSubscribe}
              />
              <Button 
                onClick={handleSubscribe}
                className="bg-white text-blue-900 hover:bg-blue-100"
              >
                <span>Subscribe</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-blue-300 mt-4">
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
