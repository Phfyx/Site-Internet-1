import React from "react";
import Linkedinlogo from "../../assets/img/Logo/Linkedinlogo.png";
import DiscordLogo from "../../assets/img/Logo/DiscordLogo.png";
import LogoGitHub from "../../assets/img/Logo/LogoGitHub.png";
import Logotwitter from "../../assets/img/Logo/Logotwitter.png";
import "./Logocontact.css";

export default function Logocontact() {
  return (
    <div class="container">
      <a href="https://www.linkedin.com/in/mohamed-benomar-35636225b/" target="_blank" rel="noreferrer" title="Consulter mon profil LinkedIn">
        <img
          src={Linkedinlogo}
          alt="logo LinkedIn"
        />
      </a>
      <a href="https://discord.com/users/Phfyx#5888" target="_blank" rel="noreferrer" title="M'ajouter sur Discord">
        <img
          src={DiscordLogo}
          alt="logo Discord"
        />
      </a>
      <a href="https://github.com/Phfyx" target="_blank" rel="noreferrer" title="Consulter mon GitHub">
        <img
          src={LogoGitHub}
          alt="logo GitHub"
        />
      </a>
      <a href="https://twitter.com/mhdbeo" target="_blank" rel="noreferrer" title="Consulter mon Twitter">
        <img
          src={Logotwitter}
          alt="logo Twitter"
        />
      </a>
    </div>
  );
}
