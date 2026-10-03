import Navbar from '@/components/Navbar';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <BlogList title="Articles & Case Studies" />
      </div>
      <Footer />
    </main>
  );
}
