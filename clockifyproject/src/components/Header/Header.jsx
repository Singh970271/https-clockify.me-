import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,

  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
import {   FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";
import { BsCalendar2Day ,BsFillPersonFill,BsFillTagFill } from "react-icons/bs";
import { GoDashboard } from "react-icons/go";
import { MdReport } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import {IoIosPeople } from "react-icons/io";
import {AiOutlineProject } from "react-icons/ai";
// import {  } from "react-icons/io";
// import {  } from "react-icons/bs";
// import { } from "react-icons/bs";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          {/* <div className="logotext">
             
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div> */}
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<IoIosTimer />}><Link to="/">TIME TRACKER</Link></MenuItem>
            <MenuItem active={true} icon={<BsCalendar2Day />}> <Link to="/calender">CALENDER </Link></MenuItem>
             
            <h3>Anaylze</h3>

              <MenuItem icon={<GoDashboard />}> <Link to="/dashboard">DASHBOARD</Link></MenuItem>
             
         
              <MenuItem icon={<MdReport />}><Link to="/reports">REPORT</Link></MenuItem>
           
              <h3>Manages</h3>

              
              <MenuItem icon={< AiOutlineProject/>}>  <Link to="/project">Project</Link></MenuItem>
              <MenuItem icon={<IoIosPeople />}>  <Link to="/team">TEAM</Link></MenuItem>
              <MenuItem icon={<BsFillPersonFill />}>  <Link to="/client">CLIENT</Link></MenuItem>
              <MenuItem icon={<BsFillTagFill />}>  <Link to="/tags">TAGS</Link></MenuItem>
              <MenuItem icon={<AiOutlineSetting />}>  <Link to="/setting">Settings</Link></MenuItem>
              
            </Menu>
          </SidebarContent>
         
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;