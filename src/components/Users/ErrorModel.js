import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card'
import classes from './ErrorModal.module.css';

function ErrorModel(props) {
    return (
        <>
            <div className={classes.backdrop}>
                <Card classes={classes.model}>
                    <header classes={classes.header}>
                        <h1>{props.title}</h1>
                    </header>
                    <div classes={classes.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer classes={classes.actions}>
                        <Button onClick={props.onCloseModel}>Ok</Button>
                    </footer>
                </Card>
            </div>
        </>

    )
}

export default ErrorModel