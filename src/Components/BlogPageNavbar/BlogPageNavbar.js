import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './BlogPageNavbar.css';

const BlogPageNavbar=()=>{

    const [showSearchBox,setShowSearchBox]=useState(false);
    const setShowSearchBoxHandler=()=>{
        setShowSearchBox(!(showSearchBox));
    }

    return(
    <nav className="navbar navbar-expand-sm ">
        <div className="container-md">
            <NavLink to="#" className="a navbar-brand " style={{fontSize:'36px'}}>SRM BLOG TOUR</NavLink>
            <ul className="navbar-nav mr-0">
                <li className="nav-item btn"> <NavLink to="#" className="a" onClick={setShowSearchBoxHandler}><i className=" fa fa-search"></i></NavLink> </li>
                {   (showSearchBox)?
                    <li><input type="text" className="form-control " placeholder="Search" aria-label="Search"/></li>
                    : null
                }
                <li className="nav-item btn "> <NavLink to="#" className="a"><i className=" fa fa-bookmark-o" ></i></NavLink> </li>
                <li className="nav-item btn "> <NavLink to="#" className="a"><i className=" fa fa-user-circle-o" ></i></NavLink> </li>
            </ul>
        </div>
    </nav>
    );
}
export default BlogPageNavbar;
