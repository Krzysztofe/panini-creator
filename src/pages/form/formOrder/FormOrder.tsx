import React from "react";
import InputRadio from "../../../components/inputs/inputradio/InputRadio";
import FormRow from "../formRow/FormRow";
import FormRowTitle from "../formRowTitle/FormRowTitle";
import FormRowInputs from "../formRowInputs/FormRowInputs";
import { ContextForm } from "../../../context/ContextFormProv";
import styles from "./FormOrder.module.css";
import InputCheckboxWithLabel from "../../../components/inputs/inputCheckboxWithLabel/InputCheckboxWithLabel";
import InputText from "../../../components/inputs/inputText/InputText";
import FormSubmitButtons from "../formSubmitButtons/FormSubmitButtons";

const FormOrder = () => {
  return (
    <>
      <FormRow>
        <FormRowTitle title={"name-panini"} switch={false} />
        <FormRowInputs>
          <InputText />
        </FormRowInputs>
      </FormRow>

      {[
        { title: "cutlery", variant: "add to order" },
        { title: "napkins", variant: "add to order" },
      ].map(({ title, variant }) => {
        return (
          <FormRow key = {title}>
            <FormRowTitle title={title} switch={false} />
            <FormRowInputs>
              <div className={styles.radiosContainer}>
                <InputCheckboxWithLabel name={variant} />
              </div>
            </FormRowInputs>
          </FormRow>
        );
      })}
    
        <FormSubmitButtons />
      
    </>
  );
};

export default FormOrder;
