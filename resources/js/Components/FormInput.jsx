import React from "react";

const FormInput = ({ data, handleInput }, key) => {
    return (
        <div className={`col-md-${data.ratio} mb-3`} key={key}>
            <label htmlFor={data.name} className="form-label text-capitalize">
                {data.label} {data.type === "file" ? "(PDF only)" : ""}
            </label>
            <input
                type={data.type}
                className="form-control form-control-sm"
                id={data.name}
                placeholder={data.label}
                name={data.name}
                required
                accept={data.type === "file" ? ".pdf" : "*"}
                onChange={(e) =>
                    handleInput(
                        e.target.name,
                        e.target.type === "file"
                            ? e.target.files[0]
                            : e.target.value
                    )
                }
            />
            <div className="invalid-feedback">{data.feedback}</div>
        </div>
    );
};

export default FormInput;
