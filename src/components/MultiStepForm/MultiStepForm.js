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

    const showStep = (step) => {
        switch(step){
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

    const submitHandler = () => {
        setSubmittedData([...submittedData, inputData]);
        setInputData("");
        setStep(1);
    };
    return (
        <formContext.Provider value={{step, setStep, inputData, setInputData, submittedData, setSubmittedData, submitHandler}}>
            <div className="multi-step-form-page">
                <nav className="navbar navbar-light text-light multi-step-form-header">
                    <div className="container-fluid site-title">
                        <a className="navbar-brand" href="/multi-step-form">
                            <h5>Multi Step Form</h5>
                        </a>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-sm-4 form-page-left">
                        <div className="multi-step-form">
                            {showStep(step)}
                        </div>
                    </div>
                    <div className="col-sm-8 pl-4 pr-4 form-page-right">
                        <h5 className="mt-5 text-info">Results Table</h5>
                        {submittedData.length>0 ? <Results></Results> : ""}
                    </div>
                </div>

            </div>
        </formContext.Provider>
    );
};

export default MultiStepForm;