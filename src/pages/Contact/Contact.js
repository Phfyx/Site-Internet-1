import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Logocontact from "../../components/Logocontact/Logocontact";
import "./Contact.css"

export default function Contact() {
  return (
    <div>
      <Topbar />
      <div className="Contact">
        <h1>Mes contacts</h1>
        <Logocontact />
      </div>
    </div>
  );
}
