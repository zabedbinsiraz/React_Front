import React from 'react';
import { Link } from "react-router-dom";
import { SvgIcon } from '../Design/SvgIcon';
const DashboardSidebar = () => {
    return(
        <div className="_dashboard_sidebar_area">
            <div className="_dashboard_sidebar_area_top">
                <div className="_dashboard_sidebar_area_top_logo">
                    <Link to="" className="_dashboard_sidebar_area_top_logo_image">
                        <img src="assets/images/logo-white.png" className="_navbar_logo_img" alt="logo" />
                    </Link>
                </div>
                <ul className="_dashboard_sidebar_area_top_list">
                    <li className="_dashboard_sidebar_area_top_item">
                        <Link to="" className="_dashboard_sidebar_area_top_link">
                            All properties
                        </Link>
                    </li>
                    <li className="_dashboard_sidebar_area_top_item">
                        <Link to="" className="_dashboard_sidebar_area_top_link">
                            My Agents
                        </Link>
                    </li>
                    <li className="_dashboard_sidebar_area_top_item">
                        <Link to="" className="_dashboard_sidebar_area_top_link">
                            Statistics
                        </Link>
                    </li>
                    <li className="_dashboard_sidebar_area_top_item">
                        <Link to="" className="_dashboard_sidebar_area_top_link">
                            Feedback
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="_dashboard_sidebar_area_bottom">
            <ul className="_dashboard_sidebar_area_top_list">
                    <li className="_dashboard_sidebar_area_top_item1 _dashboard_border">
                        <Link to="" className="_dashboard_sidebar_area_top_link">
                            <span className="_dashboard_sidebar_area_top_link_icon">
                                <SvgIcon iconType={'user'} />
                            </span>
                            Manager
                        </Link>
                    </li>
                    <li className="_dashboard_sidebar_area_top_item1">
                        <Link to="" className="_dashboard_sidebar_area_top_link">
                            <span className="_dashboard_sidebar_area_top_link_icon">
                                <SvgIcon iconType={'settings'} />
                            </span>
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
} 
export default DashboardSidebar;