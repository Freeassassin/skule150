import "./Events.scss";
import Slider from "@mui/material/Slider";

const PageEvents = () => {
  const value = 119;

  const eventsInfo = [
    {
      name: "SKULE 150 STORE LAUNCH",
      date: "Monday, January 9TH 2023",
      description:
        "To celebrate Skule 150 we will are super excited to be partnering with Engineering Stores to release a bunch of awesome new merch! We will be releasing new merch items throughout the semester which can be purchased either through EngStores or at Skule 150 Store pop-ups.",
      location: "The Pit",
    },
    {
      name: "SKULE™ 150 RARE BOOK LIBRARY TAKEOVER",
      date: "THURSDAY, January 12TH 2023 | 3:00PM - 4:00PM",
      description:
        "Ever wanted the opportunity to visit the extremely exclusive UofT rare book library? Well this is your chance! Come join us as we partner with UTARMS to showcase an awesome exhibition about the history of SkuleTM through a variety of different artifacts from our school's history (the library is usually off limits to undergraduate students). To Find out more about the library check out the following link!",
      location:
        "Robarts Thomas Fisher Rare Book Library, 120 St. George Street, 2nd Floor",
    },
    {
      name: "WOMEN OF SKULE™",
      date: "DATE TO BE ANNOUNCED SOON!",
      description: "",
      location: "",
    },
    {
      name: "FOUNDING DAY",
      date: "WEDNESDAY, MARCH 29TH 2023 | 12:00PM - 6:00PM ",
      description:
        "Join us as we celebrate the day to mark 150 year of engineering at the University of Toronto. More information about the day schedule will be coming soon but we are super excited for what this awesome event has in store! More to come later...",
      location: "",
    },
    {
      name: "SKULE™ 150 TIME CAPSULE SEALING CEREMONY",
      date: "FRIDAY, MARCH 31ST 2023 | TIME TBA ",
      description:
        "In honour of Skule 150, we will be burying a time capsule to be opened in 20??. The time capsule will be filled with numerous tokens such as a leather jacket, a pair of covvies, and so much more, to represent the Skule we know and love today, for the Skule of the future!",
      location: "",
    },
    {
      name: "SKULE™ 150 MYSTERY EVENT",
      date: "SATURDAY, APRIL 1ST 2023 | TIME TBA ",
      description: "More info coming soon!",
      location: "",
    },
  ];

  return (
    <>
      <div className="events-page">
        <div className="events-title">
          <h1>EVENTS</h1>
        </div>
        <div className="events-container">
          <div className="events-timeline">
            <Slider
              orientation="vertical"
              track={false}
              valueLabelDisplay={"off"}
              value={value}
              max={150}
              min={1}
              step={1}
              marks={[
                { value: 149 },
                { value: 118 },
                { value: 83 },
                { value: 67 },
                { value: 43 },
                { value: 21 },
              ]}
            />
          </div>
          <div className="events-details">
            {eventsInfo.map((event) => {
              return (
                <div className="event-info">
                  <h2>{event.name}</h2>
                  <h3>{event.date}</h3>
                  <p>{event.description}</p>
                  {event.location ? (
                    <>
                      <h4>LOCATION:</h4>
                      <p>{event.location}</p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { PageEvents };
