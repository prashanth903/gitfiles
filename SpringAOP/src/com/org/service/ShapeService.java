package com.org.service;

import com.org.aop.Circle;
import com.org.aop.Triangle;

public class ShapeService {

	private Triangle triangle;
	private Circle circle;
	public ShapeService() {
		super();
	}
	public Triangle getTriangle() {
		return triangle;
	}
	public void setTriangle(Triangle triangle) {
		this.triangle = triangle;
	}
	public Circle getCircle() {
		return circle;
	}
	public void setCircle(Circle circle) {
		this.circle = circle;
	}
	
	
}
