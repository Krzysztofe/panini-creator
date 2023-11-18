import { useContext } from "react";
import InputSelect from "../../../components/inputs/inputSelect/InputSelect";
import { ContextForm } from "../../../context/ContextFormProv";
import IconAddButton from "../../../img/iconAddButton/IconAddButton";
import DeleteButton from "../deleteButton/DeleteButton";
import styles from "./AddButton.module.css";
import InputSlider from "../../../components/inputs/inputSlider/InputSlider";

type Props = {
  name: string;
  variants: string[]
  inputType: string
};

const AddButton = (props: Props) => {
  const { newInputs, setNewInputs } = useContext(ContextForm);

  const id = Date.now().toString();
  const newInput =
    props.inputType === "select" ? (
      <li className={styles.newInput} id={id}>
        <DeleteButton name={props.name} id={id} />
        <InputSelect variants={props.variants} />
      </li>
    ) : (
      <li className={styles.newInput} id={id}>
        <DeleteButton name={props.name} id={id} />
        <InputSlider variants={props.variants} />
      </li>
    );

 

  const handleAdd = () => {
    setNewInputs(prev => ({
      ...prev,
      [props.name]: [...prev[props.name as keyof typeof newInputs], newInput],
    }));
  };

  return (
    <div className={styles.addButton} onClick={handleAdd}>
      <IconAddButton />
    </div>
  );
};

export default AddButton;
