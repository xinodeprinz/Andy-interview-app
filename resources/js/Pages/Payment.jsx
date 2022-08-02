import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const Payment = ({ user, amount = 2, admin }) => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({ amount, phone_number: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        form.post("/payment", {
            onError: (e) => {
                setIsLoading(false);
                if (e.hasOwnProperty("phone_number")) {
                    new Swal({
                        title: "Error",
                        text: e.phone_number,
                        icon: "error",
                        button: "ok",
                    });
                } else if (e.hasOwnProperty("failed")) {
                    new Swal({
                        title: "Error",
                        text: e.failed,
                        icon: "error",
                        button: "ok",
                    });
                }
            },
            onSuccess: () => {
                setIsLoading(false);
                new Swal({
                    title: "Success",
                    text: "Transaction successful",
                    icon: "success",
                    button: "ok",
                });

                return setInterval(() => {
                    window.location.reload();
                }, 3000);
            },
        });
    };

    return (
        <div className="container-scroller">
            {isLoading ? <Loader text="Pending" /> : null}
            <Head user={user} admin={admin} />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel mx-5 my-2">
                    {user.has_paid_fees ? (
                        <div className="alert alert-success text-center">
                            <strong>Congratulations!</strong> You've already
                            paid your interview fees.
                        </div>
                    ) : (
                        <div className="row g-5 align-items-center mt-3">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <img
                                            src="/storage/images/mtn.jpg"
                                            alt="MTN Logo"
                                            className="img-fluid"
                                            width="200"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src="/storage/images/orange.jpg"
                                            alt="Orange Logo"
                                            className="img-fluid"
                                            width="200"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 shadow bg-white p-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="fw-bold fs-5 mb-3">
                                                Amount: {amount}FCFA
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label
                                                htmlFor="phone_number"
                                                className="form-label fw-bold"
                                            >
                                                Phone number
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    +237
                                                </span>
                                                <input
                                                    type="number"
                                                    name="phone_number"
                                                    className="form-control"
                                                    style={{ height: 40 }}
                                                    placeholder="Example: 689876543"
                                                    onChange={(e) =>
                                                        form.setData(
                                                            "phone_number",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <button
                                            className="btn btn-primary w-25 ms-2"
                                            type="submit"
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Payment;
