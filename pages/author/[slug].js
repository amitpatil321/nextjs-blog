/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import PostCard from "../../components/PostCard";
import { BsGrid3X3GapFill } from "react-icons/bs";

import style from "./author.module.css";

const author = (props) => {
  const { posts } = props;
  let authorInfo = {};

  if (!posts?.posts) {
    return (
      <div className="layout">
        <div className="main-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  } else authorInfo = posts?.posts[0]?.primary_author;

  return (
    <div className="layout">
      <div className="main-content">
        <div className={style.author_header_content}>
          {authorInfo && (
            <>
              <div className={style.author_pic}>
                <img src={authorInfo.profile_image} />
              </div>
              <br />
              <h2>{authorInfo.name}</h2>
              {authorInfo.bio && <p>{authorInfo.bio}</p>}
              <p>
                <BsGrid3X3GapFill />
              </p>
            </>
          )}
        </div>
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
    `https://demo.ghost.io/ghost/api/v3/content/posts/?include=tags,authors,slug&key=22444f78447824223cefc48062&filter=author:${params.slug}`
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

export default author;
