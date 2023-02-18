import React, { useState } from 'react';

function TopStepper() {
    const [fullName, setFullName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
  
    const handleFullNameChange = (event) => {
      setFullName(event.target.value);
      setFormValid(validateForm(event.target.name, event.target.value, displayName));
    }
  
    const handleDisplayNameChange = (event) => {
      setDisplayName(event.target.value);
      setFormValid(validateForm(event.target.name, event.target.value, fullName));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Call API to create workspace
      console.log('Creating workspace:', fullName, displayName);
    }
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    const validateForm = (fieldName, fieldValue, otherFieldValue) => {
      if (fieldName === 'fullName' && fieldValue.trim() === '') {
        return false;
      }
      if (fieldName === 'displayName' && fieldValue.trim() === '') {
        return false;
      }
      if (otherFieldValue.trim() === '') {
        return false;
      }
      return true;
    }
  
    return (
      <>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Step 1</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 2</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 3</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 4</StepLabel>
          </Step>
        </Stepper>
        <WorkspaceForm
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          fullName={fullName}
          handleFullNameChange={handleFullNameChange}
          displayName={displayName}
          handleDisplayNameChange={handleDisplayNameChange}
          formValid={formValid}
        />
      </>
    );
  }
  
  export default TopStepper;