import React from "react";

const Head = ({ user, admin }) => {
    const date = new Date(admin.date);
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="bg-black text-white fw-bold py-2">
                        <div className="container">
                            <marquee behavior="" direction="">
                                {!user.has_paid_fees
                                    ? ` You've not paid the interview fee. Pay now to be
                                able to take your interview on the day of the
                                interview. `
                                    : `You've successfully paid your interview fees. `}
                                The interview will take place on{" "}
                                {date.toLocaleString()}
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar default-layout col-lg-12 col-12 p-0 d-flex align-items-top flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    <div className="me-3">
                        <button
                            className="navbar-toggler navbar-toggler align-self-center"
                            type="button"
                            data-bs-toggle="minimize"
                        >
                            <span className="icon-menu"></span>
                        </button>
                    </div>
                    <div>
                        <a className="navbar-brand" href="#">
                            Interview App
                        </a>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-top">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item d-flex align-items-center">
                            <h4
                                className="text-primary text-capitalize"
                                style={{ marginRight: "10px" }}
                            >
                                {user.name}
                            </h4>
                            <img
                                className="img-xs rounded-circle"
                                style={{ width: "70px", height: "70px" }}
                                src={`/storage/${user.photo}`}
                                alt="Profile image"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Head;
