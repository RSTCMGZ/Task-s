import Buttons from './Buttons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ButtonsExample() {
  return (
    <>
    <Row>
    <Col md={10} >
      <InputGroup size='lg' className="mb-3">
        <Form.Control
          placeholder="Search Agent for Assign"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          />
 
      </InputGroup>
    </Col>

    <Col md={2} >
    <Buttons size='lg'  variant="success" desc='Assign'/>

    </Col>

          </Row>
    </>
  );
}

export default ButtonsExample;