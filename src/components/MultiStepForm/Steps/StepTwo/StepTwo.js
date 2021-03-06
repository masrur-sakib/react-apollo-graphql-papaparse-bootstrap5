import React, { useContext } from 'react';
import { formContext } from '../../MultiStepForm';
import "./StepTwo.css";
// Papaparse Codes - To Parse CSV File
import { CSVReader } from 'react-papaparse';
const buttonRef = React.createRef();

const StepTwo = () => {
    const { setStep, inputData, setInputData, StepTwoHandler, csvValues } = useContext(formContext);
    
    // Papaparse Codes- To Parse CSV File
    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }
    // Function to auto insert input values when file uploaded
    const handleOnFileLoad = (data) => {
        // Function to find out maximum and minimum value of X and insert the values
        let arrayX = [];
        for (let i = 1; i < (data.length-1); i++) {
            let newElement = parseFloat(data[i].data[1]);
            arrayX.push(newElement);

            if (i === (data.length - 2)) {
                const biggestX = Math.max(...arrayX);
                document.getElementById("max_x").value = biggestX;
                csvValues.push(biggestX);

                const smallestX = Math.min(...arrayX);
                document.getElementById("min_x").value = smallestX;
                csvValues.push(smallestX);
            };
        };
        
        // Function to find out maximum and minimum value of Y and insert the values
        let arrayY = [];
        for (let i = 1; i < (data.length-1); i++) {
            let newElement = parseFloat(data[i].data[2]);
            arrayY.push(newElement);

            if (i === (data.length - 2)) {
                const biggestY = Math.max(...arrayY);
                document.getElementById("max_y").value = biggestY;
                csvValues.push(biggestY);

                const smallestY = Math.min(...arrayY);
                document.getElementById("min_y").value = smallestY;
                csvValues.push(smallestY);
            };
        };

        // Function to find out maximum and minimum value of Z and insert the values
        let arrayZ = [];
        for (let i = 1; i < (data.length-1); i++) {
            let newElement = parseFloat(data[i].data[3]);
            arrayZ.push(newElement);

            if (i === (data.length - 2)) {
                const biggestZ = Math.max(...arrayZ);
                document.getElementById("max_z").value = biggestZ;
                csvValues.push(biggestZ);

                const smallestZ = Math.min(...arrayZ);
                document.getElementById("min_z").value = smallestZ;
                csvValues.push(smallestZ);
            };
        };
        
        // If extracted values from csv file are not being submitted to the state then this function will work 
        if(!inputData.max_x && !inputData.min_x && !inputData.max_y && !inputData.min_x && !inputData.max_z && !inputData.min_z){
            inputData.max_x = csvValues[0];
            inputData.min_x = csvValues[1];
            inputData.max_y = csvValues[2];
            inputData.min_y = csvValues[3];
            inputData.max_z = csvValues[4];
            inputData.min_z = csvValues[5];
        }
    }

    // Function error message 
    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    return (
        <div>
            <h5 className="mb-4 text-center text-info">Step Two</h5>
            {/* Step Two Form */}
            <form className="row">
                {/* Inputs from Step One */}
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
                <CSVReader
                    ref={buttonRef}
                    onFileLoad={handleOnFileLoad}
                    onError={handleOnError}
                    noClick
                    noDrag
                >
                    {() => (
                        <div className="d-flex justify-content-center">
                            <button className="mb-3 btn btn-secondary mr-2" type='button' onClick={handleOpenDialog}>
                                Browse CSV File
                            </button>
                        </div>
                    )}
                </CSVReader>

                <div className="col-md-6 mb-3">
                    <input type="number" step="any" className="form-control"
                        value={inputData["max_x"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "max_x": e.target.value })}
                        placeholder="Max X" id="max_x" aria-label="Max X" required></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" step="any" className="form-control"
                        value={inputData["min_x"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "min_x": e.target.value })}
                        placeholder="Min X" id="min_x" aria-label="Min X" required></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" step="any" className="form-control"
                        value={inputData["max_y"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "max_y": e.target.value })}
                        placeholder="Max Y" id="max_y" aria-label="Max Y" required></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" step="any" className="form-control"
                        value={inputData["min_y"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "min_y": e.target.value })}
                        placeholder="Min Y" id="min_y" aria-label="Min Y" required></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" step="any" className="form-control"
                        value={inputData["max_z"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "max_z": e.target.value })}
                        placeholder="Max Z" id="max_z" aria-label="Max Z" required></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" step="any" className="form-control"
                        value={inputData["min_z"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "min_z": e.target.value })}
                        placeholder="Min Z" id="min_z" aria-label="Min Z" required></input>
                </div>
                {/* Input Validation Error Alert */}
                <p className="text-danger text-center" id="alert-error"></p>
                {/* Step Two Previous & Next Button  */}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary mr-2" onClick={() => setStep(1)}>&larr; Previous</button>
                    <span></span>
                    <button type="submit" className="btn btn-success btn-step-two" onClick={StepTwoHandler}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default StepTwo;