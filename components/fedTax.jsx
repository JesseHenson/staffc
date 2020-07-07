export default () => {
  const inputFieldObjs = [
    {
      id: "depUnder17",
      display: "Dependents Under 17",
      type: "number",
    },
    {
      id: "otherDep",
      display: "Other Dep",
      type: "number",
    },
    {
      id: "otherIncome",
      display: "Other Income (not from Jobs)",
      type: "text",
    },
    {
      id: "deductions",
      display: "Deductions",
      type: "text",
    },
    {
      id: "extraWithholding",
      display: "Extra Withholding",
      type: "text",
    },
  ];
  return (
    <div className="w-2/3  center">
      <h1 className="title">Federal Taxes</h1>
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
