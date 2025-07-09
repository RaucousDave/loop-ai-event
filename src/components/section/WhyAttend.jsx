import React from "react";
import { Brain, Rocket } from "lucide-react";
import { Mic } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} />,
    title: "Culturally Intelligent AI",
    description:
      "Loop.AI is tuned for African voices, languages, and styles — not western defaults.",
    flip: false,
  },
  {
    icon: <Mic size={32} />,
    title: "Live Demos & Jam Sessions",
    description:
      "Join interactive workshops where creators test Loop.AI tools in real-time.",
    flip: true,
  },
  {
    icon: <Rocket size={32} />,
    title: "Tools that Understand You",
    description:
      "From ideation to production, we’re building tools made for *your* process.",
    flip: false,
  },
];

const WhyAttend = () => {
  return (
    <section className="bg-black py-20 px-6 sm:px-8 md:px-12 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Attend Loop.AI Summit?
        </h2>

        <div className="space-y-16">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                f.flip ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="text-6xl">{f.icon}</div>
              <div className="max-w-md">
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-200">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
