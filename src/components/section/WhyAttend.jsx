import { Drum, Brain, Globe, Theater } from "lucide-react";

const points = [
  {
    icon: <Drum className="text-[#fbbf24]" size={32} />, // Yellow (drum vibes)
    title: "Feel the Rhythm",
    desc: "Experience live sessions and music collabs from the heart of African creativity.",
  },
  {
    icon: <Brain className="text-[#22d3ee]" size={32} />, // Electric blue
    title: "Learn from Visionaries",
    desc: "Creators, designers, and AI innovators who speak your language and share your story.",
  },
  {
    icon: <Theater className="text-[#ec4899]" size={32} />, // Pink heritage
    title: "Celebrate Culture",
    desc: "From digital fashion to storytelling, this is the homecoming of African expression.",
  },
  {
    icon: <Globe className="text-[#10b981]" size={32} />, // Green for unity
    title: "Connect Globally",
    desc: "Build real community with fellow creatives across the continent and diaspora.",
  },
];

export default function WhyAttend() {
  return (
    <section className="bg-[#5e2d2d] py-20 px-6 text-[#fefae0]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Attend Gbedu City?
        </h2>
        <p className="mt-4 text-lg text-[#fefae0]/80 max-w-2xl mx-auto">
          This isn’t just another event. It’s a celebration, a revelation, a
          renaissance.
        </p>
      </div>

      <div className="space-y-10 max-w-3xl mx-auto">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="shrink-0">{point.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="text-[#fefae0]/80">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
