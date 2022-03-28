import CheckboxGroup from "./CheckboxGroup";

type Props = {
  control: string;
  label: string;
  name: string;
  options: Array<{ key: string; value: string }>;
};

function ThrivPlanControl({ control, ...rest }: Props) {
  switch (control) {
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    default:
      return null;
  }
}

export default ThrivPlanControl;
