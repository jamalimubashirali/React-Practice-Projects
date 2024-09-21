import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
  return (
    <div className='w-full flex flex-row p-4 justify-center space-x-4'>
      <img src={data.avatar_url} alt="" srcset="" width={300} className='' />
      <h1>Github Followers : {data.followers}</h1>
    </div>
  )
}

export const getGithubData = async () => {
    const response = await fetch("https://api.github.com/users/jamalimubashirali");
    return response.json();
}

export default Github;
