import axios from "axios";
import Link from "next/link";

import PostCard from "../../components/PostCard";

const tag = (props) => {
  const { posts, slug } = props;

  if (!posts?.posts)
    return (
      <div className="layout">
        <div className="main-content">
          <p>Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="layout">
      <div className="main-content">
        <span className="site-color font-size-small">TAGGED</span>
        <h1 className="capitalize">{slug.replace(/-/g, " ")}</h1>
        <br />
        <p className="text-light">A collection of {posts.posts.length} posts</p>
        <br />
        <div className="post-feed">
          {posts?.posts?.length ? (
            posts?.posts?.map((post) => {
              return (
                <PostCard post={post} key={post.id} className="post-card" />
              );
            })
          ) : (
            <span>
              <h1>No Data!</h1>
            </span>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await axios.get(
    `https://demo.ghost.io/ghost/api/v3/content/posts/?include=tags,authors,slug&key=22444f78447824223cefc48062&filter=tag:${params.slug}`
  );

  const posts = res.data;

  return {
    props: {
      posts,
      slug: params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default tag;
