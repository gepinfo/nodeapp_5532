import React, { useState ,useEffect} from 'react';
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        NavbarText
    } from 'reactstrap';
    import "./header.scss";
    import DropdownButton from 'react-bootstrap/DropdownButton';
    import Dropdown from 'react-bootstrap/Dropdown';
    import { Logout } from "../login/login.services";
    import { details, deleteUser, UpdateUserImg, uploadImgFile } from '../user/user.service';
    import { Web, Upload } from "../../shared/shared.service";
    import {useJwt} from "react-jwt"
    
    const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [check, setCheck] = useState<any | null>();
        const toggle = () => setIsOpen(!isOpen);
        const decodedToken: any = useJwt(sessionStorage.getItem("JwtToken") || "");

        useEffect(() => {
          setCheck(decodedToken.decodedToken?.role);
        }, [decodedToken]);
        
        const logout = () => {
          const temp = { id: sessionStorage.getItem("Id") };
          Logout(temp).then(

            (data: any) => {
              sessionStorage.clear();
              let userId = sessionStorage.getItem("Id") || null; // this.router.navigate(['']);
            },
            (error: any) => {
              console.error("error:", error);
            }
          );
          window.location.reload();
        };
        
        return (
    <nav id="iflmti" className="header1">
<div id="if5xe1" className="container">
<div data-columns="1" data-gjs="navbar" id="i7nhyf" className="row no-gutters">
<a href="./index.html" id="template-i8y75" >
<div data-column="1" id="ic0lkf" className="cell">
<img id="ii0r8m" src="https://cdn.grapedrop.com/uf21ee127219d4df2973fa57c27f86999/2c72cbf188ba475bb4a41d1fc7240876_logo.png" />
<div id="iz10bf" className="burger">
<div id="template-i733s" className="burger-line-dark">
</div>
<div id="template-i7h94" className="burger-line-dark">
</div>
<div id="template-i8o8m" className="burger-line-dark">
</div>
</div>
</div>
</a>
<div data-column="1" id="i9mgcg" className="cell">
<div data-gjs="navbar-items" id="template-i0uwm" className="menu-container">
<nav data-gjs="navs" id="i011z1" className="menu">
<div id="MainMenu" >
<div className="d-flex">
                                            {check? <NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/home" >
                                                            home</NavLink>
                                                        </NavItem>:<></>}{check ==="Admin"?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/admin" >
                                                            admin</NavLink>
                                                        </NavItem>:<></>}
{check?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/sefscreen" >
                                                            sefscreen</NavLink>
                                                        </NavItem>:<></>}



{check?<NavItem>
                                                            <NavLink id="ipek5x" className="btn btn-primary" onClick={logout}  href="/logout" >
                                                            logout</NavLink>
                                                        </NavItem>:<></>}
{check?<></>:<NavItem>
                                                            <NavLink id="ipek5x" className="btn btn-primary"  href="/login" >
                                                            login</NavLink>
                                                        </NavItem>}
                                                        </div>

                                
                            </div>
</nav>
</div>
</div>
</div>
</div>
</nav>

        );
      };
      
      export default Header;
    