import React, { FC, useState } from 'react'
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { loginValid, passwordValid } from '../Redux/slice'

const useStyles = makeStyles({
    paper: {
        margin: '1em auto',
        padding: '1em',
        width: '20em'
    },
})

const Header: FC = () => {
    
    const [log, setLog] = useState('')
    const [pass, setPass] = useState('')
    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLog(e.currentTarget.value)        
    }
    const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)        
    }
    
    const handleClick = () => {
        dispatch(passwordValid(pass))
        dispatch(loginValid(log))
    }
    const dispatch = useDispatch()
    const classes = useStyles();
      return (
        <>
            <Paper className={classes.paper}>
                <Stack>
                <TextField
                    required
                    id="login"
                    label="Login"
                    margin="dense"
                    onChange={handleChangeLogin}
                    />
                <TextField
                    required
                    id="pass"
                    label="Password"
                    type="password"
                    onChange={handleChangePass}
                    margin="dense"
                    />
                    <Button component={Link} to="/profile/" disabled={log === 'developer21' && pass === '123456' ? false : true} onClick={handleClick} sx={{my: '1em'}} variant="contained">
                    Submit
                </Button>
                </Stack>
            </Paper>
        </>
    )
}

export default Header