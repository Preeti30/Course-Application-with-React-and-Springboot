import React from "react"
import {useState,useEffect} from "react"
import base_url from "../api/bootapi"
import axios from "axios";
import Course from "./Course"
import { toast } from "react-toastify";

const Allcourses =()=>{


    const Allcourse =()=>{
        useEffect(()=>{
            document.title="Allcourse || Happy Learning"
        },[])
    }

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{console.log(response.data);
                toast.success("courses has been loaded",{
                    position:"top-right"
                })
                setCourses(response.data)
            },
            (error)=>{console.log(error);
                toast.error("something went wrong",{
                    position:"top-right"
                })
            }
        )
    }

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[])


    const [courses,setCourses]= useState([]);
    //after deleting the course we also have to delete the course from the courses array

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id)
        )}

    return(
        <div>
            <h3 className="text-center">All Courses</h3>
            <p> List of courses are as follows</p>
            {
                courses.length>0 ? courses.map((item)=><Course key={item.id} course={item}
                update={updateCourses}
                />)
                    :"No courses"
                
            }
        </div>

    )
}
export default Allcourses