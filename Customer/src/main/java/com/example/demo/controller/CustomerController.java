package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepo;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerController {

	@Autowired
	CustomerRepo repository;
	
	
	@PostMapping("/valid")
	Customer validateUser(@RequestBody Customer userlog) {
System.out.println(userlog);
	List<Customer> login=repository.findAll();
	System.out.println(login);
	for(Customer dblog:login) {
		
		
		System.out.println(dblog.getUname()+" ="+userlog.getUname());
		if(dblog.getUname().equals(userlog.getUname())&&dblog.getPass().equals(userlog.getPass())) {
		
			return dblog;
	}	
}
	return null;
}
	@PostMapping("/create")
	public Customer postCustomer(@RequestBody Customer customer) {

		Customer _customer = repository.save(new Customer(customer.getName(),customer.getEmail(),customer.getUname(),customer.getPass()));
		return _customer;
	}
	
	

	@PutMapping("/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("id") String id, @RequestBody Customer customer) {
		System.out.println("Update Customer with ID = " + id + "...");

		Optional<Customer> customerData = repository.findById(id);

		if (customerData.isPresent()) {
			Customer _customer = customerData.get();
			_customer.setName(customer.getName());
			_customer.setEmail(customer.getEmail());
			
			return new ResponseEntity<>(repository.save(_customer), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}