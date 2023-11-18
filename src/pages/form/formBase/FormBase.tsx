import React, { useContext } from "react";
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
import AddButton from "../addButton/AddButton";

const FormBase = () => {
  const { isInputPrint, newInputs } = useContext(ContextForm);
  console.log("", newInputs);
  // console.log("", isInputPrint);

  const dataFormRows = [
    { value: "bread", variants: breadVariants },
    { value: "chease", variants: cheeseVariants },
    { value: "dressing", variants: dressingVariants },
  ];

  return (
    <> 
      {dataFormRows.map(({ value, variants }, idx) => {
        return (
          <FormRow>
            <FormRowTitle title={value}>
              {idx > 0 && idx < 4 && <IconSwitch name={value} />}
            </FormRowTitle>
            <FormRowInputs>
              {value === "bread" && (
                <InputSlider variants={variants} icons={iconsBread} />
              )}
               {value === "dressing" && (
                <InputSlider variants={variants} />
              )}
            </FormRowInputs>
          </FormRow>
        );
      })}
    </>
  );

  // return (
  //   <div>
  //     <FormRow>
  //       <FormRowTitle title={"bread"}></FormRowTitle>
  //       <FormRowInputs>
  //         <InputSlider variants={breadVariants} icons={iconsBread} />
  //       </FormRowInputs>
  //     </FormRow>

  //     <FormRow>
  //       <FormRowTitle title={"chease"}>
  //         <IconSwitch name="chease" />
  //       </FormRowTitle>

  //       <FormRowInputs>
  //         {isInputPrint.chease && (
  //           <>
  //             <ul className={styles.inpitsContainer}>
  //               <li className={styles.topInputContainer}>
  //                 <AddButton
  //                   name={"chease"}
  //                   variants={cheeseVariants}
  //                   inputType="select"
  //                 />
  //                 <InputSelect variants={cheeseVariants} />
  //               </li>

  //               {newInputs.chease.map((newInput, idx) => {
  //                 return <React.Fragment key={idx}>{newInput}</React.Fragment>;
  //               })}
  //             </ul>
  //           </>
  //         )}
  //       </FormRowInputs>
  //     </FormRow>

  //     <FormRow>
  //       <FormRowTitle title={"meat"}>
  //         <IconSwitch name="meat" />
  //       </FormRowTitle>
  //       <FormRowInputs>
  //         {isInputPrint.meat && (
  //           <>
  //             <div className={styles.inpitsContainer}>
  //               <div className={styles.topInputContainer}>
  //                 <AddButton
  //                   name={"meat"}
  //                   variants={meatVariants}
  //                   inputType="select"
  //                 />
  //                 <InputSelect variants={meatVariants} />
  //               </div>

  //               {newInputs.meat.map((newInput, idx) => {
  //                 return <React.Fragment key={idx}>{newInput}</React.Fragment>;
  //               })}
  //             </div>
  //           </>
  //         )}
  //       </FormRowInputs>
  //     </FormRow>

  //     <FormRow>
  //       <FormRowTitle title={"dressing"}>
  //         <IconSwitch name="dressing" />
  //       </FormRowTitle>
  //       <FormRowInputs>
  //         {isInputPrint.dressing && (
  //           <>
  //             <div className={styles.inpitsContainer}>
  //               <div className={styles.topInputContainer}>
  //                 <AddButton
  //                   name={"dressing"}
  //                   variants={dressingVariants}
  //                   inputType="slider"
  //                 />
  //                 <InputSlider variants={dressingVariants} />
  //               </div>

  //               {newInputs.dressing.map((newInput, idx) => {
  //                 return <React.Fragment key={idx}>{newInput}</React.Fragment>;
  //               })}
  //             </div>
  //           </>
  //         )}
  //       </FormRowInputs>
  //     </FormRow>

  //     <FormRow>
  //       <FormRowTitle title={"vegetables"}></FormRowTitle>
  //       <FormRowInputs>
  //         <div className={styles.checkboxContainer}>
  //           {vegetableVariant.map(vegetable => {
  //             return <InputCheckbox key={vegetable} value={vegetable} />;
  //           })}
  //         </div>
  //       </FormRowInputs>
  //     </FormRow>
  //   </div>
  // );
};

export default FormBase;
