import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React, { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom'
const Container = styled(FormGroup)
  `
 width:50%;
 margin:4% auto 0 auto;
 &>div{
   margin:15px;
 }
`
const Adduser = () => {
  const navigate = useNavigate();
  const defaultValue = {
    'name': '',
    'username': '',
    'email': '',
    'phone': ''
  }
  const [user, setUser] = useState({})
  const [pic, setPic] = useState();
  const onValChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value })

  }
  const adduserDet = async () => {
    await addUser(user);
    navigate('/all');
  }

  return (
    <div>

      <Container>
        <Typography variant="h4">Add New User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>E-mail</InputLabel>
          <Input onChange={(e) => onValChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone No</InputLabel>
          <Input onChange={(e) => onValChange(e)} name="phone" />
        </FormControl>
        <FormControl>

          <Button variant="contained" onClick={() => { adduserDet() }}>ADD USER</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Adduser