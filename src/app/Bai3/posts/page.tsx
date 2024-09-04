"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
    const [onChange, setOnChange] = useState<string>('');
    const [onChange1, setOnChange1] = useState<string>('');

    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter();
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setOnChange(value);
    }
    const handleChange1 = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setOnChange1(value);
    }
    
    const handleClick = ()=>{
        router.push(`/Bai3/posts?name=${onChange}&category=${onChange1}`);
        setSearchValue(onChange);
        setSearchValue(onChange1);

    }
  return (
        
    <div className='mt-7'>
            <h2>Tên sản phẩm: {onChange}</h2>
            <h2>Danh mục: {onChange1}</h2>

            <input onChange={handleChange} className='border border-black' type="text" placeholder='Tìm kiếm theo tên'/>
            <br />
            <input onChange={handleChange1} className='border border-black' type="text" placeholder='Tìm kiếm theo danh mục'/>
            <button onClick={handleClick}>Tìm kiếm</button>
            
    </div>
  )
}
