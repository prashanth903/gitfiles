package com.payment.payment.controller;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payment.payment.model.Customer;
import com.payment.payment.repository.CustomerRepository;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PaymentController {
	
	@Autowired
	CustomerRepository repository;
	
	Random rand = new Random();
	
  @PostMapping("/add")
	public Customer InsertCustomer(@RequestBody Customer customer) {
		 int code=rand.nextInt(100000);
		 customer.setCouponCode(code);
		 return repository.insert(customer);
        
	}
	 @GetMapping("/username")
	  public Optional<Customer> findCoupon(@RequestBody Customer customer ) {
	  String username=customer.getUsername();
		return repository.findById(username);
	   
	  }
	 
	  @GetMapping("/getCoupon")
	  public List<Customer> findCoupon() {
		System.out.println("in coupen controller");
		 return repository.findAll();
	

}
	  }
