import useLayoutEffect from "@src/utils/hooks/useLayoutEffect";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
interface Propstype {
  children: ReactElement;
}
const PageTransition: React.FC<Propstype> = ({ children }) => {
  const [animateBack, setAnimateBack] = useState("");
  const router = useRouter();
  const { pathname } = router;
  useLayoutEffect(() => {
    const isHomePage = pathname === "/";
    setAnimateBack(isHomePage ? "slide_left_to_right" : "slide_right_to_left");
  }, [pathname]);
  //   useEffect(() => {
  //     const isHomePage = pathname === "/";
  //     setAnimateBack(isHomePage ? "slide_left_to_right" : "slide_right_to_left");
  //   }, [pathname]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateBack("");
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);
  return (
    <>
      <div className={animateBack}>{children}</div>
    </>
  );
};
export default PageTransition;
