import Thoughts from "app/(home)/Thoughts";
import Tech from "app/(home)/Tech";
import Blog from "app/(home)/Blog";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const thoughtsPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const blogPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        thoughtsPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Blog") {
        blogPosts.push(post);
      } else if (post?.category === "Other") {
        otherPosts.push(post);
      }
    });

    return [thoughtsPosts, techPosts, blogPosts, otherPosts];
  };

  const [thoughtsPosts, techPosts, blogPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <Thoughts thoughtsPosts={thoughtsPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Blog blogPosts={blogPosts} />
          <Other otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
