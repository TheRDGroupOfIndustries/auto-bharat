import Text from "@/components/Heading";
import HorizontalProgressBar from "@/components/HorizontalProgressBar";
import { Button } from "@/components/ui/button";
import Community from "@/Sections/Community";
import Support from "@/Sections/Support";

export default function Home() {
  return (
    <div className="bg-black h-full<HorizontalProgressBar /> w-full">
      <HorizontalProgressBar/>
      <div id="support"><Support /></div>
      <div id="community"><Community /></div>
    </div>
  );
}
