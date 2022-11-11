import "./About.scss";
import SKULE150Logo from "../../assests/images/Skule150Logo.svg";
import { Countdown } from "../../components/Countdown/Countdown";

const PageAbout = () => {
  return (
    <>
      <div className="countdown-container">
        <img
          className="countdown-logo"
          src={SKULE150Logo}
          alt="skule150 logo"
        ></img>
        <div className="countdown-title">
          <h3>COUNTDOWN TO SKULE™ 150</h3>
        </div>

        <Countdown />
      </div>
      <div className="about-container">
        <div className="about-title">
          <h1>WHAT IS SKULE™ 150?</h1>
        </div>
        <div className="about-paragraph">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a urna
            elementum lacus venenatis porta sed sed augue. Mauris augue urna,
            tincidunt aliquam risus in, consectetur volutpat magna. Etiam eu
            fringilla velit, eget pulvinar arcu. Donec tristique eget augue at
            scelerisque. Mauris posuere consequat purus in sodales. Pellentesque
            maximus turpis ac fermentum efficitur. Morbi aliquet sapien at est
            porttitor sodales. Curabitur eget pretium velit. Proin gravida leo
            ut suscipit lacinia. Curabitur purus augue, maximus eu eros vel,
            lacinia pharetra risus. Integer porttitor justo elit, vel efficitur
            lorem hendrerit et.
            <br></br>
            Donec nec enim eros. Sed gravida arcu felis, at eleifend nibh
            vestibulum sit amet. Sed eleifend justo quis nisl tempus, at
            pellentesque magna sagittis. Maecenas non felis vel enim imperdiet
            aliquet. Phasellus accumsan pharetra orci id lobortis. Phasellus
            lacinia dapibus posuere. Mauris a scelerisque turpis. Sed non neque
            vel quam pharetra consectetur. Aliquam ultrices, urna sit amet
            volutpat pulvinar, sapien sem ornare felis, congue sollicitudin sem
            libero sed velit. Sed mollis venenatis neque, vitae interdum leo
            gravida quis. Morbi tempor laoreet neque, vel dictum diam convallis
            at. Maecenas tincidunt magna vel lacus commodo, ornare consequat
            orci gravida. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum ullamcorper,
            lorem vitae semper aliquam, leo sem volutpat nibh, sed hendrerit
            massa enim ut tellus. Aliquam ut elit non turpis fringilla viverra
            eget vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam faucibus nisi eu enim porta iaculis. Curabitur vitae
            lectus ut lorem sollicitudin aliquam. Fusce in tempus tellus.
            Suspendisse rutrum id eros eget sagittis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nullam dignissim, sem at suscipit congue, purus odio commodo nisi,
            sed vestibulum enim nisl vitae massa. Phasellus vulputate egestas
            ipsum. Praesent cursus tempus nisi, ut accumsan leo egestas eget.
            Pellentesque posuere congue tortor sed laoreet. Cras nec condimentum
            tellus, et euismod lacus. Nullam congue in quam pellentesque
            ullamcorper.
          </p>
        </div>
      </div>
    </>
  );
};

export { PageAbout };
