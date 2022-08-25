import { BaseLayout } from "@src/components/layouts";
import RenderComponent from "@src/components/Render";
import RenderContainer from "@src/container/Render";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
const Render: NextPageWithLayout = () => {
  return (
    <RenderContainer>
      <RenderComponent />
    </RenderContainer>
  );
};
Render.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Render;
