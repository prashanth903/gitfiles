package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "coupons")
public class Coupon {
	@Id
	private String id;

	private String name;
	private String category;
	private int price;
	private String description;
	private String imgurl;
	public Coupon() {
		super();
	}
	public Coupon( String name, String category, int price, String description, String imgurl) {
		super();
		
		this.name = name;
		this.category = category;
		this.price = price;
		this.description = description;
		this.imgurl = imgurl;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	@Override
	public String toString() {
		return "Coupon [id=" + id + ", name=" + name + ", category=" + category + ", price=" + price + ", description="
				+ description + ", imgurl=" + imgurl + "]";
	}
	
	
}
