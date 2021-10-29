import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const FeaturedPost = ({ post }) => {
  const { feature_image, title, excerpt } = post;
  return (
    <div className="post-card post-card-large">
      <div className="post-card-large-image cursor-pointer">
        <Link href={`/post/${post.slug}`}>
          <img src={feature_image} alt={title} width={800} height={400} />
        </Link>
      </div>
      <div className="post-title-desc">
        <div style={{ width: "100%" }}>
          {post?.tags &&
            post?.tags?.map((tag) => (
              <span key={tag.id} className="post-tags">
                <Link href={`/tag/${tag.slug}`}>
                  <a>{tag.name}</a>
                </Link>
              </span>
            ))}
        </div>
        <Link href={`/post/${post.slug}`} className="cursor-pointer">
          <a>
            <span className="post-title">{post.title}</span>
            <p>{post.excerpt.substring(0, 150) + "..."}</p>
          </a>
        </Link>
        {post?.primary_author && (
          <div className="author">
            <div className="float-left">
              {console.log(
                post?.primary_author?.profile_image.replace("//", "http://")
              )}
              {post?.primary_author?.profile_image && (
                <Link href={`/author/${post?.primary_author?.slug}`}>
                  <img
                    className="author-pic cursor-pointer"
                    src={post?.primary_author?.profile_image}
                    width="30"
                  />
                </Link>
              )}
            </div>
            <div className="float-right">
              <span className="author-name cursor-pointer">
                <Link href={`/author/${post?.primary_author?.slug}`}>
                  {post?.primary_author?.name}
                </Link>
              </span>
              <br />
              <span className="text-light font-size-small">
                {moment(post.published_at).format("MMMM Do YYYY")}
                &nbsp;<span>•</span>&nbsp;
                {post.reading_time} min read
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPost;
