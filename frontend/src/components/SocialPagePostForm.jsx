import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const SocialPagePostForm = ({ onPostSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  const handleInputChangeBody = (event) => {
    setPostText(event.target.value);
    
  };
  const handleInputChangeSubject = (event) => {
    setSubjectText(event.target.value);
  }

  const handleMoodSelect = (eventKey) => {
    setSelectedMood(eventKey);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postText.trim() !== "" && selectedMood !== "") {
      const newPost = {
        subjectText,
        postText,
        mood: selectedMood,
      };
      onPostSubmit(newPost);
      setSubjectText("");
      setPostText("");
      setSelectedMood("");
      setIsOpen(false);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button style={{borderRadius:'0px', fontFamily:'Jost'}} onClick={openModal} variant="success" className="bg-success">
        Create Post
      </Button>

      <Modal show={isOpen} onHide={closeModal} size="lg" centered style={{color: 'green'}}>
        <Modal.Header closeButton>
        <Form.Group controlId="input-social-form-subject">
              <Form.Label style={{fontFamily:'Jost'}} >Subject</Form.Label>
              <Form.Control
                size="sm"
                as="textarea"
                placeholder="Enter your subject text..."
                value={subjectText}
                onChange={handleInputChangeSubject}
                style={{ resize: "none" , width: '200px', height: '50px'}}
                
              />
            </Form.Group>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="input-social-form-body">
              <Form.Label style={{fontFamily:'Jost'}} >Post Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your post text..."
                value={postText}
                onChange={handleInputChangeBody}
              />
            </Form.Group>

            <Form.Group controlId="input-social-form-mood">
              <Form.Label style={{fontFamily:'Jost'}} >Mood</Form.Label>
              <Dropdown  onSelect={handleMoodSelect}>
                <Dropdown.Toggle style={{backgroundColor:'green'}} variant="success" id="dropdown-basic">
                  {selectedMood ? (
                    <>
                      You are feeling <strong>{selectedMood}</strong>
                    </>
                  ) : (
                    "Select Mood"
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item style={{fontFamily:'Jost'}} eventKey="happy">Happy</Dropdown.Item>
                  <Dropdown.Item style={{fontFamily:'Jost'}} eventKey="accomplished">Accomplished</Dropdown.Item>
                  <Dropdown.Item style={{fontFamily:'Jost'}} eventKey="excited">Excited</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{color:'white', backgroundColor:'green', borderColor:'black',fontFamily:'Jost'}} variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button style={{color:'black',fontFamily:'Jost'}} variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SocialPagePostForm;
