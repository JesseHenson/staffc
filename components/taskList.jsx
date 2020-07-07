export default ({ setCurrentTask }) => (
  <ul className="w-1/3 m-4">
    <li>
      <button onClick={() => setCurrentTask("signOn")}>Sign On</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("personal")}>Personal</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("additionalInfo")}>
        Additional Info
      </button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("fedTax")}>Federal Tax</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("stateTax")}>State Tax</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("payCodes")}>Pay Codes</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("dirDep")}>Direct Deposit</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("i9")}>I-9</button>
    </li>
    <li>
      <button onClick={() => setCurrentTask("esig")}>
        Electronic Signature
      </button>
    </li>
  </ul>
);
