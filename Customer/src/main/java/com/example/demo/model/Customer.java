package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customer")
public class Customer {
	@Id
	private String id;

	private String name;
	private String email;
	private String uname;
	private String pass;

	public Customer() {
	}

	public Customer(String name, String email,String uname,String pass) {
		this.name = name;
		this.email = email;
		this.uname = uname;
		this.pass = pass;
	}

	public String getId() {
		return id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	

	

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", email=" + email + ",  ]";
	}
}
