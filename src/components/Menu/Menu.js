import IconMenu from "../../assets/img/iconmenublanc.png";
import React, { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [activerNav, setActiverNav] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const handleButtonActive = () => {
    setButtonActive(!buttonActive);
  };

  return (
    <div className="alignRight">
      <button
        id="buttonMenu"
        className={`buttonMenu ${buttonActive ? "menu-animation" : "Menu"}`}
        onClick={() => {
          setActiverNav(!activerNav)
          handleButtonActive()
        }
        }
      >
        <img height="60px" src={IconMenu} alt="icon menu deroulant" />
      </button>
      {
        activerNav
          ? <div className="NavList" onMouseLeave={() => { setActiverNav(false) }}>
            <a className="lienMenu" href="/">
              Home
            </a>
            <a className="lienMenu" href="/aboutme">
              About me
            </a>
            <a className="lienMenu" href="/contact">
              Contact
            </a>
          </div>
          : <div></div>
      }
    </div>
  );
}
