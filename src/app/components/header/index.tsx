import { Button } from "@/components/ui/button";
import githubSvg from "../../../../public/github.svg";
import mediumSvg from "../../../../public/medium.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center ">
        <h2 className="font-semibold text-lg tracking-tight">BudgetBot MA</h2>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button asChild size="sm" variant="ghost">
          <a
            target="_blank"
            href="https://github.com/ABelcaid/budget-bot-ma"
            rel="noopener noreferrer"
          >
            <Image width={25} height={25} src={githubSvg} alt={""} />
            <span className="hidden ml-2 md:flex">GitHub</span>
          </a>
        </Button>

        <Button asChild size="sm" variant="ghost">
          <a
            target="_blank"
            href="https://medium.com/@belcaid/how-to-build-a-chatbot-using-openai-a-step-by-step-guide-61b8d60f7c4e"
            rel="noopener noreferrer"
          >
            <Image width={25} height={25} src={mediumSvg} alt={""} />
            <span className="hidden ml-2 md:flex">Medium</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
