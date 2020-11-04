import React from 'react';
import "./ApolloGraphql.css";

const ApolloGraphql = () => {
    return (
        <div className="apollo-graphql-task-page">
            <nav className="navbar navbar-light text-light apollo-graphql-page-header">
                <div className="container-fluid apollo-graphql-page-title">
                    <a className="navbar-brand" href="/toDo">
                        <h5>Apollo GraphQL Tasks</h5>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default ApolloGraphql;