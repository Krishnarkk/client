import axios from 'axios';
const URL="http://localhost:8000";

export const addUser=async(data)=>{
 try{
  return await axios.post(`${URL}/add`,data);
 }
 catch(error){
     console.log("error while callinf",error)
 }
}
export const getUser=async()=>{
    try{
   return  await axios.get(`${URL}/all`)
    }
    catch (error){
      console.log("error while getting user",error)
    }
}

//to get individual details of user on id
export const getIndividualUser=async(id)=>{
  try{
   return await axios.get(`${URL}/${id}`)

  }
  catch(err){
    console.log("error while getting individual user",err)
  }
}

export  const editUser=async (user,id)=>{

try{
    return await axios.post(`${URL}/${id}`,user)
}
catch(err){
  console.log("error while editing  individual user",err)
}

}

export const deleteUser=async (id)=>{
  try{
      axios.delete(`${URL}/${id}`);
  }
  catch(error){
     console.log("error while calling api",error)
  }
}