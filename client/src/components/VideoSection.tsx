import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 text-foreground">
            影片教學
          </h2>
          <p className="text-muted-foreground text-lg">
            觀看影片快速了解遊戲玩法
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm mb-4 hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-110">
                  <Play className="w-10 h-10 text-primary fill-primary" />
                </div>
                <p className="text-muted-foreground">點擊播放教學影片</p>
                <p className="text-sm text-muted-foreground mt-2">
                  影片連結：https://www.youtube.com/watch?v=example
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {["基礎操作", "進階技巧", "高級攻略"].map((title, index) => (
            <Card
              key={index}
              className="p-4 hover-elevate active-elevate-2 cursor-pointer transition-all"
              data-testid={`card-video-${index}`}
            >
              <div className="aspect-video bg-muted rounded-md mb-3 flex items-center justify-center">
                <Play className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-center">{title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
