import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t-4 border-primary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">關於遊戲</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              方塊世界是一款充滿創意和冒險的遊戲。在這個由方塊組成的世界中，你可以自由探索、建造和生存。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#intro" className="text-muted-foreground hover:text-primary transition-colors">
                  遊戲介紹
                </a>
              </li>
              <li>
                <a href="#video" className="text-muted-foreground hover:text-primary transition-colors">
                  影片教學
                </a>
              </li>
              <li>
                <a href="#tutorial" className="text-muted-foreground hover:text-primary transition-colors">
                  玩法說明
                </a>
              </li>
              <li>
                <a href="#rules" className="text-muted-foreground hover:text-primary transition-colors">
                  遊戲規則
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">聯絡資訊</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Email: contact@blockworld.game
            </p>
            <p className="text-muted-foreground text-sm">
              Discord: BlockWorld Community
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm flex items-center justify-center gap-2">
            製作於 2024 
            <Heart className="w-4 h-4 text-primary fill-primary" />
            學生專案
          </p>
        </div>
      </div>
    </footer>
  );
}
