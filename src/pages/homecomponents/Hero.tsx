
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import EmailSubscriptionDialog from "@/components/EmailSubscriptionDialog";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleJoinMovement = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <section className="relative text-white bg-gray-900 overflow-hidden w-full min-h-screen">
        {/* Background video with proper overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source 
            src="https://zkuplzcekkckzqjyudtd.supabase.co/storage/v1/object/public/introvideo/pliyt_converted.mp4" 
            type="video/mp4" 
          />
          {/* Fallback background image in case video fails to load */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/heroimage.png')`,
              filter: 'brightness(0.7)'
            }}
          />
        </video>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center min-h-screen py-20">
            <div className="max-w-4xl space-y-6 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in">
                The Future of Private,<br />
                Autonomous Ride-Sharing<br />
                Begins Here
              </h1>
              <p className="text-xl sm:text-2xl md:text-1xl animate-fade-in max-w-2xl" style={{ animationDelay: "200ms", color: "white" }}>
                Experience self-driving mobility that puts your privacy,
                comfort, and well-being first.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <Button 
                  onClick={handleJoinMovement}
                  size="default" 
                  className="bg-blue-700 hover:bg-blue-600 text-white rounded-full flex items-center gap-2 px-6 md:px-8 py-4 md:py-6 text-base sm:text-lg shadow-lg"
                >
                  Join The Movement
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm sm:text-base md:text-lg pt-2 animate-fade-in text-white" style={{ animationDelay: "600ms" }}>
                Be the first to know when we launch
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmailSubscriptionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Join The Movement"
        description="Be the first to know when we launch and get exclusive updates about the future of autonomous mobility."
        source="hero"
      />
    </>
  );
};

export default Hero;
