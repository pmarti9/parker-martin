import {Button, Card} from "react-bootstrap";

export default function ProjectCard() {

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" alt ="project image"/>
            <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                    Project Info
                </Card.Text>
                <Button variant="primary">Project Link/Github Link</Button>
            </Card.Body>
        </Card>
    );

};