import React, { useState } from 'react';
import dummyData from '../../dummyData/property';
import PropertyInfo from '../PropertyInfo/PropertyInfo';
import "./PropertyCollections.css";

const PropertyCollections = () => {
    const [propertyData] = useState(dummyData);

    return (
        <div className="property-collections-body">
            <a className="property-collections-title" href="/property-collections">Property Collections</a>
            <div className="property-collections">
                {
                    propertyData.map((property) => <PropertyInfo key={property.id} property={property}></PropertyInfo>)
                }
            </div>
        </div>
    );
};

export default PropertyCollections;