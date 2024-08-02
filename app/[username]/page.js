// 'use client'
// import { useRouter } from 'next/router';
import React from 'react'

const page = ({params}) => {
  // const router = useRouter();
  return (
    <div>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="text-lg">Username: {params.username}</p>
    </div>
    </div>
  )
}

export default page
