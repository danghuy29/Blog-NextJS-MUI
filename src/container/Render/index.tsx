import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Fragment, ReactNode, useState } from "react";
interface Proptypes {
  children?: ReactNode;
}
const RenderContainer: React.FC<Proptypes> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <Box
        py={12}
        px={24}
        width="100vw"
        height="80vh"
        mx="auto"
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

        <Box width="50%" height="50%" mx="auto" my="auto">
          <Typography fontSize={200} color="#ffffff" textAlign="center">
            {count}
          </Typography>
        </Box>
        {children}
      </Box>
    </Fragment>
  );
};
export default RenderContainer;
