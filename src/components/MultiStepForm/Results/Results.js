import React, { useContext } from 'react';
import { formContext } from '../MultiStepForm';
import "./Results.css";

const Results = () => {
    const { submittedData } = useContext(formContext);
    return (
        <div>
            <table className="table table-bordered">
                <thead className="thead-light bg-info">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Max X</th>
                        <th scope="col">Min X</th>
                        <th scope="col">Max Y</th>
                        <th scope="col">Min Y</th>
                        <th scope="col">Max Z</th>
                        <th scope="col">Min Z</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        submittedData.map((result) => (
                            <tr key={result.email}>
                                <td className="td-more-data">{result.firstName}</td>
                                <td className="td-more-data">{result.email}</td>
                                <td className="td-more-data">{result.description}</td>
                                <td>{result.max_x}</td>
                                <td>{result.min_x}</td>
                                <td>{result.max_y}</td>
                                <td>{result.min_y}</td>
                                <td>{result.max_z}</td>
                                <td>{result.min_z}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Results;