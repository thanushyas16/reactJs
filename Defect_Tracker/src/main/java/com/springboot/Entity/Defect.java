package com.springboot.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Defect {
	
	@Id
	private Long Did;
	
	@ManyToOne
	@JoinColumn
	private Project project;
	private String name;
	private String priority;
	private String serverity;
	public Long getId() {
		return Did;
	}
	public void setId(Long id) {
		this.Did = id;
	}
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getServerity() {
		return serverity;
	}
	public void setServerity(String serverity) {
		this.serverity = serverity;
	}
	

}
