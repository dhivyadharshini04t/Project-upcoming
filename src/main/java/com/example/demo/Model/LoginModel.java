package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="loginmodel")
public class LoginModel {
	@Id
	
	private String email;
	private String Password;
	
	public LoginModel(String email, String password) {
		super();
		
		this.email = email;
		Password = password;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}
	public LoginModel() {
		
	}
	

}