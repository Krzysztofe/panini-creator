import { breadVariants } from "../../../data/bread";
import { cheeseVariants } from "../../../data/cheese";
import { dressingVariants } from "../../../data/dressing";
import { meatVariants } from "../../../data/meat";
import { vegetableVariant } from "../../../data/vegetable";

export const dataBaseInputs = [
  {
    value: "bread",
    isSwitch: false,
    variants: breadVariants,
    inputType: "select",
  },
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
