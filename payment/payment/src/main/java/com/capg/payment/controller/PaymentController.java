package com.capg.payment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.payment.model.Payment;
import com.capg.payment.repositories.Repositories;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/pay")
public class PaymentController {

	
	@Autowired
	private Repositories repository;

	@GetMapping("/payment")
	public List<Payment> getAllUser() {

		System.out.println("Getting all payments data...");

		List<Payment> user = new ArrayList<>();
		repository.findAll().forEach(user::add);
		return user;

	}
	  @GetMapping("/payment/getCopoun")
	  public List<Payment> findCoupon() {
		System.out.println("in coupen controller");
		 return repository.findAll();
	  }
	  
	  
	@PostMapping("/payment/add")
	public void postUser(@RequestBody Payment payment) {
System.out.println(payment);
		repository.insert(payment);

	}

}
