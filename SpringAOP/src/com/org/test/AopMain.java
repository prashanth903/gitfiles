package com.org.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.org.service.ShapeService;

public class AopMain {

	public static void main(String[] args) {

		ApplicationContext ac=new ClassPathXmlApplicationContext("config.xml");
		ShapeService sh=(ShapeService) ac.getBean("shapeservice");
		System.out.println(sh.getTriangle().getName());

}}
