import { useEffect } from "react";

const PageStore = () => {
  useEffect(() => {
    window.location.replace("https://stores.skule.ca/");
  }, []);
  return <></>;
};

export { PageStore };
