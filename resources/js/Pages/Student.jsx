import React, { Component } from "react";
import data from "../Data/student";
import NavTab from "../Components/NavTab";
import FormInput from "../Components/FormInput";
import FormSelect from "../Components/FormSelect";
import axios from "axios";
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
            "first_name",
            "last_name",
            "date_of_birth",
            "username",
            "gender",
            "primary_school",
            "grade",
            "school",
            "online_interview",
            "birth_certificate",
            "slip",
            "password",
            "photo",
        ].forEach((e) => data.append(e, this.state[e]));
        axios
            .post("/register/student", data)
            .then(() => (window.location.pathname = "/register/guardian"));
    };

    handlePhoto = (photo) => {
        const photoField = document.getElementById("photo");
        if (photo) {
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                photoField.src = result;
            };
            reader.readAsDataURL(photo);
        }
        this.setState({ photo });
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
                            className="needs-validation"
                            noValidate
                            onSubmit={this.submit}
                        >
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row">
                                        {" "}
                                        {data[0].map((e, key) => {
                                            if (
                                                Object(e).hasOwnProperty("type")
                                            ) {
                                                return (
                                                    <FormInput
                                                        data={e}
                                                        key={key}
                                                        handleInput={
                                                            this.handleInput
                                                        }
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <FormSelect
                                                        data={e}
                                                        key={key}
                                                        handleInput={
                                                            this.handleInput
                                                        }
                                                    />
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <input
                                        type="file"
                                        name="photo_field"
                                        id="photo_field"
                                        accept=".jpg,.jpeg,.png"
                                        hidden
                                        onChange={(e) =>
                                            this.handlePhoto(e.target.files[0])
                                        }
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Upload a photo
                                    </div>
                                    <button
                                        type="button"
                                        className="border-0"
                                        onClick={() =>
                                            document
                                                .getElementById("photo_field")
                                                .click()
                                        }
                                    >
                                        <img
                                            src="/storage/empty.jpg"
                                            id="photo"
                                            className="img-thumbnail w-100"
                                            alt="..."
                                            style={{ height: "150px" }}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                {data[1].map((e, key) => {
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
                            </div>
                            <RegFormButtons
                                data={{ back_path: "/", submit_text: "Next" }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
