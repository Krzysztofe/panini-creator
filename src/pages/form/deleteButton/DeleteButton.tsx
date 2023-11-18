import IconDeleteButton from "../../../img/iconDeleteButton/IconDeleteButton";
import styles from "./DeleteButton.module.css";
import { useContext } from "react";
import { ContextForm } from "../../../context/ContextFormProv";

type Props = {
  name: string;
  id: string;
};

const DeleteButton = (props: Props) => {
  const { newInputs, setNewInputs } = useContext(ContextForm);

  const handleDelete = () => {
    setNewInputs({
      ...newInputs,
      [props.name]: [
        ...newInputs[props.name as keyof typeof newInputs].filter(item => {
          return item?.props?.id != props.id;
        }),
      ],
    });
  };

  return (
    <div onClick={handleDelete} className={styles.deleteButton}>
      <IconDeleteButton />
    </div>
  );
};

export default DeleteButton;
