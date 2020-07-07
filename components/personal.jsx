export default () => {
  const inputFieldObjs = [
    {
      id: "fname",
      display: "First Name",
      type: "text",
    },
    {
      id: "lname",
      display: "Last Name",
      type: "text",
    },
    {
      id: "minit",
      display: "Middle Initial",
      type: "text",
    },
    {
      id: "ssn",
      display: "SSN",
      type: "password",
    },
    {
      id: "address",
      display: "Street Address",
      type: "text",
    },
    {
      id: "address2",
      display: "Address 2",
      type: "text",
    },
    {
      id: "city",
      display: "City",
      type: "text",
    },
    {
      id: "state",
      display: "State",
      type: "text",
    },
    {
      id: "zip",
      display: "Zip",
      type: "text",
    },
    {
      id: "startDate",
      display: "Start Date",
      type: "date",
    },
    {
      id: "origHireDate",
      display: "Original Hire Date",
      type: "date",
    },
    {
      id: "phone",
      display: "Phone Number",
      type: "text",
    },
    {
      id: "altPhone",
      display: "Alternative Phone Number",
      type: "text",
    },
    {
      id: "email",
      display: "Email",
      type: "email",
    },
    {
      id: "birthDate",
      display: "Birth Date",
      type: "date",
    },
    {
      id: "gender",
      display: "Gender",
      type: "select",
      options: [
        {
          value: "",
          display: "",
        },
        {
          value: "male",
          display: "Male",
        },
        {
          value: "female",
          display: "Female",
        },
        {
          value: "other",
          display: "Other",
        },
      ],
    },
    {
      id: "ethnicOrig",
      display: "Ethnic Origin",
      type: "select",
      options: [
        {
          value: "",
          display: "",
        },
        {
          value: "white",
          display: "White",
        },
        {
          value: "amerInidian",
          display: "American Indian or Alaskan Native",
        },
        {
          value: "black",
          display: "Black or African American",
        },
        {
          value: "asian",
          display: "Asian",
        },
        {
          value: "hispanic",
          display: "Hispanic or Latino",
        },
        {
          value: "twoOrMore",
          display: "Two or more races",
        },
        {
          value: "na",
          display: "N/A",
        },
        {
          value: "hawaiian",
          display: "Native Hawaiian or Pacific Islander",
        },
      ],
    },
    {
      id: "maritalStatus",
      display: "Marital Status",
      type: "select",
      options: [
        {
          value: "",
          display: "",
        },
        {
          value: "single",
          display: "Single",
        },
        {
          value: "married",
          display: "Married",
        },
        {
          value: "widowed",
          display: "Widowed",
        },
        {
          value: "divorced",
          display: "Divorced",
        },
      ],
    },
    {
      id: "emergencyContact",
      display: "Emergency Contact",
      type: "text",
    },
    {
      id: "emergencyPhone",
      display: "Emergency Phone",
      type: "text",
    },
    {
      id: "employStatus",
      display: "Employee Status",
      type: "select",
      options: [
        {
          value: "fullTimeRegular",
          display: "Full Time Regular",
        },
        {
          value: "partTimeRegular",
          display: "Part Time Regular",
        },
        {
          value: "fullTimeTemp",
          display: "Full Time Temp",
        },
        {
          value: "partTimeTemp",
          display: "Part Time Temp",
        },
        {
          value: "variable",
          display: "Variable",
        },
      ],
    },
    {
      id: "department",
      display: "Department",
      type: "select",
      options: [
        {
          value: "520",
          display: "default",
        },
      ],
    },
    {
      id: "wc",
      display: "WC Code",
      type: "select",
      options: [
        {
          value: "CO8010",
          display: "Office",
        },
      ],
    },
    {
      id: "payPeriod",
      display: "Pay Period",
      type: "select",
      options: [
        {
          value: "weekly",
          display: "Weekly",
        },
      ],
    },
    {
      id: "jobCategory",
      display: "Job Category",
      type: "select",
      options: [
        {
          value: "adminSupport",
          display: "Admin Support Workers",
        },
        {
          value: "craftWorkers",
          display: "Craft Workers",
        },
      ],
    },
  ];
  return (
    <div className="w-2/3  center">
      <h1 className="title">Personal</h1>
      <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
        {inputFieldObjs.map((inputFieldObj) => {
          return inputFieldObj.type == "select" ? (
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for={inputFieldObj.id}
              >
                {inputFieldObj.display}
              </label>
              <select
                className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={inputFieldObj.id}
                type={inputFieldObj.type}
              >
                {inputFieldObj.options.map((option) => (
                  <option value={option.value}>{option.display}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for={inputFieldObj.id}
              >
                {inputFieldObj.display}
              </label>
              <input
                className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={inputFieldObj.id}
                type={inputFieldObj.type}
                placeholder={inputFieldObj.display}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};
