import React from "react";
import { Button } from "./Styles";
import { Link } from "react-scroll";

export const CustomButton = (props) => {
  return props.isbool ? (
    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
      <Button>{props.title}</Button>
    </Link>
  ) : (
    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
      <Button>{props.title}</Button>
    </Link>
  );
};
