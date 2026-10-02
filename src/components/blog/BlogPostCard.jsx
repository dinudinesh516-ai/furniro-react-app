import { PiUserFill, PiCalendarBlankFill, PiTagFill } from 'react-icons/pi';

function BlogPostCard({ post }) {
  return (
    <article className="blog-post">
      <img src={post.image} alt={post.title} loading="lazy" />
      <div className="blog-meta d-flex flex-wrap gap-4">
        <span><PiUserFill /> {post.author}</span>
        <span><PiCalendarBlankFill /> {post.date}</span>
        <span><PiTagFill /> {post.category}</span>
      </div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href="#read" className="read-more" onClick={(e) => e.preventDefault()}>Read more</a>
    </article>
  );
}

export default BlogPostCard;
