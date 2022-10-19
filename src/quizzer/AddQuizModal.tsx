import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
//import {Quizzer} from "./Quizzer";

export const AddQuizModal = () => {
    const [title, setTitle] = useState<string>("Example Quiz");
    const[body,setBody] = useState<string>("Example Description");
    const[show,setShow] = useState<boolean>(true);

    const saveChanges = () => {
        //addQuiz(quiz, title, body);
        setTitle("Example Quiz");
        setBody("Example Description");
        handleClose();
    };
    function handleClose() {
        setShow(false);
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <Modal.Title>Add New Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={body}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setBody(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setTitle("Example Quiz");
                            setBody("Example Description");
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
