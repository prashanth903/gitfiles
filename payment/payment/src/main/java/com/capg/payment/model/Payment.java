package com.capg.payment.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "paymentdata")
public class Payment {

	String nameOnCard;
	String creditCardNumber;
	String expMonth;
	String expYear;
	String cvv;
	public Payment(String nameOnCard, String creditCardNumber, String expMonth, String expYear, String cvv) {
		super();
		this.nameOnCard = nameOnCard;
		this.creditCardNumber = creditCardNumber;
		this.expMonth = expMonth;
		this.expYear = expYear;
		this.cvv = cvv;
	}
	public Payment() {
		super();
	}
	public String getNameOnCard() {
		return nameOnCard;
	}
	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}
	public String getCreditCardNumber() {
		return creditCardNumber;
	}
	public void setCreditCardNumber(String creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}
	public String getExpMonth() {
		return expMonth;
	}
	public void setExpMonth(String expMonth) {
		this.expMonth = expMonth;
	}
	public String getExpYear() {
		return expYear;
	}
	public void setExpYear(String expYear) {
		this.expYear = expYear;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	@Override
	public String toString() {
		return "Payment [nameOnCard=" + nameOnCard + ", creditCardNumber=" + creditCardNumber + ", expMonth=" + expMonth
				+ ", expYear=" + expYear + ", cvv=" + cvv + "]";
	}
	
	
}
