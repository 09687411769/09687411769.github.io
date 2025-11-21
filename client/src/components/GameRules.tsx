import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Lightbulb, Sword, Heart, Pickaxe } from "lucide-react";

const rules = [
  {
    title: "基本規則",
    icon: Heart,
    content: "你的角色有生命值和飢餓值，需要及時補充食物和治療。避免從高處墜落，小心怪物攻擊。白天是安全的探索時間，夜晚會出現危險的怪物。",
  },
  {
    title: "戰鬥系統",
    icon: Sword,
    content: "使用武器攻擊敵人，不同武器有不同的傷害和攻擊範圍。盾牌可以格擋攻擊，弓箭可以遠程攻擊。打敗怪物會掉落經驗值和道具。",
  },
  {
    title: "採集與製作",
    icon: Pickaxe,
    content: "使用正確的工具採集資源更有效率。例如用斧頭砍樹、用鎬挖礦。在工作台上可以製作各種物品，合成配方需要按照特定排列。",
  },
];

const tips = [
  "建議先製作工作台和箱子，方便製作和儲存物品",
  "夜晚來臨前務必找到或建造庇護所",
  "定期儲存進度，避免意外損失",
  "探索洞穴時攜帶火把照明，小心岩漿",
  "與村民交易可以獲得稀有物品",
  "種植農作物可以持續獲得食物來源",
];

export default function GameRules() {
  return (
    <section id="rules" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 text-foreground">
            遊戲規則
          </h2>
          <p className="text-muted-foreground text-lg">
            了解規則才能玩得更好
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {rules.map((rule, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none"
                  data-testid={`accordion-rule-${index}`}
                >
                  <Card>
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <rule.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-left">{rule.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {rule.content}
                      </p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">遊戲提示</h3>
              </div>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm text-muted-foreground"
                    data-testid={`tip-${index}`}
                  >
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
