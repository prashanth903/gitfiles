package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart")
public class Cart {

	@Id
	private String id;

	private String uname;
	private Coupon coupon;
	
	
	
	public Cart(String uname, Coupon coupon) 
	{
		super();
		this.uname = uname;
		this.coupon = coupon;
	}
	
	
	public Cart()
	{
		super();
	}
	
	public String getId() 
	{
		return id;
	}
	public void setId(String id) 
	{
		this.id = id;
	}
	public String getUname()
	{
		return uname;
	}
	public void setUname(String uname)
	{
		this.uname = uname;
	}
	public Coupon getCoupon()
	{
		return coupon;
	}
	public void setCoupon(Coupon coupon)
	{
		this.coupon = coupon;
	}
	@Override
	public String toString() {
		return "Cart [id=" + id + ", uname=" + uname + ", coupon=" + coupon + "]";
	}
	
	
}
