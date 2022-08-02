import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { useForm } from "@inertiajs/inertia-react";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import { compareDates } from "../Data/time";
// import { calcTime } from "../Data/time";

const Quiz = ({ data, user, exists, score_ini, admin, show_quiz }) => {
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(60);
    const [color, setColor] = useState("");
    const [ansColor, setansColor] = useState({});
    const [score, setScore] = useState(score_ini);
    const [hasSubmitted, setHasSubmitted] = useState(exists);
    const [disabled, setDisabled] = useState(exists);
    const [isLoading, setIsLoading] = useState(false);
    const [isQuizDate, setIsQuizDate] = useState(false);

    useEffect(() => {
        // This is to check if the current day is the interview day
        if (compareDates(new Date(admin.date), new Date())) {
            setIsQuizDate(true);
        }

        // end of check

        setColor(minutes < 10 ? "danger" : "success");
        setTimeout(() => {
            setSeconds(seconds - 1);
        }, 1000);

        if (seconds === 0 && minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
        } else if (seconds === 0 && minutes === 0) {
            handleResult();
        }
    }, [seconds, history]);

    const form = useForm({ score: 0 });
    const codeForm = useForm({ code: 0 });

    const handleInput = (e, item) => {
        if (item.answer === e.target.value) {
            setScore(score + 1);
            form.setData("score", score + 1);
        }

        setansColor({
            ...ansColor,
            [item.id]:
                item.answer === e.target.value
                    ? [e.target.value, "text-success fw-bold"]
                    : [e.target.value, "text-danger fw-bold"],
        });
    };

    const handleResult = () => {
        setHasSubmitted(true);
        setDisabled(true);
        form.post("/score/store");
    };

    const handleCode = (value) => {
        codeForm.setData("code", value);
    };

    // Submits the secret code form
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        codeForm.post("/secret-code", {
            onError: (e) => {
                setIsLoading(false);
                new Swal({
                    title: "Error",
                    text: "Wrong secret code.",
                    icon: "error",
                    button: "ok",
                });
            },
            onSuccess: () => setIsLoading(false),
        });
    };

    const date = new Date(admin.date);

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
        <div className="container-scroller">
            {isLoading ? <Loader text="Loading..." /> : null}
            <Head user={user} admin={admin} />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                {!user.has_paid_fees ? (
                    <div className="main-panel mx-5 my-2">
                        <div className="alert alert-warning text-center">
                            You've not paid interview fees. Pay this fees to
                            have access to the interview which takes place on
                            {" " + date.toLocaleString()}.
                        </div>
                    </div>
                ) : (
                    <div className="main-panel mx-5 my-2">
                        {show_quiz ? (
                            <>
                                {isQuizDate ? (
                                    <>
                                        {!hasSubmitted ? (
                                            <div className="d-flex justify-content-between mb-3">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={handleResult}
                                                >
                                                    Submit
                                                </button>
                                                <h5
                                                    className={`text-${color} mb-5`}
                                                    style={{
                                                        textAlign: "right",
                                                    }}
                                                >
                                                    00:
                                                    {minutes < 10
                                                        ? `0${minutes}`
                                                        : minutes}
                                                    :
                                                    {seconds < 10
                                                        ? `0${seconds}`
                                                        : seconds}
                                                </h5>
                                            </div>
                                        ) : (
                                            <div className="alert alert-primary text-center fs-3">
                                                Interview score: {score}/
                                                {data.length}
                                            </div>
                                        )}
                                        <h3 className="text-center mt-3 text-primary">
                                            Interview Questions
                                        </h3>
                                        <div className="row row-cols-md-3 row-cols-sm-2">
                                            {data.map((item, key) => {
                                                return (
                                                    <div
                                                        className="my-2"
                                                        key={key}
                                                    >
                                                        <h4
                                                            className={
                                                                disabled
                                                                    ? "text-muted"
                                                                    : ""
                                                            }
                                                        >
                                                            {++key}.{" "}
                                                            {item.question}
                                                        </h4>
                                                        {item.options.map(
                                                            (opt, k) => {
                                                                return (
                                                                    <div
                                                                        className={`form-check ${
                                                                            Object(
                                                                                ansColor
                                                                            ).hasOwnProperty(
                                                                                String(
                                                                                    item.id
                                                                                )
                                                                            ) &&
                                                                            ansColor[
                                                                                String(
                                                                                    item.id
                                                                                )
                                                                            ][0] ===
                                                                                opt[0] &&
                                                                            hasSubmitted
                                                                                ? ansColor[
                                                                                      String(
                                                                                          item.id
                                                                                      )
                                                                                  ][1]
                                                                                : ""
                                                                        }`}
                                                                        key={k}
                                                                    >
                                                                        <input
                                                                            className="form-check-input"
                                                                            style={{
                                                                                marginLeft: 7,
                                                                                marginTop:
                                                                                    -0.5,
                                                                            }}
                                                                            type="radio"
                                                                            name={
                                                                                item.id
                                                                            }
                                                                            id={
                                                                                item.id
                                                                            }
                                                                            value={
                                                                                opt[0]
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                handleInput(
                                                                                    e,
                                                                                    item
                                                                                )
                                                                            }
                                                                            disabled={
                                                                                disabled
                                                                            }
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor={
                                                                                ++key
                                                                            }
                                                                        >
                                                                            {
                                                                                opt[0]
                                                                            }
                                                                            ){" "}
                                                                            {
                                                                                opt[1]
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                ) : (
                                    <div
                                        className="alert alert-info text-center"
                                        role="alert"
                                    >
                                        The interview date hasn't reached.
                                        Please wait patiently for{" "}
                                        {date.toLocaleString()}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="card shadow-lg">
                                        <div className="card-header">
                                            Enter secret code to have access to
                                            the interview quiz
                                        </div>
                                        <div className="card-body">
                                            <form
                                                className="needs-validation"
                                                onSubmit={handleSubmit}
                                                noValidate
                                            >
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="code"
                                                        className="form-label"
                                                    >
                                                        Secret Code
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Example: 987654"
                                                        onChange={(e) =>
                                                            handleCode(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="form-control"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        The secret code is
                                                        required.
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <button
                                                        className="btn btn-primary w-100"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
