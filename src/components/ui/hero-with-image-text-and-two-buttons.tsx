import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">5,000+ Productivity Enthusiasts</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Reclaim Your Time. Unlock Your Potential.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                TimeCraft helps you turn 24+ hours of unused weekly time into progress that matters. 
                Our <em>Deep Work</em> framework turns scattered evenings and weekends into intentional growth.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Learn more <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Start now <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative rounded-md overflow-hidden aspect-square shadow-xl">
            <Image 
              src="/ghibli-landing-page.png" 
              alt="Ghibli-inspired landscape" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transform scale-x-[-1]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 