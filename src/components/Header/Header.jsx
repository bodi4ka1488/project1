import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton/CustomButton";
import { Head, Logo } from "./Styles";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <Head>
      <Link to="/">
        <Logo>БізБуд</Logo>
      </Link>
      <NavBar />
      <CustomButton isbool={true} title={`Зв'язатися`} />
    </Head>
  );
};
