import { AppBar, Box, Typography } from "@mui/material";
import { ILayout } from "@src/types";
import { Fragment } from "react";
import { styled } from "@mui/material";
export const BaseLayout: React.FC<ILayout> = ({ children }) => {
  const CustormApp = styled(AppBar)(({ theme }) => {
    return {
      background: `linear-gradient(to right, ${theme.navBG.left}, ${theme.navBG.right})`,
    };
  });
  return (
    <Fragment>
      <CustormApp>
        <Box sx={{ padding: "20px 10px 22px 15px" }} component="nav">
          <Typography
            variant="logo"
            component="h1"
            maxWidth={68}
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            Gello
          </Typography>
        </Box>
      </CustormApp>
      <Box sx={{ padding: "81px 0 22px 0" }}>{children}</Box>
    </Fragment>
  );
};
