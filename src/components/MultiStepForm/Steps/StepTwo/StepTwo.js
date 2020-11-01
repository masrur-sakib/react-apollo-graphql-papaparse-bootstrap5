import React, { useContext } from 'react';
import { formContext } from '../../MultiStepForm';
import "./StepTwo.css";

const StepTwo = () => {
    const {setStep, inputData, setInputData, submitHandler} = useContext(formContext);

    return (
        <div>
            <h5 className="mb-4 text-center text-info">Step Two</h5>
            <form className="row">
                {/* Step One Inputs */}
                <div className="col-md-12 mb-3">
                    <input type="text" className="form-control" 
                    value={inputData["firstName"] || ""} 
                    placeholder="First name" id="firstName" aria-label="First name" readOnly></input>
                </div>
                <div className="col-md-12 mb-3">
                    <input type="email" className="form-control" 
                    value={inputData["email"] || ""} 
                    id="email" placeholder="Email" aria-label="Email" readOnly></input>
                </div>
                <div className="col-md-12 mb-3">
                    <textarea className="form-control" 
                    value={inputData["description"] || ""} 
                    id="description" rows="2" placeholder="Description" aria-label="Description" readOnly></textarea>
                </div>

                {/* Step Two Inputs */}
                <div className="col-md-6 ml-3 mb-3 form-file">
                    <input type="file" className="form-control form-file-input" id="customFile"></input>
                    <label className="form-file-label" htmlFor="customFile">
                        <span className="form-file-text">File</span>
                        <span className="form-file-button">Browse File</span>
                    </label>
                </div>
                <div className="col-md-5 mb-3 d-flex justify-content-center">
                    <button className="btn btn-primary">Read Values</button>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" 
                    value={inputData["max_x"] || ""} 
                    onChange={(e) => setInputData({...inputData, "max_x": e.target.value})}
                    placeholder="Max X" id="Max_X" aria-label="Max X"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" 
                    value={inputData["min_x"] || ""} 
                    onChange={(e) => setInputData({...inputData, "min_x": e.target.value})}
                    placeholder="Min X" id="Min_X" aria-label="Min X"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" 
                    value={inputData["max_y"] || ""} 
                    onChange={(e) => setInputData({...inputData, "max_y": e.target.value})}
                    placeholder="Max Y" id="Max_Y" aria-label="Max Y"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" 
                    value={inputData["min_y"] || ""} 
                    onChange={(e) => setInputData({...inputData, "min_y": e.target.value})}
                    placeholder="Min Y" id="Min_Y" aria-label="Min Y"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" 
                    value={inputData["max_z"] || ""} 
                    onChange={(e) => setInputData({...inputData, "max_z": e.target.value})}
                    placeholder="Max Z" id="Max_Z" aria-label="Max Z"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control" 
                    value={inputData["min_z"] || ""} 
                    onChange={(e) => setInputData({...inputData, "min_z": e.target.value})}
                    placeholder="Min Z" id="Min_Z" aria-label="Min Z"></input>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary mr-2" onClick={() => setStep(1)}>&larr; Previous</button>
                    <span></span>
                    <button className="btn btn-success" onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default StepTwo;