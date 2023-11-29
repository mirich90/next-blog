import React from "react";
import Head from "next/head";

import cl from "classnames";
import { format } from "date-fns";

import { client } from "../../lib/client";

import { Article, Content, Title } from "../../components";

import styles from "./styles.module.scss";

const Post = ({ post }) => {
  console.log(post);
  const data = format(new Date(post.publishedDate), "dd MMM yyyy");

  return (
    <Article backUrl="/" className={styles.post}>
      <Head>
        <title>{post.meta_title}</title>
      </Head>
      <Title className={styles.postTitle}>{post.title}</Title>
      <p className={styles.postDate}>{data}</p>
      <Content body={post.body} />
    </Article>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return { props: { post } };
}
