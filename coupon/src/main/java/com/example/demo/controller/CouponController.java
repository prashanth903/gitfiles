package com.example.demo.controller;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Coupon;
import com.example.demo.repo.Repository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CouponController {
	
	
	@Autowired
	Repository repo;
	
	
	
	@GetMapping("/")
	public List<Coupon> getAllCoupon() {

		List<Coupon> customers = new ArrayList<>();
		repo.findAll().forEach(customers::add);

		return customers;
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("id") String id) {
		System.out.println("Delete Coupon with ID = " + id + "...");

		repo.deleteById(id);

		return new ResponseEntity<>("Coupon has been deleted!", HttpStatus.OK);
	}
	
	
	@PostMapping("/create")
	public Coupon postCustomer(@RequestBody Coupon customer) {

		Coupon _customer = repo.save(new Coupon(customer.getName(),customer.getCategory(),customer.getPrice(),customer.getDescription(),customer.getImgurl()));
		return _customer;
	}

}
