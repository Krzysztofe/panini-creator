import IconAddButton from "../../img/iconAddButton/IconAddButton";
import { useState } from "react";
import InputSlider from "../inputs/inputSlider/InputSlider";

const AddButton = () => {
  const [isInputPrint, setInputPrint] = useState([
    <>
      <IconAddButton />
      <InputSlider variants={["ala", "ola"]} />,
    </>,
  ]);

const add = () =>{

return
}

  return (
    <div>
      <IconAddButton />eee{
        isInputPrint[0]
      }
    </div>
  );
};

export default AddButton;
