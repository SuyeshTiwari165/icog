import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Container } from "@mui/system";
import styles from "./WorkspaceFormStepper.module.css";
// import { Button } from "../../components/Button/Button";

// import logo from "../../../logo192.png";
function WorkspaceForm({
  activeStep,
  handleNext,
  handleBack,
  handleSubmit,
  fullName,
  handleFullNameChange,
  displayName,
  handleDisplayNameChange,
  formValid,
}) {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {activeStep === 0 && (
        <>
          <h1>Welcome! First things first...</h1>
          <h3>You can always change them later.</h3>
          <label>
            Full Name<br></br>
            <TextField
              id="fullName"
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
          <br />
          <label>
            Display Name<br></br>
            <TextField
              id="outlined-basic"
              label="Display Name"
              variant="outlined"
              name="displayName"
              value={displayName}
              onChange={handleDisplayNameChange}
            />
          </label>
          <br />
          <Button
            className={styles.Button}
            type="submit"
            onClick={handleNext}
            disabled={!formValid}
          >
            Create Workspace
          </Button>
        </>
      )}

      {activeStep === 1 && (
        <>
          <h1>Let's set up a home for all your work</h1>
          <h3>You can always create another workspace later.</h3>
          <label>
            Workspace Name
            <TextField
              id="fullName"
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
          <br />
          <label>
            Workspace URL optional
            <TextField
              id="fullName"
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
          <br />
          <Button
            className={styles.Button}
            type="submit"
            onClick={handleNext}
            disabled={!formValid}
          >
            Create Workspace
          </Button>
        </>
      )}
      {activeStep === 2 && (
        <>
          <h1>How are you planning to use Eden?</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              We'll streamline your setup experience accordingly.
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <div className={styles.checkboxOptions}>
                <FormControlLabel
                  value="For myself"
                  control={<Radio />}
                  label="For myself"
                />
                <span>Write better. Think more clearly. Stay organized</span>
              </div>
              <div className={styles.checkboxOptions}>
                <FormControlLabel
                  value="With my team"
                  control={<Radio />}
                  label="With my team"
                />
                <span>Wikis, docs, tasks and projects, all in one place.</span>
              </div>
            </RadioGroup>
          </FormControl>
          <br />
          <Button
            className={styles.Button}
            type="submit"
            onClick={handleNext}
            disabled={!formValid}
          >
            Create Workspace
          </Button>
        </>
      )}
      {activeStep === 3 && (
        <>
          <h1>Congratulations,Eren!</h1>
          <h3>You have completed onboarding, you can start using Eden!.</h3>

          <br />
          <Button className={styles.Button} type="submit" disabled={!formValid}>
            Launch Eden
          </Button>
        </>
      )}
    </form>
  );
}

function WorkspaceFormStepper() {
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    setFormValid(
      validateForm(event.target.name, event.target.value, displayName)
    );
  };

  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
    setFormValid(validateForm(event.target.name, event.target.value, fullName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to create workspace
    console.log("Creating workspace:", fullName, displayName);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const validateForm = (fieldName, fieldValue, otherFieldValue) => {
    if (fieldName === "fullName" && fieldValue.trim() === "") {
      return false;
    }
    if (fieldName === "displayName" && fieldValue.trim() === "") {
      return false;
    }
    if (otherFieldValue.trim() === "") {
      return false;
    }
    return true;
  };

  return (
    <>
      <Container>
        <img
          src={process.env.PUBLIC_URL + "/Images/logo.png"}
          alt="Eden icon"
          // onClick={getHome}
        />
        {/* <img src={logo} className="App-logo" alt="Eden" /> */}
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
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
      </Container>
    </>
  );
}

export default WorkspaceFormStepper;
