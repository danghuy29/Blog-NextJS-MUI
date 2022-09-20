import { Box } from "@mui/material";
import { ILayout } from "@src/types";
import { Fragment } from "react";
import PageTransition from "./PageTransition";
export const BaseLayout: React.FC<ILayout> = ({ children }) => {
  // const CustormApp = styled(AppBar)(({ theme }) => {
  //   return {
  //     background: `linear-gradient(to right, ${theme.navBG.left}, ${theme.navBG.right})`,
  //   };
  // });
  return (
    <Fragment>
      <Box
        sx={{
          padding: "81px 0 22px 0",
          maxWidth: 375,
          margin: "0 auto",
          minHeight: "100vh",
          boxShadow: "0 10px 10px 5px rgb(0 0 0 / 10%)",
        }}
      >
        <PageTransition>{children}</PageTransition>
      </Box>
    </Fragment>
  );
};
