package com.example.demo.model.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Admin;



public interface AdminRepo extends MongoRepository<Admin, String>{
	
}
