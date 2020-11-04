import React, { useContext } from 'react';
import { formContext } from '../../MultiStepForm';
import "./StepTwo.css";
// Papaparse Codes - To Parse CSV File
import { CSVReader } from 'react-papaparse';
const buttonRef = React.createRef();

const StepTwo = () => {
    const { setStep, inputData, setInputData, StepTwoHandler } = useContext(formContext);

    // Papaparse Codes- To Parse CSV File
    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }
    const handleOnFileLoad = (data) => {
        let arrayX = [];
        for (let i = 1; i < (data.length-1); i++) {
            let newElement = parseFloat(data[i].data[1]);
            arrayX.push(newElement);

            if (i === (data.length - 2)) {
                const biggestX = Math.max(...arrayX);
                document.getElementById("max_x").value = biggestX;
                const smallestX = Math.min(...arrayX);
                document.getElementById("min_x").value = smallestX;
            };
        };
        
        let arrayY = [];
        for (let i = 1; i < (data.length-1); i++) {
            let newElement = parseFloat(data[i].data[2]);
            arrayY.push(newElement);

            if (i === (data.length - 2)) {
                const biggestY = Math.max(...arrayY);
                document.getElementById("max_y").value = biggestY;
                const smallestY = Math.min(...arrayY);
                document.getElementById("min_y").value = smallestY;
            };
        };

        let arrayZ = [];
        for (let i = 1; i < (data.length-1); i++) {
            let newElement = parseFloat(data[i].data[3]);
            arrayZ.push(newElement);

            if (i === (data.length - 2)) {
                const biggestZ = Math.max(...arrayZ);
                document.getElementById("max_z").value = biggestZ;
                const smallestZ = Math.min(...arrayZ);
                document.getElementById("min_z").value = smallestZ;
            };
        };
    }
    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }
    const handleOnRemoveFile = (data) => {
        console.log(data)
    }
    const handleRemoveFile = (e) => {
        e.preventDefault();
        if (buttonRef.current) {
            buttonRef.current.removeFile(e)
        }
    }

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
                <CSVReader
                    ref={buttonRef}
                    onFileLoad={handleOnFileLoad}
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                >
                    {() => (
                        <div className="d-flex justify-content-center">
                            <button className="mb-3 btn btn-secondary mr-2" type='button' onClick={handleOpenDialog}>
                                Browse CSV File
                            </button>
                            <span></span>
                            <button className="mb-3 btn btn-danger" onClick={handleRemoveFile} > Remove CSV File </button>
                        </div>
                    )}
                </CSVReader>

                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control"
                        value={inputData["max_x"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "max_x": e.target.value })}
                        placeholder="Max X" id="max_x" aria-label="Max X"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control"
                        value={inputData["min_x"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "min_x": e.target.value })}
                        placeholder="Min X" id="min_x" aria-label="Min X"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control"
                        value={inputData["max_y"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "max_y": e.target.value })}
                        placeholder="Max Y" id="max_y" aria-label="Max Y"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control"
                        value={inputData["min_y"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "min_y": e.target.value })}
                        placeholder="Min Y" id="min_y" aria-label="Min Y"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control"
                        value={inputData["max_z"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "max_z": e.target.value })}
                        placeholder="Max Z" id="max_z" aria-label="Max Z"></input>
                </div>
                <div className="col-md-6 mb-3">
                    <input type="number" className="form-control"
                        value={inputData["min_z"] || ""}
                        onChange={(e) => setInputData({ ...inputData, "min_z": e.target.value })}
                        placeholder="Min Z" id="min_z" aria-label="Min Z"></input>
                </div>
                <p className="text-danger text-center" id="alert-error"></p>
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