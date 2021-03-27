package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

@RestController
public class MyController {
	
	@Autowired
	private CourseService course_service;
	@GetMapping("/home")
	public String home() {
		return "Welcome to Courses application";
	}
	
	//get the course
	@CrossOrigin
	@GetMapping("/courses")
	public List<Course> getCourses(){
		
		return this.course_service.getCourses();
		
	}
	
	@CrossOrigin
	@GetMapping("courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.course_service.getCourse(Long.parseLong(courseId));
	}
	
	@CrossOrigin
	@PostMapping(path="/courses", consumes="application/json")
	public Course addCourse( @RequestBody Course course) {
		
		return this.course_service.addCourse(course);
	}
	
	@CrossOrigin
	@DeleteMapping("courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		try {
			this.course_service.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@CrossOrigin
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.course_service.updateCourse(course);
	}
	
}
