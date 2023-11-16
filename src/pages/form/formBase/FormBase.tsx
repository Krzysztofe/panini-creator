import React from "react";
import InputSelect from "../../../components/inputs/inputSelect/InputSelect";
import { cheeseVariants } from "../../../data/cheese";
import InputCheckbox from "../../../components/inputs/inputCheckbox/InputCheckbox";
import { vegetableVariant } from "../../../data/vegetable";
import InputSlider from "../../../components/inputs/inputSlider/InputSlider";
import { breadVariants } from "../../../data/bread";
import { dressingVariants } from "../../../data/dressing";
import { iconsBread } from "../../../data/iconsBread";
import { meatVariants } from "../../../data/meat";
import FormRow from "../formRow/FormRow";
import IconAddButton from "../../../img/iconAddButton/IconAddButton";
import FormRowControls from "../formRowControls/FormRowControls";
import IconSwitch from "../../../img/iconSwitch/IconSwitch";
import styles from "./FormBase.module.css";

const FormBase = () => {
  return (
    <div>
      <FormRow title={"BREAD"}>
        <InputSlider variants={breadVariants} icons={iconsBread} />
      </FormRow>
      <FormRow title={"CHEASE"}>
        <FormRowControls>
          <IconSwitch />
          <IconAddButton />
        </FormRowControls>
        <InputSelect variants={cheeseVariants} />
      </FormRow>
      <FormRow title={"MEAT"}>
        <FormRowControls>
          <IconSwitch />
          <IconAddButton />
        </FormRowControls>
        <InputSelect variants={meatVariants} />
      </FormRow>
      <FormRow title={"DRESSING"}>
        <FormRowControls>
          <IconSwitch />
          <IconAddButton />
        </FormRowControls>
        <InputSlider variants={dressingVariants} />
      </FormRow>

      <FormRow title={"VEGETABLES"} titleOnTop={true}>
        <div className={styles.checkboxContainer}>
          {vegetableVariant.map(vegetable => {
            return <InputCheckbox key={vegetable} value={vegetable} />;
          })}
        </div>
      </FormRow>
    </div>
  );
};

export default FormBase;
