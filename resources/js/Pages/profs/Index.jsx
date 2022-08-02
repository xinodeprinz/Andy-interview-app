import { Link, useForm } from "@inertiajs/inertia-react";
import classNames from "classnames";
import React from "react";

const Index = (props) => {
    // console.log(props);
    const form = useForm({
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        form.post("/form", {
            onError: (e) => console.log(e),
        });
    };

    const myStyles = {
        center: {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };

    return (
        <div className="container">
            <div style={myStyles.center}>
                <form onSubmit={handleSubmit} className="w-50">
                    {form.progress ? (
                        <div className="progress">
                            <div
                                className="progress-bar px-2 py-1"
                                role="progressbar"
                                style={{
                                    width: `${form.progress.percentage}%`,
                                }}
                                aria-valuenow={form.progress.percentage}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                Processing form
                            </div>
                        </div>
                    ) : null}
                    <div className="form-group mb-3">
                        <label htmlFor="username">username</label>
                        <input
                            type="text"
                            placeholder="username"
                            id="username"
                            value={form.data.username}
                            className={classNames("form-control", {
                                "is-invalid": form.errors.username,
                                "is-valid":
                                    form.hasErrors && !form.errors.username,
                            })}
                            onChange={(e) => {
                                form.setData("username", e.target.value);
                                form.post("form");
                            }}
                        />
                        <span className="invalid-feedback">
                            {form.errors.username}
                        </span>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">password</label>
                        <input
                            type="text"
                            placeholder="password"
                            id="password"
                            value={form.data.password}
                            className={classNames("form-control", {
                                "is-invalid": form.errors.password,
                                "is-valid":
                                    form.hasErrors && !form.errors.password,
                            })}
                            onChange={(e) => {
                                form.setData("password", e.target.value);
                                form.post("form");
                            }}
                        />
                        <span className="invalid-feedback">
                            {form.errors.password}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={form.processing}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Index;
