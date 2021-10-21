import {FC} from 'react'
import { Link } from 'react-router-dom'
import { RootState } from '../Redux/store'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paper: {
        margin: '1em auto',
        padding: '1em',
        width: '50vw',
        textAlign: 'center'
    },
})
const Header: FC = () => {
    const classes = useStyles();
    const login = useSelector((state: RootState) => state.loginValid.login)
    return (
        <>
        <Paper className={classes.paper} >
            <Typography variant="h1" color="initial">
                Login: {login}
            </Typography>
            <Button component={Link} to="/" variant="outlined">
                Back to main page
            </Button>
        </Paper>
        </>
    )
}

export default Header