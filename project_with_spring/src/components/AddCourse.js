import React from 'react'
import  { Button, Container, Form,FormGroup, Input} from 'reactstrap'
import {useState} from 'react'
import axios from 'axios'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'

const AddCourse =()=>{

    const[course,setCourse] =useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();

    }
    //creating function to post data on server
    const postDataToServer= (data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response)
                console.log("success")
                toast.success("Course added successfully")
                setCourse({id:"", title:"", description:""}); 
            },
                (error)=>{
                    console.log(error);
                    console.log("error")
                    toast.error("Error! Something went wrong")

    })};

    return(
        <>
            <h3 className="text-center my-3">Fill Course Details</h3>
            <Form onSubmit={handleForm} >
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" 
                    placeholder="Enter here" name="userId" id="userId"
                    onChange={ (e)=>{
                        setCourse({ ...course,id: e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" 
                    placeholder="Enter title here" id="title"
                    onChange={(e)=>{
                        setCourse({ ...course,title: e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup>
                <label for="description">Course description</label>
                    <Input type="textarea" 
                    placeholder="Enter description here" id="description"
                    style={{height:100}}
                    onChange={(e)=>{
                        setCourse({ ...course,description: e.target.value});
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button color="warning ml-3" type="reset" 
                    onClick ={()=>{setCourse({id:"", title:"",description:""})}}
                    >Clear</Button>
                </Container>
            </Form>
        </>
    )
}
export default AddCourse