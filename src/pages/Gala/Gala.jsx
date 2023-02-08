import { useEffect } from "react";
import "./gala.scss";

import galaMark from "../../assests/images/GalaMark.svg";

const PageGala = () => {
  useEffect(() => {
    // window.location.replace("https://linktr.ee/skule150");
  }, []);
  return (
    <>
      <div className="gala-container">
        <div className="ourstory-text-container">
          <div className="gala-title">
            <img className="gala-logo" src={galaMark} alt="skule150 logo"></img>
          </div>
          <div className="about-paragraph">
            <p>
              {" "}
              On March 29th 1873 the School of Practical Science was
              established. Since then, 150 years of history, achievements,
              mischief, and community has brought us to this moment, a moment
              that calls for a grand celebration. Welcome to Skule 150! We are a
              student run group spearheading a series of events and initiatives
              in celebration of the University of Toronto's Faculty of Applied
              Science and Engineering's 150th anniversary.
              <br />
              <br />
              There are many ways to get involved in the festivities. Follow us
              on instagram,{" "}
              <a
                rel="noreferrer"
                target={"_blank"}
                href="https://instagram.com/skule150"
              >
                @skule150
              </a>
              , to learn more about Skule's history through our 150 days to the
              150th campaign, where we post fun facts, photos, and artifacts
              about each year counting down to March 29th. Repping limited
              edition merch more your speed? Look out for our upcoming drops and
              store takeovers. Look out for historic ceremonies like the
              building and burying of our time capsule and don't miss our
              commemorative 150th anniversary Skulebook coming later this year!
              <br />
              <br />
              We will also be running multiple events throughout the semester,
              including a special archives event happening this Godiva's Week.
              Leading up to the anniversary, we will be hosting a panel
              discussion looking to honour the legacies and look towards the
              future of women in engineering here at UofT. On March 29th 2023,
              join us for a day of on-campus activities, surprises and
              shenanigans. Our celebrations continue at our Skule 150 Gala.
              Happening April 1st 2023, this landmark event brings together
              nearly 1000 faculty, alumni, and students in a party unlike
              anything Skule has ever seen before.
              <br />
              <br />
              This once in a lifetime occasion is one you won't want to miss.
              Stay tuned for more updates and be sure to follow us on instagram
              <a
                rel="noreferrer"
                target={"_blank"}
                href="https://instagram.com/skule150"
              >
                @skule150
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { PageGala };
