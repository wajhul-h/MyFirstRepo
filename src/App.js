import "./App.css";
import ButtonCom from "./components/ButtonCom";
import InputCom from "./components/InputCom";

function App() {
  return (
    <div className="container">
      <h1 className="text-center py-3">Form</h1>
      <form className="col-lg-10 col-11 mx-auto border p-3">
        <InputCom labelName="First Name" inputType="text" />
        <InputCom labelName="Last Name" inputType="text" />
        <InputCom labelName="Email" inputType="email" />
        <InputCom labelName="Password" inputType="password" />
        <InputCom labelName="Repeat-password" inputType="password" />

        <ButtonCom
          buttonProp={{
            classes: "btn-secondary",
            type: "submit",
            value: "Login",
          }}
        />
      </form>
    </div>
  );
}

export default App;
