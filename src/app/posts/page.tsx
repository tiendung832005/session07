"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
    const [onChange, setOnChange] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter();
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setOnChange(value);
    }
    const handleClick = ()=>{
        router.push(`/posts?search=${onChange}`);
        setSearchValue(onChange);
        setOnChange('');  // xóa input khi click vào button tìm kiếm
    }
  return (
        
    <div className='mt-7'>
            <h2>Search Value: {searchValue}</h2>
            <input onChange={handleChange} className='border border-black' type="text" />
            <button onClick={handleClick}>Tìm kiếm</button>
            {
                /*
                    1. lấy giá trị người dùng nhập
                    2. tạo sự kiện khi nhấn vào button tìm kiếm
                    3. bắn giá trị người dùng nhập lên url
                    4. sử dụng router push
                */
            }

    </div>
  )
}
