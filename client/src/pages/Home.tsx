import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import VideoSection from "@/components/VideoSection";
import TutorialSteps from "@/components/TutorialSteps";
import GameRules from "@/components/GameRules";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeatureCards />
        <VideoSection />
        <TutorialSteps />
        <GameRules />
      </main>
      <Footer />
    </div>
  );
}
