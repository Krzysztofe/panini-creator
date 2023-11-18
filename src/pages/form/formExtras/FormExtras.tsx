import React from 'react';
import { eggVariants } from '../../../data/egg';
import InputSelect from '../../../components/inputs/inputSelect/InputSelect';

const FormExtras = () => {
    return (
      <div>
        <InputSelect variants={eggVariants} />
      </div>
    );
};

export default FormExtras;