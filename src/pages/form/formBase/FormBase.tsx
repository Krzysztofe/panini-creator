import React from 'react';
import InputSelect from '../../../components/inputs/inputSelect/InputSelect';
import { cheeseVariants } from '../../../data/cheese';
import InputCheckbox from '../../../components/inputs/inputCheckbox/InputCheckbox';
import { vegetableVariant } from '../../../data/vegetable';
import InputSlider from '../../../components/inputs/inputSlider/InputSlider';
import { breadVariants } from '../../../data/bread';
import { dressingVariants } from '../../../data/dressing';
import { icons } from '../../../data/icons';
const FormBase = () => {
    return (
      <div>
        <InputSlider variants={breadVariants}icons = {icons}/>
        <InputSelect variants={cheeseVariants} />
        <InputSlider variants={dressingVariants} />
        <div>
          {vegetableVariant.map(vegetable => {
            return <InputCheckbox key={vegetable} value={vegetable} />;
          })}
        </div>
      </div>
    );
};

export default FormBase;