import { Typography } from "@mui/material";

const RenderComponent = () => {
  console.log("re-render");
  return (
    <>
      <Typography variant="h1" color="#ffffff">
        Render Component
      </Typography>
    </>
  );
};
export default RenderComponent;
