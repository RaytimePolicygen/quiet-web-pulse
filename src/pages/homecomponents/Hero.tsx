
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
      <section className="relative text-white bg-gray-900 overflow-hidden w-full min-h-screen flex items-center">
        {/* Background video with proper overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ filter: 'brightness(0.6)' }}
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
              filter: 'brightness(0.6)'
            }}
          />
        </video>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900/60 to-black/70" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-in">
              The Future of Private,<br />
              <span className="text-blue-400">Autonomous</span> Ride-Sharing<br />
              Begins Here
            </h1>
            <p className="text-xl md:text-2xl animate-fade-in max-w-3xl mb-10 leading-relaxed text-gray-200" style={{ animationDelay: "200ms" }}>
              Experience self-driving mobility that puts your privacy,
              comfort, and well-being first.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button 
                onClick={handleJoinMovement}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-3 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Join The Movement
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-base mt-4 animate-fade-in text-gray-300" style={{ animationDelay: "600ms" }}>
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
