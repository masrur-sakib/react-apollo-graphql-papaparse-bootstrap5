import React, { createContext, useState } from 'react';
import "./MultiStepForm.css";
import Results from './Results/Results';
import StepOne from './Steps/StepOne/StepOne';
import StepThree from './Steps/StepThree/StepThree';
import StepTwo from './Steps/StepTwo/StepTwo';

export const formContext = createContext();

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [inputData, setInputData] = useState([]);
    const [submittedData, setSubmittedData] = useState([]);
    const [emailExists, setEmailExists] = useState(false);
    // const [, setEmailExists] = useState(false);
    let csvValues = [];

    const showStep = (step) => {
        switch (step) {
            case 1:
                return <StepOne></StepOne>
            case 2:
                return <StepTwo></StepTwo>
            case 3:
                return <StepThree></StepThree>
            default:
                return <StepOne></StepOne>
        };
    };

    const StepOneHandler = async (event) => {
        event.preventDefault();
        setEmailExists(false);

        const inputFirstName = document.getElementById("firstName").value;
        const inputEmail = document.getElementById("email").value;
        const inputDescription = document.getElementById("description").value;
        const emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(submittedData.length > 0){
            for (let i = 0; i < submittedData.length; i++) {
                if (submittedData[i].email === inputEmail) {
                    setEmailExists(true);
                };
            };
        };

        if(!inputFirstName || !inputDescription ){
            document.getElementById("alert-error-stepOne").innerHTML = "Please fill out all the fields."
        }else if(!emailValidation.test(inputEmail)){
            document.getElementById("alert-error-stepOne").innerHTML = "Please type email correctly.";
        }else if(emailExists){
            document.getElementById("alert-error-stepOne").innerHTML = "Email Already Exists.";
        }else if (!emailExists && emailValidation.test(inputEmail) && inputFirstName && inputDescription ){
            setStep(2);
        };
    };

    const StepTwoHandler = (event) => {
        event.preventDefault();

        // if(!inputData.max_x, !inputData.min_x, !inputData.max_y, !inputData.min_x, !inputData.max_z, !inputData.min_z){
        //     inputData.max_x = csvValues[0];
        //     inputData.min_x = csvValues[1];
        //     inputData.max_y = csvValues[2];
        //     inputData.min_y = csvValues[3];
        //     inputData.max_z = csvValues[4];
        //     inputData.min_z = csvValues[5];
        // }

        //Input Validation
        const inputFirstName = document.getElementById("firstName").value;
        const inputEmail = document.getElementById("email").value;
        const inputDescription = document.getElementById("description").value;
        const inputMax_x = document.getElementById("max_x").value;
        const inputMin_x = document.getElementById("min_x").value;
        const inputMax_y = document.getElementById("max_y").value;
        const inputMin_y = document.getElementById("min_y").value;
        const inputMax_z = document.getElementById("max_z").value;
        const inputMin_z = document.getElementById("min_z").value;
        const emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if(submittedData.length > 0){
            for (let i = 0; i < submittedData.length; i++) {
                if (submittedData[i].email === inputEmail) {
                    setEmailExists(true);
                };
            };
        };

        if(emailExists){
            document.getElementById("alert-error").innerHTML = "Email Already Exists.";
        }
        else if(!emailValidation.test(inputEmail)){
            document.getElementById("alert-error").innerHTML = "Please type email correctly.";
        }
        else if(!inputFirstName || !inputDescription || !inputMax_x || !inputMin_x || !inputMax_y || !inputMin_y || !inputMax_z || !inputMin_z){
            document.getElementById("alert-error").innerHTML = "Please fill out all the fields.";
        }
        else if (!emailExists && emailValidation.test(inputEmail) && inputFirstName && inputDescription && inputMax_x && inputMin_x && inputMax_y && inputMin_y && inputMax_z && inputMin_z ){
            setSubmittedData([...submittedData, inputData]);
            setInputData("");
            setStep(3);
        };
    };
    return (
        <formContext.Provider value={{ step, setStep, inputData, setInputData, submittedData, setSubmittedData, StepTwoHandler, StepOneHandler, csvValues }}>
            <div className="multi-step-form-page">
                <nav className="navbar navbar-light text-light multi-step-form-header">
                    <div className="container-fluid multi-step-form-page-title">
                        <a className="navbar-brand" href="/multi-step-form">
                            <h5>Multi Step Form</h5>
                        </a>
                    </div>
                </nav>
                <div className="multi-step-form-body">
                    <div className="form-page-left">
                        <div className="multi-step-form">
                            {showStep(step)}
                        </div>
                    </div>
                    <div className="pr-4 form-page-right">
                        {submittedData.length > 0 
                        ? <div>
                            <h5 className="mt-5 text-info">Results Table</h5>
                            <Results></Results>    
                        </div>
                        
                        : ""}
                    </div>
                </div>
            </div>
        </formContext.Provider>
    );
};

export default MultiStepForm;