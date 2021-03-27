import React from "react"
import {Jumbotron, Container, Button} from "reactstrap"
function Home(){
    return(
        <div>
            <Jumbotron className="text-center">
                   
                <p> The Learning hub is a platform which provides you different courses
                    to explore and learn. You can choose the course from basics to advance
                    level. Good luck for your new journey.
                </p>
                <Container>
                    <Button color="primary">
                        Start using 
                    </Button>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default Home