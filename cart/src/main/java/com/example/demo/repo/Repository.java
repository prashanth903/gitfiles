package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Cart;



public interface Repository extends MongoRepository<Cart,String>{

}
