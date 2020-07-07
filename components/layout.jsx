import Header from "./header";
import Head from "next/head";

export default ({ children }) => (
  <>
    <Header />
    <div className="flex mb-4">{children}</div>
  </>
);
