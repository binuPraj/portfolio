import { Github, Linkedin, Twitter, ArrowDown, Sparkles } from 'lucide-react';

export function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-800 to-slate-600 mx-auto flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full animate-pulse" />
        </div>

        <h1 className="mb-4">
          <span className="text-slate-600">Hello, I'm</span>
          <br />
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>

        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Creative Developer • Designer • Problem Solver
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <Twitter className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
}
