import Header from "./header";

export default ({ children }) => (
  <>
    <Header />
    <div className="flex mb-4">{children}</div>
  </>
);
