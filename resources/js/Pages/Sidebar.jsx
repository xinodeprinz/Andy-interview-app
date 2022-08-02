import React from "react";

const Sidebar = () => {
    const data = [
        { href: "/dashboard", text: "Profile" },
        { href: "/dashboard/interview-quiz", text: "Interview Quiz" },
        { href: "/payment", text: "Pay Fees" },
        { href: "/logout", text: "Logout" },
    ];
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                {data.map((item, key) => {
                    const active =
                        window.location.pathname === item.href ? "active" : "";
                    return (
                        <li className="nav-item" key={key}>
                            <a
                                className={`nav-link ${active}`}
                                href={item.href}
                            >
                                <span className="menu-title fs-5 mt-3">
                                    {item.text}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Sidebar;
