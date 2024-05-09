import React from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    return (
        <div className='bg-slate-700 text-white text-center text-3xl'>
            User follower: {data.followers}
            <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export const githubInfoLoader=async ()=>
{
    let res = await fetch("https://api.github.com/users/koustavjr");
    return res.json();
}
export default Github
