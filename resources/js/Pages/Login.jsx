import React, { Component } from "react";
import data from "../Data/login";
import axios from "axios";
import Swal from "sweetalert2";

export default class Login extends Component {
    state = { checked: false };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submit = (e) => {
        e.preventDefault();
        const { username, password, checked } = this.state;
        const data = { username, password, checked };
        axios
            .post("/login", data)
            .then(() => {
                new Swal({
                    title: "Success",
                    text: "Your login is successful.",
                    icon: "success",
                    button: "ok",
                });
                setTimeout(() => {
                    window.location.pathname = "/dashboard";
                }, 3000);
            })
            .catch(() => {
                new Swal({
                    title: "Failure",
                    text: "Your credentials do not match our record",
                    icon: "error",
                    button: "ok",
                });
            });
    };

    checkbox = () => {
        this.setState({ checked: this.state.checked ? false : true });
    };
    render() {
        (function () {
            "use strict";

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll(".needs-validation");

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms).forEach(function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }

                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        })();
        return (
            <div className="container center">
                <div className="card shadow-lg border-primary row col-10 offset-xs-1 col-md-5">
                    <div className="card-header bg-white text-primary fw-bold fs-4">
                        Login
                    </div>
                    <div className="card-body">
                        <form
                            className="needs-validation"
                            noValidate
                            onSubmit={this.submit}
                        >
                            {data.map((e, key) => (
                                <div className="mb-3" key={key}>
                                    <label
                                        htmlFor={e.name}
                                        className="form-label"
                                    >
                                        {e.label}
                                    </label>
                                    <input
                                        type={e.type}
                                        placeholder={e.label}
                                        name={e.name}
                                        className="form-control"
                                        id={e.name}
                                        required
                                        onChange={this.handleInput}
                                    />
                                    <div className="invalid-feedback">
                                        {e.feedback}
                                    </div>
                                </div>
                            ))}

                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={this.checkbox}
                                    id="invalidCheck"
                                    style={{ marginLeft: 8 }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="invalidCheck"
                                    style={{ paddingLeft: 5, paddingTop: 3 }}
                                >
                                    Remember me
                                </label>
                            </div>
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="text-center">
                            <a
                                href="/register/student"
                                className="card-link link-primary"
                            >
                                Don't have an account?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
