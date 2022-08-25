import React from "react";

declare module "@mui/material/styles" {
  //Custorm Typography
  interface TypographyVariants {
    logo: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
  }
  //Custorm Theme Object Variable
  interface Theme {
    navBG?: {
      left?: string;
      right?: string;
    };
  }
  interface ThemeOptions {
    navBG?: {
      left?: string;
      right?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
  }
}

export {};
