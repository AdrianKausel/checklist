import { useState } from "react";
import React from "react";
import {Row, Form, Button, Col} from "react-bootstrap";
import { useEffect } from "react";

const initialState = {
    task:'',
    tachado: false
}

const NewTask = ({addInfo, newInfo, editFn}) => {

    const [newTask, setNewTask] = useState(initialState);
    const [edition, setEdition] = useState(false);

    const updateTask = ({target: {name, value}}) => {
        setNewTask({
            ...newTask,
            [name]: value
        })
    }
    
    const add = e => {
        e.preventDefault();
        if (!edition){
            addInfo(newTask);   
        } else {
            editFn(newTask)
        }
        setEdition(false);
        setNewTask(initialState);
        
        
    }

    useEffect(()=>{
        if (newInfo && newInfo.indice >= 0){
            setEdition(true);
            setNewTask(newInfo);
        }
    }, [newInfo])

    return (
        <React.Fragment>
            <Form onSubmit={add}>
                <Form.Group className="mb-3">
                    <Form.Label>New Task!</Form.Label>
                    <Form.Control type="text" placeholder="New task?" name="task" value={newTask.task} onChange={updateTask}/>
                </Form.Group>
                <Row>
                    <Col><Button variant="primary" type="submit">Add!</Button></Col>
                    {newTask.checkbox && <Col><Button variant="primary" type="button" >Limpiar</Button></Col>}
                </Row>
            </Form>
        </React.Fragment>
    )

}

export default NewTask;