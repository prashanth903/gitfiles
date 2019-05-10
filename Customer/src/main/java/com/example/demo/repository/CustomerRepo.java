package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Customer;


public interface CustomerRepo extends MongoRepository<Customer, String>{
	List<Customer> findByName(String uname);
	
}
