import { Code2, Palette, Rocket, Zap, Award, Heart } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Code2, title: 'Development', color: 'from-blue-500 to-blue-600' },
    { icon: Palette, title: 'Design', color: 'from-purple-500 to-purple-600' },
    { icon: Rocket, title: 'Innovation', color: 'from-orange-500 to-orange-600' },
    { icon: Zap, title: 'Performance', color: 'from-yellow-500 to-yellow-600' },
    { icon: Award, title: 'Quality', color: 'from-emerald-500 to-emerald-600' },
    { icon: Heart, title: 'Passion', color: 'from-pink-500 to-pink-600' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I craft digital experiences that blend creativity with functionality.
            Passionate about building beautiful, user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} mx-auto mb-4 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-center text-slate-800">{skill.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-600 mb-6">
              With years of experience in web development and design, I specialize in creating
              intuitive and engaging digital experiences. My approach combines technical expertise
              with creative problem-solving to deliver solutions that truly make a difference.
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-slate-900 mb-1">5+</div>
                <div className="text-slate-500 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-slate-900 mb-1">50+</div>
                <div className="text-slate-500 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-slate-900 mb-1">30+</div>
                <div className="text-slate-500 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
