const data = [
    [
        {
            label: "First Name",
            type: "text",
            name: "first_name",
            ratio: 4,
            feedback: "First name is required",
        },
        {
            label: "Last Name",
            type: "text",
            name: "last_name",
            ratio: 4,
            feedback: "Last name is required",
        },
        {
            label: "Username",
            type: "text",
            name: "username",
            ratio: 4,
            feedback: "Username is required",
        },
        {
            label: "Date of birth",
            type: "date",
            name: "date_of_birth",
            ratio: 4,
            feedback: "Date of birth is required",
        },
        {
            label: "Gender",
            name: "gender",
            ratio: 4,
            feedback: "Select a gender",
            data: ["Male", "Female"],
        },
        {
            label: "Primary school attended",
            type: "text",
            name: "primary_school",
            ratio: 4,
            feedback: "Date of birth is required",
        },
    ],
    [
        {
            label: "Grade for common entrance",
            name: "grade",
            ratio: 4,
            feedback: "Select a grade",
            data: ["A", "B"],
        },
        {
            label: "Which school will you like to attend?",
            name: "school",
            ratio: 4,
            feedback: "Select a school",
            data: [
                "G.B.H.S Ndop",
                "INSET Douala",
                "G.B.H.S Douala",
                "B.H.S Buea",
                "BGS Kumbo",
            ],
        },
        {
            label: "Will you like to take your interview online?",
            name: "online_interview",
            ratio: 4,
            feedback: "Select a response",
            data: ["Yes", "No"],
        },
        {
            label: "Birth certificate",
            type: "file",
            name: "birth_certificate",
            ratio: 4,
            feedback: "Upload birth certificate",
        },
        {
            label: "Common entrance slip",
            type: "file",
            name: "slip",
            ratio: 4,
            feedback: "Upload slip",
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            ratio: 4,
            feedback: "Password is required",
        },
    ],
];
export default data;
