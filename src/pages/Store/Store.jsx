import { useEffect } from "react";

const PageStore = () => {
  useEffect(() => {
    window.location.replace("https://stores.skule.ca/catalogue/skule150");
  }, []);
  return <></>;
};

export { PageStore };
