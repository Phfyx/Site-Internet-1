import IconMenu from "../../assets/img/iconmenublanc.png"
import React, {useState, useEffect} from 'react'
import "./Menu.css"


export default function Menu() {

    const [activerNav, setActiverNav] = useState(false)
    const handleNav = () => {
       setActiverNav(!activerNav) 
    }
    return (
        <div>
            <button className="Menu" onClick={handleNav}>
                <img
                    src={IconMenu}
                    alt="icon menu deroulant"
                />
            </button>

            {
                activerNav
                ? <div className="NavList">
                <a className="lienMenu" href="/">Home</a>
                <a className="lienMenu" href="/">About me</a>
                <a className="lienMenu" href="/">Contact</a>
                </div>
                : <div></div>
            }

            
        </div>     
    )
}