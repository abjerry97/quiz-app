import React from "react";
import { Link } from "react-router-dom";
import { SideBarrData } from "./SideBarrData";
import "./SideBarr.css";
import { IconContext } from "react-icons";
function SideBarr(props) {
   
  return (
    <>
    <IconContext.Provider value={{color: '#ffff'}}>
        <div className="side-barr">
            <nav className={props.changeHandler ? "side-menu active" : "side-menu"}>
                <ul className="side-menu-items">
                {SideBarrData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
                </ul>
            </nav>
        </div>
    </IconContext.Provider>
      
    </>
  );
}

export default SideBarr;
