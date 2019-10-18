
package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.springboot.Entity.Employee;

@Repository
public interface EmployeeRepostories extends JpaRepository<Employee, Long>{
	
	
}