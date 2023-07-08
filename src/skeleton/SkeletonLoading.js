import React from 'react';
import './Skeleton.css'
const SkeletonLoading = ({width,height}) => {
    return (
        <div className="skeleton-custom" style={{
            width:"100%",
            height:height
        }}>
            
        </div>
    );
}

export default SkeletonLoading;
