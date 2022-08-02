import React from "react";
// import { Link } from "@inertiajs/inertia-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="jumbotron d-flex text-center" id="main">
                <div className="container text-uppercase text-white lh-lg">
                    <h1 className="fw-bold">Welcome To Andy Tech</h1>
                    <h2 className="fw-bold">Take an interview online</h2>
                    <a
                        href="/register/student"
                        className="btn btn-primary mx-2 mr-2"
                    >
                        Register
                    </a>
                    <a href="/login" className="btn btn-light text-ndetek mx-2">
                        Login
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
