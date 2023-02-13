import { useEffect } from "react";
import "./gala.scss";


const PageGala = () => {
  useEffect(() => {
    window.location.replace("https://uofteng.ca/150gala");
  }, []);
  return <></>;
};

export { PageGala };
