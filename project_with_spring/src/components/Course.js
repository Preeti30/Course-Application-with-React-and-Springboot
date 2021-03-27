import React from 'react';
import {
  Card, CardText, CardBody,
   CardSubtitle, Button, Container
} from 'reactstrap';
import axios from 'axios'
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';


const Course =( {course,update} )=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                    toast.success('course deleted')
                    update(id)
            },
            (error)=>{
                toast.error('Error! Course is not deleted');
            }
        )
    }

    // const updateCourse=((course)=>{
    //     axios.update(`${base_url}/courses`).then(
    //         (response)=>{console.log(response);},
    //         (error)=>{toast.error('Error! Course is not updated');}
    //     )
    // })
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold"> {course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>
                    deleteCourse(course.id)}>Delete</Button>

                     <Button color="warning ml-3" >Update</Button> 
                </Container>
            </CardBody>
        </Card>
    )

}

export default Course