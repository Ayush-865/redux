import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // const orderedPosts= posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

  const renderedPosts = posts.map((post) => [
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userID={post.userID} />
        <TimeAgo timeStamp={post.date} />
      </p>
      {/* <ReactionButtons post={post} /> */}
    </article>,
  ]);
  
  return (
    <>
      <h2>POSTS</h2>
      {renderedPosts}
    </>
  );
};

export default PostsList;
