package com.google.dbConnection;

import java.sql.Connection;
import java.sql.DriverManager;

public class DbConnection {

	Connection conn;
	public Connection getConnection() throws ClassNotFoundException {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection conn=DriverManager.getConnection("jdbc:Oracle:thin:@localhost:1521:xe,"system","orcl11g");
		return conn;
		
	}
}
