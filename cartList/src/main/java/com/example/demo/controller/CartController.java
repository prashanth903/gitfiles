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

import com.example.demo.model.Cart;
import com.example.demo.repo.CartRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	@Autowired
	CartRepository repo;
	
	
	
		@GetMapping("/")
		public List<Cart> getCartCoupon() {
			System.out.println("Get all Customers...");

			List<Cart> customers = new ArrayList<>();
			repo.findAll().forEach(customers::add);

			return customers;
		}
		@PostMapping("/add")
		public Cart addCart(@RequestBody Cart customer) {

			Cart _customer = repo.save(new Cart(customer.getUname(),customer.getCoupon()));
			return _customer;
		}
		
		@DeleteMapping("/{id}")
		public ResponseEntity<String> deleteCustomer(@PathVariable("id") String id) {
			System.out.println("Delete Coupon with ID = " + id + "...");

			repo.deleteById(id);

			return new ResponseEntity<>("Coupon has been deleted!", HttpStatus.OK);
		}
		
}
