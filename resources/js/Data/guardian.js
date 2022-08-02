const data = [
    {
        label: "First Name",
        type: "text",
        name: "g_first_name",
        ratio: 4,
        feedback: "First name is required",
    },
    {
        label: "Last Name",
        type: "text",
        name: "g_last_name",
        ratio: 4,
        feedback: "Last name is required",
    },
    {
        label: "Gender",
        name: "g_gender",
        ratio: 4,
        feedback: "Select a gender",
        data: ["Male", "Female"],
    },
    {
        label: "Date of birth",
        type: "date",
        name: "g_date_of_birth",
        ratio: 4,
        feedback: "Date of birth is required",
    },
    {
        label: "Relationship with child?",
        name: "g_relationship",
        ratio: 4,
        feedback: "Select an answer",
        data: [
            "Father",
            "Mother",
            "Aunt",
            "Uncle",
            "Grand Father",
            "Grand Mother",
        ],
    },
    {
        label: "Email",
        type: "email",
        name: "g_email",
        ratio: 4,
        feedback: "Email is required",
    },
    {
        label: "Phone Number",
        type: "tel",
        name: "g_phone_number",
        ratio: 4,
        feedback: "Phone number is required",
    },
    {
        label: "Occupation",
        type: "text",
        name: "g_occupation",
        ratio: 4,
        feedback: "Occupation is required",
    },
    {
        label: "Address",
        type: "text",
        name: "g_address",
        ratio: 4,
        feedback: "Address is required",
    },
];
export default data;