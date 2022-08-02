import React, { Component } from "react";
import data from "../Data/guardian";
import NavTab from "../Components/NavTab";
import FormInput from "../Components/FormInput";
import FormSelect from "../Components/FormSelect";
import axios from "axios";
import Swal from "sweetalert2";
import RegFormButtons from "../Components/RegFormButtons";
import "../validate";

export default class Student extends Component {
    state = {};

    handleInput = (name, value) => {
        this.setState({ [name]: value });
    };

    submit = (e) => {
        e.preventDefault();
        const data = new FormData();
        [
            "g_first_name",
            "g_last_name",
            "g_gender",
            "g_date_of_birth",
            "g_relationship",
            "g_email",
            "g_phone_number",
            "g_occupation",
            "g_address",
        ].forEach((e) => data.append(e, this.state[e]));
        axios.post("/register/guardian", data).then(
            () =>
                new Swal({
                    title: "Success",
                    text: "Your registration has been successful.",
                    icon: "success",
                    button: "ok",
                })
        );
        return setTimeout(() => {
            window.location.pathname = "/dashboard";
        }, 5000);
    };
    render() {
        const nav_data = [
            { name: "student info", path: "/register/student" },
            { name: "guardian info", path: "/register/guardian" },
        ];

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
                <div className="card shadow-lg border-primary">
                    <div className="card-header">
                        <NavTab data={nav_data} />
                    </div>
                    <div className="card-body">
                        <form
                            className="row g-3 needs-validation"
                            noValidate
                            onSubmit={this.submit}
                        >
                            {data.map((e, key) => {
                                if (Object(e).hasOwnProperty("type")) {
                                    return (
                                        <FormInput
                                            data={e}
                                            key={key}
                                            handleInput={this.handleInput}
                                        />
                                    );
                                } else {
                                    return (
                                        <FormSelect
                                            data={e}
                                            key={key}
                                            handleInput={this.handleInput}
                                        />
                                    );
                                }
                            })}
                            <RegFormButtons
                                data={{
                                    back_path: "/register/student",
                                    submit_text: "Submit",
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
