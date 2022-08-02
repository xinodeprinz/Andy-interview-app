import React from "react";
// import { Link } from "@inertiajs/inertia-react";

const RegFormButtons = ({ data }) => {
    return (
        <div className="col-12 d-flex justify-content-between">
            <a href={data.back_path} className="btn btn-dark">
                Back
            </a>
            <button className="btn btn-primary" type="submit">
                {data.submit_text}
            </button>
        </div>
    );
};

export default RegFormButtons;
