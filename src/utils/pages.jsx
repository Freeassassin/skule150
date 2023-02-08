import { PageAbout } from "../pages/About/About";
import { PageSocials } from "../pages/Socials/Socials";
import { PageStore } from "../pages/Store/Store";
import { PageOurStory } from "../pages/OurStory/OurStory";
import { PageEvents } from "../pages/Events/Events";
import { PageMaintenance } from "../pages/Maintenance/Maintenance";
import { PageGala } from "../pages/Gala/Gala";

export const pages = {
  404: {
    label: "404",
    component: <PageMaintenance />,
  },
  main: [
    {
      label: "ABOUT",
      component: <PageAbout />,
      path: "/",
      transparentNavbar: true,
    },
    {
      label: "EVENTS",
      component: <PageEvents />,
      path: "/events",
      transparentNavbar: false,
    },
    {
      label: "STORE",
      component: <PageStore />,
      path: "/store",
      transparentNavbar: false,
    },
    {
      label: "SOCIALS",
      component: <PageSocials />,
      path: "/social",
      transparentNavbar: false,
    },
    {
      label: "GALA",
      component: <PageMaintenance />,
      path: "/gala",
      transparentNavbar: false,
    },
  ],
  hidden: [
    {
      label: "OUR STORY",
      component: <PageOurStory />,
      path: "/ourstory",
      transparentNavbar: false,
    },
    {
      label: "THE TEAM",
      component: <PageMaintenance />,
      path: "/team",
      transparentNavbar: false,
    },
  ],
};
