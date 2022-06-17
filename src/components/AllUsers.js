import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button,Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { getUser,deleteUser } from '../service/api';
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, [])
  const getAllUsers = async () => {
    const response = await getUser();
    setUsers(response.data);
    console.log(response)
  }
  const deleteUserDetails= async(id)=>{
    await deleteUser(id);
    getAllUsers();

  }
  return (
    <div>
      <Table style={{width:'100%',margin:"50px auto 0 auto"}}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              users.map(user=>
                <TableRow>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} >EDIT</Button>
                    <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(user._id)}>DELETE</Button>
                  </TableCell>
                 </TableRow>
                
                )
            }
        </TableBody>

      </Table>
    </div>
  )
}

export default AllUsers