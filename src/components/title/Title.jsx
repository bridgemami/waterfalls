import s from "./title.module.css";
import { PropTypes } from "prop-types";

export default function Title({ title, subtitle }) {
  return (
    <div className={s.text}>
      <a href="/" className={s.color}>
        <h1>{title}</h1>
      </a>
      <h3 className="subheading">{subtitle}</h3>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
