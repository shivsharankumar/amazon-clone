import React from "react";
import amazon from "./amazon.svg";

export default function Footer() {
  return (
    <footer className="sticky bottom-0">
      <center>
        <img src={amazon} alt="footer" />
      </center>
      <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou">
        Conditions of Use & Sale
      </a>
      <center>© 1996-2022, Amazon.com, Inc. or its affiliates</center>
    </footer>
  );
}
