import React, { useContext } from "react";
import { eggVariants } from "../../../data/egg";
import FormRow from "../formRow/FormRow";
import FormRowTitle from "../formRowTitle/FormRowTitle";
import FormRowInputs from "../formRowInputs/FormRowInputs";
import { ContextForm } from "../../../context/ContextFormProv";
import InputSelect from "../../../components/inputs/inputSelect/InputSelect";
import AddButton from "../addButton/AddButton";
import styles from "./FormExtras.module.css";
import InputCheckbox from "../../../components/inputs/inputCheckbox/InputCheckbox";
import InputCheckboxWithLabel from "../../../components/inputs/inputCheckboxWithLabel/InputCheckboxWithLabel";
import { spreadVariant } from "../../../data/spread";
import InputRadio from "../../../components/inputs/inputradio/InputRadio";
import { servingVariant } from "../../../data/serving";

const FormExtras = () => {
  const { isInputPrint, newInputs } = useContext(ContextForm);

  return (
    <>
      <FormRow>
        <FormRowTitle title={"egg"} switch={true} />
        <FormRowInputs>
          {isInputPrint.egg && (
            <>
              <ul className={styles.inpitsContainer}>
                <li className={styles.topInputContainer}>
                  <AddButton
                    name={"egg"}
                    variants={eggVariants}
                    inputType={"select"}
                  />

                  <InputSelect variants={eggVariants} />
                </li>

                {newInputs.egg.map((newInput, idx) => {
                  return <React.Fragment key={idx}>{newInput}</React.Fragment>;
                })}
              </ul>
            </>
          )}
        </FormRowInputs>
      </FormRow>

      <FormRow>
        <FormRowTitle title={"Spreads"} switch={false} />
        <div className={styles.checkboxesContainer}>
          {spreadVariant.map(item => {
            return <InputCheckboxWithLabel key = {item} name={item} />;
          })}
        </div>
      </FormRow>

      <FormRow>
        <FormRowTitle title={"Serving"} switch={false} />
        <div className={styles.radiosContainer}>{servingVariant.map((variant) => {
        return<InputRadio key = {variant} name = {variant} />
        })}</div>
        
      </FormRow>

      <FormRow>
        <FormRowTitle title={"topping"} switch={false} />
        <div className={styles.checkboxesContainer}>
          <InputCheckboxWithLabel name={"SESAME"} />
        </div>
      </FormRow>
    </>
  );
};

export default FormExtras;
