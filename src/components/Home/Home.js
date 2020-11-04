import React from 'react';
import "./Home.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div>
            <div className="container tasks">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-light mb-3 task-body" style={{ maxWidth: "18rem" }}>
                            <div className="card-header text-center"><b>Task One</b></div>
                            <div className="card-header text-center">Card / Template Design </div>
                            <div className="card-body d-flex justify-content-center">
                                <button className="btn btn-info">
                                    <a href="/property-collections" target="_blank">Task One Solution</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-light mb-3 task-body" style={{ maxWidth: "18rem" }}>
                            <div className="card-header text-center"><b>Task Two</b></div>
                            <div className="card-header text-center">To Do</div>
                            <div className="card-body d-flex justify-content-center">
                                <button className="btn btn-info">
                                    <a href="/toDo" target="_blank">Task Two Solution</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-light mb-3 task-body" style={{ maxWidth: "18rem" }}>
                            <div className="card-header text-center"><b>Task Three</b></div>
                            <div className="card-header text-center">Multi Step Form</div>
                            <div className="card-body d-flex justify-content-center">
                                <button className="btn btn-info">
                                    <a href="/multi-step-form" target="_blank">Task Three Solution</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-light mb-3 task-body" style={{ maxWidth: "18rem" }}>
                            <div className="card-header text-center"><b>Bonus Task</b></div>
                            <div className="card-header text-center">React Apollo Hook (GraphQL)</div>
                            <div className="card-body d-flex justify-content-center">
                                <button className="btn btn-info">
                                    <a href="/apollo-graphql" target="_blank">Bonus Task Solution</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;