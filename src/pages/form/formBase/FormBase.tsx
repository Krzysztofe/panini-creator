import React, { useContext } from "react";
import InputCheckbox from "../../../components/inputs/inputCheckbox/InputCheckbox";
import InputSelect from "../../../components/inputs/inputSelect/InputSelect";
import InputSlider from "../../../components/inputs/inputSlider/InputSlider";
import { ContextForm } from "../../../context/ContextFormProv";
import { iconsBread } from "../../../data/iconsBread";
import { vegetableVariant } from "../../../data/vegetable";
import AddButton from "../addButton/AddButton";
import FormRow from "../formRow/FormRow";
import FormRowInputs from "../formRowInputs/FormRowInputs";
import FormRowTitle from "../formRowTitle/FormRowTitle";
import styles from "./FormBase.module.css";
import { dataBaseInputs } from "./dataFormBase";

const FormBase = () => {
  const { isInputPrint, newInputs } = useContext(ContextForm);

  return (
    <>
      {dataBaseInputs.map(({ value, isSwitch, variants, inputType }) => {
        return (
          <FormRow key={value}>
            <FormRowTitle title={value} switch={isSwitch} />

            <FormRowInputs>
              {value === "bread" && (
                <InputSlider variants={variants} icons={iconsBread} />
              )}

              {isInputPrint[value as keyof typeof isInputPrint] && (
                <>
                  <ul className={styles.inpitsContainer}>
                    <li className={styles.topInputContainer}>
                      <AddButton
                        name={value}
                        variants={variants}
                        inputType={inputType}
                      />
                      {inputType === "select" && (
                        <InputSelect variants={variants} />
                      )}
                      {inputType === "slider" && (
                        <InputSlider variants={variants} />
                      )}
                    </li>

                    {newInputs[value as keyof typeof newInputs].map(
                      (newInput, idx) => {
                        return (
                          <React.Fragment key={idx}>{newInput}</React.Fragment>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
              {value === "vegetable" && (
                <div className={styles.checkboxContainer}>
                  {vegetableVariant.map(vegetable => {
                    return <InputCheckbox key={vegetable} value={vegetable} />;
                  })}
                </div>
              )}
            </FormRowInputs>
          </FormRow>
        );
      })}
    </>
  );
};

export default FormBase;
