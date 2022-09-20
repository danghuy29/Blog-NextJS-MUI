import { useRouter } from "next/router";

const RenderItem = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.id);
  return <>{console.log("rerenda")}Render Item</>;
};
export default RenderItem;
