import { Home, User, BookOpen, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const navItems = [
    { id: 'intro', icon: Home, label: 'Intro' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'blogs', icon: BookOpen, label: 'Blogs' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`group flex flex-col items-center gap-1 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-slate-900 text-white scale-105'
                    : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
