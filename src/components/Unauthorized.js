import { Container } from "react-bootstrap";

const Unauthorized = () => {
    return (
        <Container fluid='md' className='text-center '>
            <h3>You're not authorized to view/use this application.</h3>
        </Container>
    );
}

export default Unauthorized;
