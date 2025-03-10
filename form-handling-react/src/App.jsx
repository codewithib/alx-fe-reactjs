import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Handling in React</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
};

export default App;
