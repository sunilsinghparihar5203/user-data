import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import ErrorModel from './ErrorModel';

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('')

    const [message, setMessage] = useState("")
    const [modelDisplay, setModelDisplay] = useState(false)

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setMessage("Input files are empty")
            setModelDisplay(true)
            return
        }
        if (+enteredAge < 1) {
            setMessage("Age can't be  " +enteredAge)
            setModelDisplay(true)
            return
        }

        props.onAddUsers(enteredUsername, enteredAge)

        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const onCloseModel = () =>{
        setModelDisplay(false)
    }

    return (
        <>
            {modelDisplay && <ErrorModel title="Error occured!" message ={message} onCloseModel={onCloseModel}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor='age'>age (years)</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>

    )
}

export default AddUser