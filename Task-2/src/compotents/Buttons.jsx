import Button from 'react-bootstrap/Button';

function Buttons(props) {
  return (
    <>
      <Button  size={props.size} variant={props.variant}>{props.desc}</Button>
    </>
  );
}

export default Buttons;