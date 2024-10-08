import React, { useState } from "react";
import "./ReviewDashBoard.scss";
import logo from "../../../assets/logo.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Calendar from "../calender/Calender"; 
import Compliance from '../../reviewer/forms/Compliance'; 

const ReviewDashBoard = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [subMenu, setSubMenu] = useState({ reviewer: false, admin: false });
  const [showCalendar, setShowCalendar] = useState(false); 
  const [showCompliance, setShowCompliance] = useState(false); 

  const toggleMenu = (menu) => {
    if (menu === "calendar") {
      setShowCalendar(true); 
      setShowCompliance(false); 
      setOpenMenu(null); 
      setSubMenu({ reviewer: false, admin: false }); 
    } else if (menu === "pendingForms") {
      setShowCompliance(true);
      setShowCalendar(false); 
      setOpenMenu(null);
      setSubMenu({ reviewer: false, admin: false }); 
    } else {
      setShowCalendar(false); 
      setShowCompliance(false); 
      setOpenMenu(openMenu === menu ? null : menu);
    }
  };

  const toggleSubMenu = (menu) => {
    setSubMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <section className="review-container">
        <section className="review-left">
          <ul className="review-menu-container">
            <li>
              <section
                className="review-menu-item"
                onClick={() => toggleMenu("calendar")} 
              >
                Calendar
              </section>
            </li>
            <li>
              <section
                className="review-menu-item"
                onClick={() => toggleMenu("pendingForms")}
              >
                Pending Forms
              </section>
            </li>
            <li>
              <section
                className="review-menu-item"
                onClick={() => toggleMenu("status")}
              >
                Status
                {openMenu === "status" ? <FaChevronUp /> : <FaChevronDown />}
              </section>
              {openMenu === "status" && (
                <ul className="review-submenu">
                  <li>
                    <section
                      className="review-submenu-item"
                      onClick={() => toggleSubMenu("reviewer")}
                    >
                      Reviewer
                      {subMenu.reviewer ? <FaChevronUp /> : <FaChevronDown />}
                    </section>
                    {subMenu.reviewer && (
                      <ul className="status-content">
                        <li>
                          <section className="status-content-item">
                            Completed <span>45</span>
                          </section>
                        </li>
                        <li>
                          <section className="status-content-item">
                            Rejected <span>105</span>
                          </section>
                        </li>
                        <li>
                          <section className="status-content-item">
                            Pending for review <span>76</span>
                          </section>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <section
                      className="review-submenu-item"
                      onClick={() => toggleSubMenu("admin")}
                    >
                      Admin
                      {subMenu.admin ? <FaChevronUp /> : <FaChevronDown />}
                    </section>
                    {subMenu.admin && (
                      <ul className="status-content">
                        <li>
                          <section className="status-content-item">
                            Approved <span>240</span>
                          </section>
                        </li>
                        <li>
                          <section className="status-content-item">
                            Rejected <span>553</span>
                          </section>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </section>
        <section className="review-right">
          {showCalendar ? (
            <Calendar />
          ) : showCompliance ? (
            <Compliance /> 
          ) : (
            <img src={logo} alt="" />
          )}
        </section>
      </section>
    </>
  );
};

export default ReviewDashBoard;
