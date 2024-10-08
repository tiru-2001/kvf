import React, { useState } from "react";
import "./AdminDashBoard.scss";
import logo from "../../assets/logo.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Compliance from '../../pages/reviewer/forms/Compliance'; 

const AdminDashBoard = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showCompliance, setShowCompliance] = useState(false);

  const toggleMenu = (menu) => {
    if (menu === "pendingForms") {
      setShowCompliance(true); 
      setOpenMenu(null); 
    } else if (menu === "status") {
      setShowCompliance(false); 
      setOpenMenu(openMenu === menu ? null : menu); 
    } else {
      setShowCompliance(false);
      setOpenMenu(null);
    }
  };

  return (
    <>
      <section className="admin-container">
        <section className="admin-left">
          <ul className="admin-menu-container">
            <li>
              <section
                className="admin-menu-item"
                onClick={() => toggleMenu("pendingForms")} 
              >
                Pending Forms
              </section>
            </li>
            <li>
              <section
                className="admin-menu-item"
                onClick={() => toggleMenu("status")} 
              >
                Status
                {openMenu === "status" ? <FaChevronUp /> : <FaChevronDown />}
              </section>
              {openMenu === "status" && (
                <ul className="admin-submenu">
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
        </section>
        <section className="admin-right">
          {showCompliance ? (
            <Compliance /> 
          ) : (
            <img src={logo} alt="Admin Dashboard" />
          )}
        </section>
      </section>
    </>
  );
};

export default AdminDashBoard;
