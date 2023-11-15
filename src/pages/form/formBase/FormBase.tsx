import React from 'react';
import InputSelect from '../../../components/inputs/inputSelect/InputSelect';
import { cheeseVariants } from '../../../data/cheese';

const FormBase = () => {
    return (
      <div>
        <InputSelect variants = {cheeseVariants}/>
      </div>
    );
};

export default FormBase;