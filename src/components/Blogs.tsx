import { Calendar, Clock, ArrowUpRight, Bookmark, Eye } from 'lucide-react';

export function Blogs() {
  const blogs = [
    {
      title: 'Building Modern Web Applications',
      excerpt: 'Exploring the latest trends and best practices in web development.',
      date: 'Dec 10, 2024',
      readTime: '5 min',
      views: '1.2k',
    },
    {
      title: 'The Art of Minimalist Design',
      excerpt: 'How less can be more when it comes to user interface design.',
      date: 'Dec 5, 2024',
      readTime: '4 min',
      views: '980',
    },
    {
      title: 'Performance Optimization Tips',
      excerpt: 'Speed up your applications with these proven techniques.',
      date: 'Nov 28, 2024',
      readTime: '7 min',
      views: '1.5k',
    },
    {
      title: 'Design Systems at Scale',
      excerpt: 'Creating and maintaining consistent design across products.',
      date: 'Nov 20, 2024',
      readTime: '6 min',
      views: '890',
    },
    {
      title: 'JavaScript Best Practices',
      excerpt: 'Writing clean, maintainable code that stands the test of time.',
      date: 'Nov 15, 2024',
      readTime: '5 min',
      views: '1.1k',
    },
    {
      title: 'Accessibility Matters',
      excerpt: 'Building inclusive web experiences for everyone.',
      date: 'Nov 8, 2024',
      readTime: '4 min',
      views: '750',
    },
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Blog Posts</h2>
          <p className="text-slate-600">
            Thoughts, insights, and learnings from my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                  <Bookmark className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <h3 className="text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                {blog.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views}</span>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-slate-800 flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
