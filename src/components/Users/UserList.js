import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'


function UserList(props) {
    console.log("insidle list")
    console.log(props.users)
    return (
        <Card className ={classes.users}>
            <ul>
                <li key="343">test</li>
                {props.users.map((user) =>
                   (<li key={user.id}>{user.name} ({user.age} year old.)</li>)
                )}
            </ul>
        </Card>
    )
}

export default UserList