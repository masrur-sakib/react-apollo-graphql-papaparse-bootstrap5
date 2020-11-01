import React, { useState } from 'react';
import dummyData from '../../dummyData/property';
import PropertyInfo from '../PropertyInfo/PropertyInfo';
import "./PropertyCollections.css";

const PropertyCollections = () => {
    const [propertyData] = useState(dummyData);

    return (
        <div className="property-collections-page">
            <nav className="navbar navbar-light text-light multi-step-form-header">
                <div className="container-fluid site-title">
                    <a className="navbar-brand" href="/property-collections">
                        <h5>Property Collections</h5>
                    </a>
                </div>
            </nav>
            <div className="property-collections">
                {
                    propertyData.map((property) => <PropertyInfo key={property.id} property={property}></PropertyInfo>)
                }
            </div>
        </div>
    );
};

export default PropertyCollections;