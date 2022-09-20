import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useState } from "react";
interface Proptypes {
  children?: ReactNode;
}
const RenderContainer: React.FC<Proptypes> = ({ children }) => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <Fragment>
      <Box
        width="100%"
        minHeight="calc(100vh - 81px)"
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          background: "linear-gradient(to right , #C04848, #480048)",
        }}
      >
        <ButtonGroup>
          <Button
            variant="contained"
            fullWidth={true}
            color="primary"
            onClick={() => {
              setCount((prev) => ++prev);
            }}
          >
            Increase
          </Button>
          <Button
            variant="contained"
            fullWidth={true}
            color="success"
            onClick={() => {
              setCount((prev) => --prev);
            }}
          >
            Decrease
          </Button>
        </ButtonGroup>
        <Button
          variant="contained"
          fullWidth={true}
          color="warning"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
        <Box width="200px" height="200px">
          <Typography fontSize={50} color="#ffffff" textAlign="center">
            {count}
          </Typography>
        </Box>
        {children}
      </Box>
    </Fragment>
  );
};
export default RenderContainer;
