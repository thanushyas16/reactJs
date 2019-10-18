package com.springboot.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Eid;
	private String Empname;
	private String Empaddress;
	private String EmpEmail;
	private int Mobilenumber;
	@ManyToOne
	@JoinColumn
	private Project project;
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public Long getId() {
		return Eid;
	}
	public void setId(Long id) {
		this.Eid = id;
	}
	public String getEmpname() {
		return Empname;
	}
	public void setEmpname(String empname) {
		Empname = empname;
	}
	public String getEmpaddress() {
		return Empaddress;
	}
	public void setEmpaddress(String empaddress) {
		Empaddress = empaddress;
	}
	public String getEmpEmail() {
		return EmpEmail;
	}
	public void setEmpEmail(String empEmail) {
		EmpEmail = empEmail;
	}
	public int getMobilenumber() {
		return Mobilenumber;
	}
	public void setMobilenumber(int mobilenumber) {
		Mobilenumber = mobilenumber;
	}


}
