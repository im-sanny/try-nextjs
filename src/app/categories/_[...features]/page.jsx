import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    console.log(params);
    if (params.features.length == 3)
    return <div className="">{params.features[2]}</div>
    if (params.features.length == 2)
    return <div className="">{params.features[1]}</div>
    return (
        <div className='h-screen'>
            Categories Details
        </div>
    );
};

export default CategoriesDetailsPage;