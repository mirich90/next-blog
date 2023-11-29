import Head from "next/head";

import {
  Section,
  Title,
  Cover,
  BuyMeCoffee,
  SocialNetworks,
  PostGrid,
  Post,
  Button,
} from "../components";

import React, { useState } from "react";

import { loadPosts } from "./api/posts";

const LOAD_MORE_STEP = 2;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const newAmount = loadedAmount + LOAD_MORE_STEP;
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${newAmount}`
      ).then((res) => res.json());

      setLoadedAmount(newAmount);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Section>
        <Cover title="Indy<br />Ground" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>Last posts</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>

        {isLoadButton && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={getMorePosts} disabled={loading}>
              Load more posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
