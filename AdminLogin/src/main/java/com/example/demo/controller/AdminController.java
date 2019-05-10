package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.model.repository.AdminRepo;




//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {
	
	@Autowired
	AdminRepo repo;
	
	
	@PostMapping("/valid")
	Admin validateAdmin(@RequestBody Admin userlog) {
    System.out.println(userlog);
	List<Admin> login= repo.findAll();
	System.out.println(login);
	for(Admin dblog:login) {
		System.out.println(dblog.getUname()+" ="+userlog.getUname());
		if(dblog.getUname().equals(userlog.getUname())&&dblog.getPass().equals(userlog.getPass())) {
			
			return dblog;
	}	
}
	return null;
}

}
