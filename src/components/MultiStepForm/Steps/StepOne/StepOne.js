import React, { useContext } from 'react';
import { formContext } from '../../MultiStepForm';
import "./StepOne.css";

const StepOne = () => {
    const {setStep, inputData, setInputData} = useContext(formContext);
    return (
        <div>
            <h5 className="mb-4 text-center text-info">Step One</h5>
            <form className="row" data-toggle="validator">
                <div className="col-md-12 mb-3">
                    <input type="text" className="form-control" 
                    value={inputData["firstName"] || ""} 
                    onChange={(e) => setInputData({...inputData, "firstName": e.target.value})}
                    id="firstName" placeholder="First name"></input>
                </div>
                <div className="col-md-12 mb-3">
                    <input type="email" className="form-control"
                    value={inputData["email"] || ""} 
                    onChange={(e) => setInputData({...inputData, "email": e.target.value})}
                    id="email" placeholder="Email"></input>
                </div>
                <div className="col-md-12 mb-3">
                    <textarea className="form-control" 
                    value={inputData["description"] || ""} 
                    onChange={(e) => setInputData({...inputData, "description": e.target.value})}
                    id="description" rows="2" placeholder="Description"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" 
                    onClick={() => setStep(2)}>Next &rarr;</button>
                </div>                
            </form>
        </div>
    );
};

export default StepOne;