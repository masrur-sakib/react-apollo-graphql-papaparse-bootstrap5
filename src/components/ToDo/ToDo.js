import React, { useState } from 'react';
import "./ToDo.css";
// Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ToDo = () => {

    const [inputToDo, setInputToDo] = useState([]);
    const [toDo, setToDo] = useState([{"toDoName": "Develop Skills"}, {toDoName: "Finish Tasks"}, {"toDoName": "Attend Meeting"}]);

    const toDoHandler = (event) => {
        event.preventDefault();
        setToDo([...toDo, inputToDo]);
        document.getElementById("input-todo").value = "";
        setInputToDo("");
    }
    return (
        <div className="to-do-page">
            <div className="to-do-body">
                <div className="row form-header">
                    <div className="col-md-4">
                        <h3 className="text-info">Tasks</h3>
                    </div>
                    <div className="col-md-8">
                        <div className="mt-1 d-flex justify-content-end">
                            <span>Sort by:</span>
                            <select className="sort-by-dropdown">
                                <option value="due-date">Due Date</option>
                                <option value="name">Name</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-body">
                    <form className="row g-3 mt-4 form-todo ">
                        <div className="col-auto">
                            <input className="input-todo" type="text" 
                                id="input-todo"
                                value={inputToDo["toDoName"] || ""}
                                onChange={(e) => setInputToDo({"toDoName": e.target.value })}
                                placeholder="Add New Task"></input>
                        </div>
                        <div className="col-auto">
                            <button className="btn-submit-todo"  
                            onClick={toDoHandler}>
                                <FontAwesomeIcon icon={faPlus} className="icon-submit" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="to-do-list">
                    {
                        toDo.map((list, index) => (
                        <div key={index} id={list.toDoName} className="to-do-item">
                            <div className="row">
                                <div className="col-7">
                                    <input className="checkbox-to-do-item" type="checkbox"></input>
                                    <span className="ml-3 to-do-item-name">{list.toDoName}</span>
                                </div>
                                <div className="col-4">
                                    <h5>10.10.2020</h5>    
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faStar} className="icon-submit" />
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;