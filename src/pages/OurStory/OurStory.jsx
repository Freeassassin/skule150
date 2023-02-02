import "./OurStory.scss";
import Slider from "@mui/material/Slider";
import constructionGraphic from "../../assests/images/constructionGraphic.svg";
import { useEffect, useState } from "react";



const PageOurStory = () => {
  const [year, setYear] = useState(2023);
  function yearChange(value) {
    setYear(value);
  }
  // get new data
  useEffect(() => {


    console.log(year);
  }, [year]);
  return (
    <>
      <div className="ourstory-container">
        <div className="ourstory-text-container">
          <div className="ourstory-title">
            <h1>OUR STORY</h1>
          </div>
          <div className="about-paragraph">
            <p>
              Join us as we journey back 150 years to the founding of the School
              of Practical Science, now known as the Faculty of Applied Science
              and Engineering at the University of Toronto. We are so excited to
              celebrate the Skule we know and love and all the amazing people
              who have helped to make it into the community it is today.
            </p>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-scrollbar">
            <Slider
              // scale={(x) => {}}
              // getAriaLabel={() => "Temperature"}
              orientation="vertical"
              track={false}
              // size="small"
              valueLabelDisplay="on"
              onChange={(event, value, active) => {
                console.log(value);
                yearChange(value);
              }}
              value={year}
              max={2023}
              min={1873}
              scale={(x) => -x + 2023 + 1873}
              step={1}
              marks={[
                { value: 1873, label: "2023" },
                { value: 1923, label: "1973" },
                { value: 1973, label: "1923" },
                { value: 2023, label: "1873" },
              ]}
            />
          </div>
          <div className="timeline-content">
            <div className="timeline-content-artifacts">
              <img
                className="maintenance-logo"
                src={constructionGraphic}
                alt="skule150 logo"
              />
              <h3>Click on photos for full screen view</h3>
            </div>
            <div className="timeline-content-description">
              <p>
                {`Year: ${-year + 2023 + 1873}`}
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum volutpat enim at tellus convallis, at sodales velit
                imperdiet. Cras ullamcorper metus ligula, sit amet maximus
                sapien euismod et. Sed lobortis suscipit libero, non feugiat
                elit pellentesque quis. Quisque at venenatis diam, vitae laoreet
                arcu. Maecenas erat eros, aliquam a viverra sed, imperdiet at
                tellus. Nunc fermentum semper dolor. Pellentesque eget aliquet
                leo, quis ultrices dolor. Curabitur a metus imperdiet, eleifend
                mauris sed, rutrum risus. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Cras quis
                orci mauris. Pellentesque a sapien nec lectus suscipit
                porttitor. Maecenas a nibh a nibh dictum tempor. Aliquam et
                imperdiet dui. Cras vestibulum elementum maximus. Maecenas
                commodo enim a tellus hendrerit, vitae finibus ligula pharetra.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Vestibulum egestas interdum ex vitae
                vulputate. Suspendisse sit amet arcu dapibus, tempus dolor et,
                sagittis est. In at ligula lacinia, faucibus arcu ac, ultricies
                ipsum. Duis finibus ullamcorper nulla. Donec id pharetra risus,
                id faucibus felis. Maecenas eros massa, commodo a velit a,
                hendrerit gravida est. Vestibulum vel gravida urna. Suspendisse
                potenti. Nulla in metus aliquet, rutrum enim gravida, tempus
                risus. Nulla scelerisque vehicula nunc varius facilisis. Etiam
                placerat, ex a rutrum feugiat, purus sapien blandit sapien,
                vitae faucibus eros augue et dolor. In hac habitasse platea
                dictumst. Donec venenatis eleifend metus, ut consequat elit
                tempor gravida. Proin efficitur nibh sed nulla placerat, in
                consectetur odio tincidunt. Proin vitae massa fermentum erat
                egestas placerat vel vel velit. Sed rhoncus mi elit, eget
                blandit diam egestas ac. Sed sit amet quam hendrerit, mollis sem
                a, mattis mauris. Quisque dapibus gravida purus sed sodales.
                Vivamus sit amet dignissim sem, quis ullamcorper dolor. In hac
                habitasse platea dictumst. Maecenas dignissim turpis vel posuere
                ullamcorper. In nulla leo, facilisis in semper nec, accumsan id
                nisl. Praesent in nulla sed arcu faucibus finibus eu in tortor.
                Vivamus semper ipsum non accumsan laoreet. Pellentesque sed
                viverra est, vitae pretium sem. Nunc non tempor eros. Donec
                sodales molestie leo, id tincidunt sem blandit vulputate. Ut vel
                sem malesuada, viverra diam in, dignissim enim. Donec aliquam ac
                nunc ac dictum. Phasellus accumsan justo laoreet dolor
                ultricies, sed cursus sem mattis. Vestibulum congue risus
                convallis orci porttitor varius. Ut vel scelerisque magna. Sed
                ullamcorper pharetra sem ut facilisis. Aliquam vehicula, lacus
                vitae pretium accumsan, tortor urna mattis sem, sed cursus erat
                elit ac libero. Mauris feugiat dolor ut mi euismod pretium.
                Vestibulum eu cursus sem, a aliquet mauris. Nunc turpis odio,
                suscipit ac diam ut, ornare varius tortor. Quisque hendrerit
                elit nibh, eu pretium felis interdum vel. Sed ac diam suscipit,
                iaculis elit eget, ultrices sem. Aenean iaculis efficitur
                blandit. Nunc massa diam, tempus nec ornare ut, feugiat ac nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PageOurStory };
