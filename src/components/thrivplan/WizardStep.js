import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ThrivPlanControl from './ThrivPlanControl';

const WizardStep = ({previousStep, nextStep, currentStep, totalSteps, excerpt, options, label, ...rest}) => {

  const initialValues = {
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    checkboxOption: Yup.array().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

  return (
    <Card style={{ width: '50rem', margin: '0 auto' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div>
              {excerpt}
              <Form className='px-2'>
                <ThrivPlanControl
                  control='checkbox'
                  label={label}
                  name='checkboxOption'
                  options={options}
                />
                {
                  currentStep !== 1 
                  ? <Button className='my-2' onClick={previousStep}>Previous Step</Button>
                  : <></>
                }
                {
                  currentStep !== totalSteps 
                  ? <Button className='mx-2' onClick={nextStep} type='submit'>Next Step</Button>
                  : <Button className='mx-2' onClick={nextStep} type='submit'>Finish</Button>
                }
              </Form>
            </div>
          )}
        </Formik>
    </Card>
  );
};

export default WizardStep;