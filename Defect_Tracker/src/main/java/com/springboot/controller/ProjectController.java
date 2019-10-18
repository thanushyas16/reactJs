package com.springboot.controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Entity.Project;
import com.springboot.repository.ProjectRepostories;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class ProjectController {
	@Autowired
	ProjectRepostories projectRepostories;
	
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping(value = "/project")
	public ResponseEntity<?> createNote(@RequestBody Project project) {
		projectRepostories.save(project);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/project")
	  public List<Project> getProject() {
		return projectRepostories.findAll();

	}
	
	@CrossOrigin
	@DeleteMapping("/project/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
       

projectRepostories.deleteById(id);

        return ResponseEntity.ok().build();
    }
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/geProjectById/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable("id") Long id){
		return new ResponseEntity<Project>(projectRepostories.findByid(id), HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping("/updateproject/{id}")
	public ResponseEntity<Object> updateProject(@RequestBody Project project, @PathVariable long id) {

		Optional<Project> projectOptional = projectRepostories.findById(id);

		if (!projectOptional.isPresent())
			return ResponseEntity.notFound().build();

		project.setId(id);

		projectRepostories.save(project);

		return ResponseEntity.noContent().build();
	}
	
}
