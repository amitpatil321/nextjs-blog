import React from "react";

import Link from "next/link";

import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={style.header}>
      <h1 className={style.logo}>
        <Link href="/">
          <a>My Blog</a>
        </Link>
      </h1>
      <div className={style.navigation}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
