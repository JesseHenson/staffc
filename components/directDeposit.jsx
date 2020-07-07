import { useState } from "react";

export const Form = ({
  inputFieldObjs,
  setNumberOfAccounts,
  numberOfAccounts,
  item,
}) => (
  <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log(item, numberOfAccounts);
        const tempNumberOfAccounts = numberOfAccounts.filter(
          (account) => account != item
        );
        setNumberOfAccounts(tempNumberOfAccounts);
        console.log(numberOfAccounts);
      }}
      class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded left w-1/4"
    >
      Delete Account
    </button>
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
);

export default () => {
  const [numberOfAccounts, setNumberOfAccounts] = useState([1, 2]);
  const inputFieldObjs = [
    {
      id: "routingNumber",
      display: "Routing Number",
      type: "text",
    },
    {
      id: "accountNumber",
      display: "Account Number",
      type: "text",
    },
    {
      id: "depOption",
      display: "Deposit Option",
      type: "Select",
      options: [
        {
          value: "remainder",
          display: "Remainder",
        },
        {
          value: "percentGross",
          display: "Percent Gross",
        },
        {
          value: "dollars",
          display: "Dollars",
        },
      ],
    },
    {
      id: "amt",
      display: "Amount",
    },
  ];
  return (
    <div className="w-2/3  center">
      <h1 className="title">Additional Info</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          const tempNumberOfAccounts = [
            ...numberOfAccounts,
            numberOfAccounts[numberOfAccounts.length - 1] + 1,
          ];
          console.log(numberOfAccounts[numberOfAccounts.length - 1]);
          setNumberOfAccounts(tempNumberOfAccounts);
        }}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Account
      </button>
      {numberOfAccounts.map((item, index) => (
        <Form
          key={index}
          numberOfAccounts={numberOfAccounts}
          inputFieldObjs={inputFieldObjs}
          setNumberOfAccounts={setNumberOfAccounts}
          item={item}
        />
      ))}
    </div>
  );
};
