import React, { Component } from 'react'
import {
    FormGroup, Label, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter
    , Container
} from 'reactstrap'
import axios from 'axios'

class Course2 extends Component {

    state = {
        courses: [],
        editCourseData: {
            id: '',
            title: '',
            description: ''
        },
        editBookModal: false
    }


    render() {

        let courses = this.state.courses.map((course) => {
            return (
                <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                    <td>
                        <Button color="success" size="sm" >Edit</Button>
                        <Button color="danger" size="sm" className="ml-3">Delete</Button>
                    </td>
                </tr>
            )
        })
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>description</th>
                    </tr>
                </thead>

                <tbody>
                    {courses}
                </tbody>


            </Table>
        )
    }
}



export default Course2