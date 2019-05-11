package com.org.aop;

public class Triangle {

	private String name;

	@Override
	public String toString() {
		return "Triangle [name=" + name + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Triangle() {
		super();
	}
}