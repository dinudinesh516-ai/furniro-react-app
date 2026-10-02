import { PiMagnifyingGlass } from 'react-icons/pi';
import { recentPosts } from '../../data/blog';

function BlogSidebar({ search, setSearch, categories, activeCategory, setActiveCategory }) {
  return (
    <aside className="blog-sidebar">
      <div className="blog-search">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search posts"
        />
        <PiMagnifyingGlass />
      </div>

      <h3>Categories</h3>
      <ul className="list-unstyled cat-list">
        {categories.map(({ name, count }) => (
          <li key={name}>
            <button
              type="button"
              className={activeCategory === name ? 'active' : ''}
              onClick={() => setActiveCategory(activeCategory === name ? '' : name)}
            >
              <span>{name}</span>
              <span>{count}</span>
            </button>
          </li>
        ))}
      </ul>

      <h3 className="mt-5">Recent Posts</h3>
      <ul className="list-unstyled recent-list">
        {recentPosts.map((post) => (
          <li key={post.id} className="d-flex gap-3 align-items-center">
            <img src={post.image} alt={post.title} />
            <div>
              <p>{post.title}</p>
              <small>{post.date}</small>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default BlogSidebar;
