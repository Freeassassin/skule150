// import { Page404 } from "../pages/404/404";
import { PageAbout } from "../pages/About/About";
// import { PageTeam } from "../pages/Team/Team";
import { PageSocials } from "../pages/Socials/Socials";
import { PageStore } from "../pages/Store/Store";
import { PageOurStory } from "../pages/OurStory/OurStory";
import { PageEvents } from "../pages/Events/Events";
import { PageMaintenance } from "../pages/Maintenance/Maintenance";
import { PageGala } from "../pages/Gala/Gala";
// import { PageUnsubscribe } from "../pages/Unsubscribe/Unsubscribe";
// import { PageResubscribe } from "../pages/Resubscribe/Resubscribe";

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
      label: "OUR STORY",
      component: <PageOurStory />,
      path: "/ourstory",
      transparentNavbar: false,
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
      label: "THE TEAM",
      component: <PageMaintenance />,
      path: "/team",
      transparentNavbar: false,
    },
  ],
  hidden: [
    {
      label: "GALA",
      component: <PageGala />,
      path: "/gala",
      transparentNavbar: false,
    },
  ],
};
