import FormBase from "../formBase/FormBase";
import FormExtras from "../formExtras/FormExtras";
import FormHeader from "../formHeader.tsx/FormHeader";
import FormOrder from "../formOrder/FormOrder";
import FormSection from "../formSection/FormSection";
import styles from "./IndexForm.module.css";

const IndexForm = () => {
  return (
    <>
      <FormHeader />
      <form className={` ${styles.form}`}>
        <div className="wrapper">
          <FormSection heading="CONFIGURE BASE">
            <FormBase />
          </FormSection>
          <FormSection heading="CONFIGURE EXTRAS">
            <FormExtras />
          </FormSection>
          <FormSection heading="FINALIZE ORDER">
            <FormOrder />
          </FormSection>
        </div>
      </form>
    </>
  );
};

export default IndexForm;
