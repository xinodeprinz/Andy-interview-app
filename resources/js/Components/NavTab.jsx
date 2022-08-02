import React from "react";
// import { Link } from "@inertiajs/inertia-react";

const NavTab = ({ data }) => {
    return (
        <ul className="nav nav-tabs card-header-tabs nav-justified">
            {data.map((e, key) => {
                const active =
                    e.path === window.location.pathname ? "active" : "";
                return (
                    <li className="nav-item" key={key}>
                        <a
                            className={`nav-link ${active} text-capitalize`}
                            aria-current={active ? "true" : ""}
                            href={e.path}
                        >
                            <span className="badge rounded-pill bg-primary">
                                {key + 1}
                            </span>
                            {` ${e.name}`}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavTab;
