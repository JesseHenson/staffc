export default () => {
  const inputFieldObjs = [
    {
      id: "payType",
      display: "Hourly or Salary",
      type: "select",
      options: [
        {
          value: "hourly",
          display: "Hourly",
        },
        {
          value: "salary",
          display: "Salary",
        },
      ],
    },
    {
      id: "payFrequency",
      display: "Pay Frequency",
      type: "select",
      options: [
        {
          value: "",
          display: "",
        },
        {
          value: "weekly",
          display: "Weekly",
        },
      ],
    },
    {
      id: "payUnitPeriod",
      display: "Pay Unit Period",
      type: "select",
      options: [
        {
          value: "",
          display: "",
        },
        {
          value: "annual",
          display: "Annual",
        },
      ],
    },
  ];
  return (
    <div className="w-2/3  center">
      <h1 className="title">Additional Info</h1>
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
