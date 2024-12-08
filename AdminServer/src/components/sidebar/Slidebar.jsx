import React from 'react'
import "./sidebar.scss";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  PlayCircleOutline,
  Report,
  List
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
const Slidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className='link'>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className='link'>
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className='link'>
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">


        <h3 className="sidebarTitle">Add New</h3>
          <ul className="sidebarList">
            <Link to="/newUser" className='link'>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add Users
              </li>
            </Link>
            <Link to="/newproduct" className='link'>
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                New Movies
              </li>
            </Link>
            <Link to="/newList" className='link'>
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                New List
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Slidebar
