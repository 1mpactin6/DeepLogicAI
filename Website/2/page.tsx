import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d1b24]">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">DeepLogicAI</h1>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20"
          >
            Contact Us
          </Button>
          <Button
            variant="outline"
            className="bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20"
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center max-w-3xl">
        <span className="text-amber-500 text-sm mb-4 block">Introduction</span>
        <h2 className="text-4xl font-bold text-white mb-6">DeepLogic AI</h2>
        <p className="text-slate-400 leading-relaxed">
          Introducing you to our experience enhanced efficiency! As a Language Model (LLM), DeepLogicAI, your leading
          choice for creating prompts. Markdown documentation with methodology, designed to simplify understanding and
          boost productivity, ensuring your documentation needs are both met and exceeded.
        </p>
      </section>

      {/* Prompting Challenges Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center bg-[#0a141a]">
        <div>
          <span className="text-amber-500 text-sm mb-4 block">Effective Insights</span>
          <h3 className="text-3xl font-bold text-white mb-4">Prompting Challenges</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Throughout training DeepLogic AI, we have encountered several challenges. Such as but not limited to, that
            the Large Language Models, for logic reasoning provides misinformation.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">Challenges</Button>
        </div>
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20233228-h5dfc1cyrhIhlyAYFfzI0tN5z0lF4N.png"
            alt="AI Interface Demonstration"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Profile Section */}
      <section className="container mx-auto px-6 py-16">
        <span className="text-amber-500 text-sm mb-4 block">Profile</span>
        <h3 className="text-3xl font-bold text-white mb-4">DeepLogic</h3>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          Explore the expansive department of DeepLogic's profile links, meticulously curated to ensure your convenience
          and easy access, all available right here.
        </p>
      </section>

      {/* AI Cards Section */}
      <section className="container mx-auto px-6 py-8 space-y-12">
        {/* Poe: Bruno Card */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20233112-qOwryzw5A3xYhTo3BJEDGtYK3Jw91K.png"
              alt="AI Cube Visualization"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-amber-500 text-sm mb-2 block">@bGurru</span>
            <h4 className="text-2xl font-bold text-white mb-3">Poe: Bruno</h4>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Uploaded the initial prompt-edited DeepLogic Models, including V4, #2 and R4, the latest Version 5 Models
              and starting Reasoning9 Models
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black" asChild>
              <a href="https://poe.com/b1run0iu" target="_blank" rel="noopener noreferrer">
                Direct Link
              </a>
            </Button>
          </div>
        </div>

        {/* Poe: DeepLogicAI Card */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <span className="text-amber-500 text-sm mb-2 block">@DeepLogicAI</span>
            <h4 className="text-2xl font-bold text-white mb-3">Poe: DeepLogicAI</h4>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Uploaded the later Reasoning Models and DeepLogic X Version Models.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black" asChild>
              <a href="https://poe.com/deeplogicai" target="_blank" rel="noopener noreferrer">
                Direct Link
              </a>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden md:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20233126-RKVEKlqr5AkR6jNq2aLKTBoQN3VR09.png"
              alt="AI Circuit Board"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TBox: Bruno Card */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20233137-dNRZyq8EaPlmOuqA6v0Sbtqn69OVJQ.png"
              alt="AI Keyboard Visualization"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-amber-500 text-sm mb-2 block">@TBox</span>
            <h4 className="text-2xl font-bold text-white mb-3">TBox: Bruno</h4>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Uploaded DeepLogic's X1, X2, I1, I1-mini, and U2 Models, these models are either WorkFlows or Chats.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black" asChild>
              <a href="https://tbox.alipay.com/pro/community" target="_blank" rel="noopener noreferrer">
                TBox Pro
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

