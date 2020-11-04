import React from 'react';
import "./ApolloGraphql.css";

const ApolloGraphql = () => {
    return (
        <div className="apollo-graphql-task-page">
            <nav className="navbar navbar-light text-light apollo-graphql-page-header">
                <div className="container-fluid apollo-graphql-page-title">
                    <a className="navbar-brand" href="/apollo-graphql">
                        <h5>Apollo Hook (GraphQL) Task</h5>
                    </a>
                </div>
            </nav>
            <div>
                <h5 className="text-center">
                    Please go to this <a className="navbar-brand" href="https://masrursakib-apollo-graphql-app.netlify.app/">link</a> for solution.
                </h5>
            </div>
        </div>
    );
};

export default ApolloGraphql;