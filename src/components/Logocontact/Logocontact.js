import React from "react";
import Linkedinlogo from "../../assets/img/Logo/Linkedinlogo.png";
import DiscordLogo from "../../assets/img/Logo/DiscordLogo.png";
import LogoGitHub from "../../assets/img/Logo/LogoGitHub.png";
import Logotwitter from "../../assets/img/Logo/Logotwitter.png";
import "./Logocontact.css";

export default function Logocontact() {
  return (
    <div class="container">
      <img
        src={Linkedinlogo}
        alt="logo LinkedIn"
        //onClick={() => (window.location.href = "")} page linkedIn
      />
      <img
        src={DiscordLogo}
        alt="logo Discord"
        //onClick={() => (window.location.href = "")} page Discord
      />
      <img
        src={LogoGitHub}
        alt="logo GitHub"
        onClick={() => (window.location.href = "https://github.com/Phfyx")}
      />
      <img
        src={Logotwitter}
        alt="logo Twitter"
        onClick={() => (window.location.href = "https://twitter.com/mhdbeo")}
      />
    </div>
  );
}
