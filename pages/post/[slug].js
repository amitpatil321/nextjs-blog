// import React from "react";
import axios from "axios";
import Navigation from "../../components/Navigation";

function post({ post }) {
  if (!post) return null;

  const { title, html, feature_image, published_at } = post?.posts[0];
  return (
    <div className="layout">
      <Navigation />
      <div className="main-content">
        <div span={24}>
          <h2 level={2}>{title}</h2>
        </div>
        <div span={24}>
          <img src={feature_image} alt={title} />
        </div>
        <div span={24}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  if (slug) {
    const res = await axios.get(
      `https://demo.ghost.io/ghost/api/v3/content/posts/slug/${slug}/?key=22444f78447824223cefc48062`
    );
    const post = res.data;
    return {
      props: {
        post,
      },
    };
  }
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { slug: "welcome" },
        params: { slug: "design" },
      },
    ],
    fallback: true,
  };
};

export default post;
