import React from 'react';

const page = ({params}) => {
    console.log(params);
    const {title, description} = blogs.find((blog) => blog.slug == params.slug)
    return (
        <div className='h-screen'>
            Details Page
            <h4>{title}</h4>
            <h1>{description}</h1>
        </div>
    );
};

export default page;