import React, { useState } from "react";
// import { ArrowCircleUpIcon } from "react-icons/fa";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
// import { Button } from "./Styles";
// import { Button } from "./styles";
import Button from "@mui/material/Button";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button style={{ height: 50, width: 70 }}>
      <ArrowCircleUpIcon
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", height: 50, width: 70 }}
      />
    </Button>
  );
};

export default ScrollButton;
