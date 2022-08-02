import React, { useState } from "react";
import classNames from "classnames";
import Sidebar from "./Sidebar";
import Head from "./Head";

const Dashboard = ({ user, admin }) => {
    // ["id", "photo"].forEach((e) => delete user[e]);
    let newUser = Object.entries(user);
    return (
        <div className="container-scroller">
            <Head user={user} admin={admin} />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel mx-5 my-2">
                    <h3 className="text-center mt-3 text-primary">
                        Personal and Guardian Information
                    </h3>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="text-primary">
                                <tr>
                                    <th>#</th>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newUser.map((item, key) => {
                                    if (
                                        item[0] !== "id" &&
                                        item[0] !== "photo"
                                    ) {
                                        return (
                                            <tr key={key}>
                                                <td>{++key}</td>
                                                <td>
                                                    {item[0].replaceAll(
                                                        "_",
                                                        " "
                                                    )}
                                                </td>
                                                <td>{item[1]}</td>
                                            </tr>
                                        );
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
