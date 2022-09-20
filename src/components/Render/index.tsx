import { Button, Typography } from "@mui/material";
import { cancelApi } from "@src/service/axios";
import { postService } from "@src/service/blog";
import { useState } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const RenderComponent = () => {
  const [post, setPost] = useState<Post[]>([]);
  const getPost = async () => {
    try {
      const res = (await postService.getPost()) as unknown as Post[];
      setPost(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Button variant="contained" onClick={getPost}>
        Fetch API
      </Button>
      <Button variant="contained" onClick={cancelApi}>
        Cancel API
      </Button>
      {post?.length ? (
        post.map((item) => <div key={item.id}>{item.id}</div>)
      ) : (
        <>Loading... </>
      )}
      <Typography variant="h3" color="#ffffff">
        Render Component
      </Typography>
    </>
  );
};
export default RenderComponent;
