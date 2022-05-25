/* eslint-disable @next/next/no-img-element */
// import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import Navigation from "../../components/Navigation";

import style from "./PostDetails.module.css";

const post = ({ post }) => {
  if (!post) return null;

  const {
    title,
    html,
    feature_image,
    primary_author,
    excerpt,
    reading_time,
    published_at,
  } = post?.posts[0];

  return (
    <div className="layout">
      <div className="main-content post-details">
        <h1 className={style.blogtitle}>{title}</h1>
        <p className="text-light">{excerpt}</p>
        <section className={style.article_byline_content}>
          <ul className={style.author_list}>
            <li className={style.author_list_item}>
              <Link
                href={`author/${primary_author.slug}`}
                className="cursor-pointer"
                passHref
              >
                <img
                  className={style.author_profile_image}
                  src={primary_author?.profile_image}
                  alt={title}
                />
              </Link>
            </li>
          </ul>
          <div className="article-byline-meta">
            <h4 className="author-name">
              <a href={`/author/${primary_author?.slug}`}>
                {primary_author?.name}
              </a>
            </h4>
            <div className="byline-meta-content">
              <span className="text-light font-size-small">
                {moment(published_at).format("MMMM Do YYYY")}
                &nbsp;<span>•</span>&nbsp;
                {reading_time} min read
              </span>
            </div>
          </div>
        </section>
        {feature_image && <img src={feature_image} width="100%" alt={title} />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  if (slug) {
    const res = await axios.get(
      `https://demo.ghost.io/ghost/api/v3/content/posts/slug/${slug}/?key=22444f78447824223cefc48062&include=tags,authors,slug`
    );
    const post = res.data;
    return {
      props: {
        post,
      },
    };
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default post;
