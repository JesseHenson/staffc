import { useState, useEffect } from "react";
const citizenInputFieldObjs = [
  {
    id: "citizen",
    display: "Citizenship Status",
    type: "select",
    options: [
      {
        value: "citizen",
        display: "A citizen of the United States",
      },
      {
        value: "nonCitizen",
        display: "A noncitizen national of the United States",
      },
      {
        value: "permResident",
        display: "A lawful permanent resident",
      },
      {
        value: "Alien",
        display: "An alien authorized to work ",
      },
    ],
  },
  {
    id: "listSelection",
    display:
      "list A (passport) or list B and C (Drivers License/Social Security Card)",
    type: "select",
    options: [
      {
        value: "",
        display: "",
      },
      {
        value: "a",
        display: "List A",
      },
      {
        value: "b",
        display: "List B and C",
      },
    ],
  },
];
const listAInputFieldObjs = [
  {
    id: "docTitle",
    display: "Document Title",
    type: "select",
    options: [
      {
        value: "",
        display: "",
      },
      {
        value: "passport",
        display: "Passport",
      },
    ],
  },
  {
    id: "issueingAuth",
    display: "Issueing Authority",
    type: "text",
  },
  {
    id: "docNumber",
    display: "Document Number",
    type: "text",
  },
  {
    id: "expDate",
    display: "Expiration Date (if any)",
    type: "date",
  },
];
const listBandCInputFieldObjs = [
  {
    id: "docTitleB",
    display: "Document Title B",
    type: "select",
    options: [
      {
        value: "",
        display: "",
      },
      {
        value: "driversLicense",
        display: "Drivers License",
      },
    ],
  },
  {
    id: "issueingAuthB",
    display: "Issueing Authority B",
    type: "text",
  },
  {
    id: "docNumberB",
    display: "Document Number B",
    type: "text",
  },
  {
    id: "expDateB",
    display: "Expiration Date B (if any)",
    type: "date",
  },
  {
    id: "docTitleC",
    display: "Document Title C",
    type: "select",
    options: [
      {
        value: "",
        display: "",
      },
      {
        value: "socialSecurityCard",
        display: "Social Security Card",
      },
    ],
  },
  {
    id: "issueingAuthC",
    display: "Issueing Authority C",
    type: "text",
  },
  {
    id: "docNumberC",
    display: "Document Number C",
    type: "text",
  },
  {
    id: "expDateC",
    display: "Expiration Date C (if any)",
    type: "date",
  },
];
export const ListA = () => {
  return listAInputFieldObjs.map((inputFieldObj) => {
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
  });
};
export const ListB = () => {
  return listBandCInputFieldObjs.map((inputFieldObj) => {
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
  });
};

export default () => {
  const [listSelection, setListSelection] = useState("");

  let listComp = "";
  switch (listSelection) {
    case "a":
      listComp = <ListA />;
      break;
    case "b":
      listComp = <ListB />;
      break;
    default:
      break;
  }

  return (
    <div className="w-2/3  center">
      <h1 className="title">I9</h1>
      <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
        {citizenInputFieldObjs.map((inputFieldObj) => {
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
                onChange={(e) => {
                  inputFieldObj.id == "listSelection"
                    ? setListSelection(e.target.value)
                    : console.log("nothing");
                }}
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
        {listComp}
      </form>
    </div>
  );
};
