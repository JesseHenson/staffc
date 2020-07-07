import TaskList from "../components/taskList";
import Layout from "../components/layout";
import { useState } from "react";
import SignOn from "../components/signOn";
import Personal from "../components/personal";
import AdditionalInfo from "../components/addlInfo";
import FedTax from "../components/fedTax";
import StateTax from "../components/stateTax";
import Paycodes from "../components/paycode";
import DirectDeposit from "../components/directDeposit";
import I9 from "../components/i9";
import ESig from "../components/eSign";

export default function Home({ children }) {
  const [currentTask, setCurrentTask] = useState("");
  let currentComp = "";
  switch (currentTask) {
    case "signOn":
      currentComp = <SignOn />;
      break;
    case "personal":
      currentComp = <Personal />;
      break;
    case "additionalInfo":
      currentComp = <AdditionalInfo />;
      break;
    case "fedTax":
      currentComp = <FedTax />;
      break;
    case "stateTax":
      currentComp = <StateTax />;
      break;
    case "payCodes":
      currentComp = <Paycodes />;
      break;
    case "dirDep":
      currentComp = <DirectDeposit />;
      break;
    case "i9":
      currentComp = <I9 />;
      break;
    case "esig":
      currentComp = <ESig />;
      break;
    default:
      break;
  }
  return (
    <Layout>
      <TaskList setCurrentTask={setCurrentTask} />
      {currentComp}
    </Layout>
  );
}
