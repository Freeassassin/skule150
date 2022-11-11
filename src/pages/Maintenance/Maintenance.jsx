import "./Maintenance.scss";
import constructionGraphic from "../../assests/images/constructionGraphic.svg";

const PageMaintenance = () => {
  return (
    <>
      <div className="maintenance-container">
        <div className="maintenance-graphic">
          <img
            className="countdown-logo"
            src={constructionGraphic}
            alt="skule150 logo"
          ></img>
        </div>
        <div className="maintenance-title">
          <h1>UNDER CONSTRUCTION...</h1>
        </div>
        <div className="maintenance-description">
          <p>
            We are currently working on this page, make sure to check <br />
            back soon for the many exciting things to come!
          </p>
        </div>
      </div>
    </>
  );
};

export { PageMaintenance };
