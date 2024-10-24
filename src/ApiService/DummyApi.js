import axios from "axios";


const BASE_URL = 'https://dummyjson.com'

 export const getAllproducts = async()=>{

  const response = await axios.get(`${BASE_URL}/products?limit=40`)


  return  response.data;

}

export const getProductId = async(id)=>{

    const response = await axios.get(`${BASE_URL}/products/${id}`)
  
  
    return  response.data;  

}
  


export const getProductImage = async(id)=>{

    const response = await axios.get(`${BASE_URL}/products/${id}/image`)
  
  
    return  response.data;  

}
  