import React from "react";
import { Link } from "@inertiajs/inertia-react";
import data from "../Data/navbar";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <Link className="navbar-brand fs-4 fw-bold" href="/">
                        {/* <img
                            src="/storage/images/ndetek-logo.png"
                            width="150"
                            alt="NdeTek"
                            className="img-fluid"
                        /> */}
                        <span className="text-primary fs-4 fw-bold">
                            Interview
                        </span>{" "}
                        App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
                            {data.map((link, key) => {
                                const active =
                                    link.href === window.location.pathname
                                        ? "active"
                                        : null;
                                return (
                                    <li className="nav-item" key={key}>
                                        <a
                                            className={`nav-link ${active}`}
                                            aria-current={active ? "page" : ""}
                                            href={link.href}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                );
                            })}

                            <span className="d-flex" id="navBtns">
                                <li className="nav-item">
                                    <a
                                        className="btn btn-primary"
                                        href="/login"
                                    >
                                        Login
                                    </a>
                                </li>
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
