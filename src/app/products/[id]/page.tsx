"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    // lấy query bên cạnh dấu ?
    // dùng useSearchParams đây là hook dc cung cấp bởi next JS
    const searchParams = useSearchParams();
    const idProduct = searchParams.get("id");
    console.log("idProduct", idProduct);
    
  return (
    <div>Chi tiết sản phẩm</div>
  )
}
