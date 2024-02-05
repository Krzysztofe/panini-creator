import InputCheckboxWithLabel from "../../../components/inputs/inputCheckboxWithLabel/InputCheckboxWithLabel";
import InputText from "../../../components/inputs/inputText/InputText";
import FormRow from "../formRow/FormRow";
import FormRowInputs from "../formRowInputs/FormRowInputs";
import FormRowTitle from "../formRowTitle/FormRowTitle";
import FormSubmitButtons from "../formSubmitButtons/FormSubmitButtons";
import styles from "./FormOrder.module.css";

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
