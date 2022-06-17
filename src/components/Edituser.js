import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from '@mui/material'
import React,{useEffect, useState} from 'react';
import { editUser,getIndividualUser } from '../service/api';
import {useNavigate,useParams} from 'react-router-dom'
const Container=styled(FormGroup)
`
 width:50%;
 margin:4% auto 0 auto;
 &>div{
   margin:15px;
 }
`
const Edituser = () => {
  const navigate=useNavigate();
  const defaultValue={
    'name':'',
    'username':'',
    'email':'',
    'phone':''
  }

 
  const[user,setUser]=useState({})
  const {id}=useParams();
  const onValChange=(e)=>{
 
    setUser({...user,[e.target.name]:e.target.value})

  }

  useEffect(()=>{
       lodaduserdet();
},[])

const lodaduserdet=async()=>{
 const response=await getIndividualUser(id);
 console.log(response)
 setUser(response.data)
 console.log(user)
}

  const edituserDet=async()=>{
   await editUser(user,id);
   navigate('/all');
  }
  return (
    <div>

      <Container>
        <Typography variant="h4">Edit New User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e)=>onValChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
          <InputLabel>E-mail</InputLabel>
          <Input onChange={(e)=>onValChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone No</InputLabel>
          <Input onChange={(e)=>onValChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={()=>{edituserDet()}}>EDIT USER</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Edituser