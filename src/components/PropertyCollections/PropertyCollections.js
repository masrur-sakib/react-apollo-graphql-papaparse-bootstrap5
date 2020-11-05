import React, { useState } from 'react';
import dummyData from '../../dummyData/property';
import PropertyInfo from '../PropertyInfo/PropertyInfo';
import "./PropertyCollections.css";

const PropertyCollections = () => {
    const [propertyData] = useState(dummyData);

    return (
        <div className="property-collections-page">
            {/* Property Collections Page Header / Navbar */}
            <nav className="navbar navbar-light text-light property-collections-page-header">
                <div className="container-fluid property-collections-page-title">
                    <a className="navbar-brand" href="/property-collections">
                        <h5>Property Collections</h5>
                    </a>
                </div>
            </nav>

            {/* Property Collections Cards with Carousels */}
            <div className="property-collections">
                {
                    propertyData.map((property) => <PropertyInfo key={property.id} property={property}></PropertyInfo>)
                }
            </div>
        </div>
    );
};

export default PropertyCollections;