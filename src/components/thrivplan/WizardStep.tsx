import { Button, Card } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ThrivPlanControl from "./ThrivPlanControl";

// The first four props come from the react-step-wizard lib,
// but their typescript declarations are incorrect, so the first 4 lines are a work around..
type Props = {
  previousStep?: () => void;
  nextStep?: () => void;
  currentStep?: number;
  totalSteps?: number;
  excerpt: JSX.Element;
  label: string;
  options: Array<{ key: string; value: string; fillIn?: boolean }>;
};

const WizardStep = ({
  previousStep,
  nextStep,
  currentStep,
  totalSteps,
  excerpt,
  options,
  label,
}: Props) => {
  const initialValues = options;

  const validationSchema = Yup.object({
    checkboxOption: Yup.array().required("Required"),
  });

  const onSubmit = (
    values: Array<{ key: string; value: string; fillIn?: boolean }>
  ) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Card style={{ width: "50rem", margin: "0 auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div>
          {excerpt}
          <Form className="px-2">
            <ThrivPlanControl
              control="checkbox"
              label={label}
              name="checkboxOption"
              options={options}
            />
            {currentStep !== 1 ? (
              <Button className="my-2" onClick={previousStep}>
                Previous Step
              </Button>
            ) : (
              <></>
            )}
            {currentStep !== totalSteps ? (
              <Button className="mx-2" onClick={nextStep} type="submit">
                Next Step
              </Button>
            ) : (
              <Button className="mx-2" onClick={nextStep} type="submit">
                Finish
              </Button>
            )}
          </Form>
        </div>
      </Formik>
    </Card>
  );
};

export default WizardStep;
