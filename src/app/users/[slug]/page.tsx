"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const search = useSearchParams();
    const userName = search.get("name");
    console.log("username: ", userName);
    
  return (
    <div>
        trang chi tiết user111
    </div>
  )
}
