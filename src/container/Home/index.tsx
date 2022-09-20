import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";
const HomeContainer = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/render");
  };
  return (
    <Fragment>
      <Box bgcolor="#ccc" minHeight="calc(100vh - 81px)">
        <Button variant="contained" onClick={handleClick}>
          Click me
        </Button>
      </Box>
    </Fragment>
  );
};
export default HomeContainer;
