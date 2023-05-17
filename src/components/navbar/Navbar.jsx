import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import s from "./navbar.module.css";

export default function NavBar() {
  const [locations, setLocations] = useState([
    { location: "California", link: "#" },
    { location: "Croatia", link: "#" },
    { location: "Iceland", link: "#" },
    { location: "South America", link: "#" },
    { location: "New Zealand", link: "#" },
    { location: "Norway", link: "#" },
    { location: "Puerto Rico", link: "#" },
  ]);
  return (
    <nav>
      <Navbar>
        {locations.map((location, i) => {
          return (
            <Container key={i}>
              <Navbar.Brand href={location.link} className={s.links}>
                {location.location}
              </Navbar.Brand>
            </Container>
          );
        })}
      </Navbar>
    </nav>
  );
}
