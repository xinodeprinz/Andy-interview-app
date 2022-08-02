import React from "react";

const FormSelect = ({ data, handleInput }, key) => {
    return (
        <div className={`col-md-${data.ratio} mb-3`} key={key}>
            <label htmlFor={data.name} className="form-label">
                {data.label}
            </label>
            <select
                className="form-select form-select-sm"
                defaultValue=""
                id={data.name}
                name={data.name}
                onChange={(e) => handleInput(e.target.name, e.target.value)}
                required
            >
                <option disabled value="">
                    Choose...
                </option>
                {data.data.map((e, k) => (
                    <option value={e} key={k}>
                        {e}
                    </option>
                ))}
            </select>
            <div className="invalid-feedback">{data.feedback}</div>
        </div>
    );
};

export default FormSelect;
