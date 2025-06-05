import React from 'react';
import { useLoaderData } from 'react-router';

const Featured = () => {

    const topTen = useLoaderData() 

    console.log(topTen);
    
    return (
        <div>
            <h1> Featured Blogs
</h1>

{

    topTen.map((res,index)=><p key={res._id} res={res}> {index+1} {res.longDesc}</p>)
}
        </div>
    );
};

export default Featured;