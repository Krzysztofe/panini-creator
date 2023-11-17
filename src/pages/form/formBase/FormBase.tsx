import { useContext } from "react";
import InputCheckbox from "../../../components/inputs/inputCheckbox/InputCheckbox";
import InputSelect from "../../../components/inputs/inputSelect/InputSelect";
import InputSlider from "../../../components/inputs/inputSlider/InputSlider";
import { ContextForm } from "../../../context/ContextFormProv";
import { breadVariants } from "../../../data/bread";
import { cheeseVariants } from "../../../data/cheese";
import { dressingVariants } from "../../../data/dressing";
import { iconsBread } from "../../../data/iconsBread";
import { meatVariants } from "../../../data/meat";
import { vegetableVariant } from "../../../data/vegetable";
import IconAddButton from "../../../img/iconAddButton/IconAddButton";
import IconSwitch from "../../../img/iconSwitch/IconSwitch";
import FormRow from "../formRow/FormRow";
import FormRowInputs from "../formRowInputs/FormRowInputs";
import FormRowTitle from "../formRowTitle/FormRowTitle";
import styles from "./FormBase.module.css";

const FormBase = () => {
  const { isInputPrint } = useContext(ContextForm);

  return (
    <div>
      <FormRow>
        <FormRowTitle title={"BREAD"}></FormRowTitle>
        <FormRowInputs>
          <InputSlider variants={breadVariants} icons={iconsBread} />
        </FormRowInputs>
      </FormRow>

      <FormRow>
        <FormRowTitle title={"CHEASE"}>
          <IconSwitch id={"1"} name="chease" />
        </FormRowTitle>
        <FormRowInputs>
          {isInputPrint.chease && (
            <>
              <IconAddButton />
              <InputSelect variants={cheeseVariants} />
            </>
          )}
        </FormRowInputs>
      </FormRow>

      <FormRow>
        <FormRowTitle title={"MEAT"}>
          <IconSwitch id={"2"} name="meat" />
        </FormRowTitle>
        <FormRowInputs>
          {isInputPrint.meat && (
            <>
              <IconAddButton />
              <InputSelect variants={meatVariants} />{" "}
            </>
          )}
        </FormRowInputs>
      </FormRow>

      <FormRow>
        <FormRowTitle title={"DRESSING"}></FormRowTitle>
        <FormRowInputs>
          <InputSlider variants={dressingVariants} />
        </FormRowInputs>
      </FormRow>

      <FormRow>
        <FormRowTitle title={"VEGETABLES"} titleOnTop={true}></FormRowTitle>
        <FormRowInputs>
          <div className={styles.checkboxContainer}>
            {vegetableVariant.map(vegetable => {
              return <InputCheckbox key={vegetable} value={vegetable} />;
            })}
          </div>
        </FormRowInputs>
      </FormRow>
    </div>
  );
};

export default FormBase;
