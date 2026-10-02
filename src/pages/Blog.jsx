import { useMemo, useState } from 'react';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';
import Pagination from '../components/common/Pagination';
import BlogPostCard from '../components/blog/BlogPostCard';
import BlogSidebar from '../components/blog/BlogSidebar';
import { blogPosts } from '../data/blog';

const POSTS_PER_PAGE = 3;
const categoryNames = ['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'];

function Blog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [page, setPage] = useState(1);

  // Changing a filter always jumps back to page 1
  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };
  const handleCategory = (value) => {
    setActiveCategory(value);
    setPage(1);
  };

  // Category counts calculated from the data
  const categories = categoryNames.map((name) => ({
    name,
    count: blogPosts.filter((p) => p.category === name).length,
  }));

  const filtered = useMemo(
    () =>
      blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) &&
          (!activeCategory || p.category === activeCategory),
      ),
    [search, activeCategory],
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      <PageBanner title="Blog" />

      <section className="blog-section">
        <div className="container-xl">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-8">
              {visible.length === 0 && <p className="text-gray">No posts match your search.</p>}
              {visible.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(p) => {
                  setPage(p);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              />
            </div>
            <div className="col-lg-4">
              <BlogSidebar
                search={search}
                setSearch={handleSearch}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={handleCategory}
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturesBar />
    </>
  );
}

export default Blog;
