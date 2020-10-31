import React from 'react';
import "./Home.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div>
            <div className="container tasks">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Task One</div>
                            <div className="card-body">
                                <h5 className="card-title">Card Design</h5>
                                <button type="button" className="btn btn-outline-primary"><a href="/card-design" target="_blank">Card Design</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Task One</div>
                            <div className="card-body">
                                <h5 className="card-title">To Do</h5>
                                <button type="button" className="btn btn-outline-primary"><a href="/toDo" target="_blank">To Do</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Task Two</div>
                            <div className="card-body">
                                <h5 className="card-title">Multi Step Form</h5>
                                <button type="button" className="btn btn-outline-primary"><a href="/multi-step-form" target="_blank">Multi Step Form</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;