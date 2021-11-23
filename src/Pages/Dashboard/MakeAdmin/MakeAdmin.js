import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success,setSuccess] =useState(false);
    const {token} =useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdminSumit = e => {
        const user = {email};
        fetch('https://calm-springs-65388.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then (res =>res.json())
        .then(data=>{
            if(data.modifiedCount){

                console.log(data);
                
                setSuccess(true);
                
            }
            console.log(data);
        })
        e.preventDefault()
    }
    return (


        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSumit}>
                <TextField  
                sx={{width:'50%'}}
                label="Email"
                type="email"
                onBlur={handleOnBlur}
                 variant="standard" />
                <Button variant="contained" type="submit">Make Admin</Button>

            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;