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
    { value: "bread", isSwitch: false, variants: breadVariants },
    {
      value: "chease",
      isSwitch: true,
      variants: cheeseVariants,
      inputType: "select",
    },
    {
      value: "meat",
      isSwitch: true,
      variants: meatVariants,
      inputType: "select",
    },
    {
      value: "dressing",
      isSwitch: true,
      variants: dressingVariants,
      inputType: "slider",
    },
    {
      value: "vegetable",
      isSwitch: false,
      variants: vegetableVariant,
      inputType: "checkbox",
    },
  ];

  return (
    <>
      {dataFormRows.map(({ value,isSwitch, variants, inputType }) => {
        return (
          <FormRow>
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
                      {inputType === "select" ? (
                        <InputSelect variants={variants} />
                      ) : (
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
