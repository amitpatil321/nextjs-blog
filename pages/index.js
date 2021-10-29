import axios from "axios";
import Link from "next/link";

import FeaturedPost from "../components/FeaturedPost";
import PostCard from "../components/PostCard";

const Homepage = ({ posts }) => {
  if (!posts?.posts) return <p>Loading...</p>;

  let first = posts?.posts?.slice(0, 1)[0];
  let rest = posts?.posts?.slice(1, posts.length);

  return (
    <div className="layout">
      <div className="main-content">
        <FeaturedPost post={first} />
        <div className="post-feed">
          {rest.length ? (
            rest.map((post) => {
              return (
                <PostCard post={post} key={post.id} className="post-card" />
              );
            })
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(
    `https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062&include=tags,authors,slug`
  );
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
};

export default Homepage;
