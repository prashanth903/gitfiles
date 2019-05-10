package com.capg.payment.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.capg.payment.model.Payment;

public interface Repositories extends MongoRepository<Payment, String>{

}
