package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Coupon;

public interface Repository extends MongoRepository<Coupon, String>{

}
