package com.highrise.login;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class User implements Serializable{

	@JsonProperty("userName")
	public String userName;
	
	@JsonProperty("password")
	public String password;

	@JsonCreator
	public User(@JsonProperty("userName") String userName, @JsonProperty("password") String password) {

		this.userName = userName;

		this.password = password;

	}

}
