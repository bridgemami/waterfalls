import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { PropTypes } from "prop-types";
import s from "./banner.module.css";

export default function Banner({ introduction }) {
  const [waterfalls, setWaterfalls] = useState([
    {
      src: "/Croatia/Krka1.JPG",
      label: "Krka Falls in Croatia",
    },
    {
      src: "/Iceland/Gullfoss2.JPG",
      label: "Gullfoss in Iceland",
    },
    {
      src: "/California/Both_Yosemite.JPG",
      label: "Yosemite Falls in California",
    },
  ]);
  return (
    <main>
      <div>
        <Carousel fade>
          {waterfalls.map((waterfall, index) => {
            return (
              <Carousel.Item interval={5000} key={index} className={s.item}>
                <img
                  className={s.picture}
                  src={waterfall.src}
                  alt={waterfall.label}
                />
                <Carousel.Caption>
                  <h3>{waterfall.label}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <article>
        <p className={s.intro}>{introduction}</p>
      </article>
    </main>
  );
}
Banner.propTypes = {
  introduction: PropTypes.string,
};
