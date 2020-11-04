import React, { useContext } from 'react';
import { formContext } from '../../MultiStepForm';
import "./StepThree.css";

const StepThree = () => {
    const {setStep} = useContext(formContext);
    return (
        <div>
            <h5 className="text-success text-center">Your Information has been submitted successfully.</h5>
            <div className="mt-4 d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={() => setStep(1)}>&larr; Back to the Form</button>
            </div>
        </div>
    );
};

export default StepThree;