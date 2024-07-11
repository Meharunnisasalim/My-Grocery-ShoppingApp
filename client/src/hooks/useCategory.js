import { useState,useEffect } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function useCategory(){
    const [categories,setCategories]=useState([])

    //get category
    const getCategories =async()=>{
        try {
            const {data}=await 
            axios.get(`${API_BASE_URL}/api/v1/category/get-category`)
            setCategories(data?.category)
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    getCategories()
},[])
   return categories;
}