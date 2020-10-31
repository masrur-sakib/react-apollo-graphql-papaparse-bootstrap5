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
                            <div className="card-header">Task One =&gt; Card Design </div>
                            <div className="card-body">
                                <a href="/property-collections" target="_blank">Property Collections</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Task One =&gt; To DO</div>
                            <div className="card-body">
                                <a href="/toDo" target="_blank">To Do</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Task Two =&gt; Multi Step Form</div>
                            <div className="card-body">
                                <a href="/multi-step-form" target="_blank">Multi Step Form</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;