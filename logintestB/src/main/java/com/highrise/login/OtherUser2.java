package com.highrise.login;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OtherUser2 {

	
	@JsonProperty("firstName")
	public String firstName;
	@JsonProperty("lastName")
	public String lastName;
	@JsonProperty("email")
	public String email;
	@JsonProperty("pmsUid")
	public String puid;
	@JsonProperty("redID")
	public String ruid;
	@JsonProperty("status")
	public String status;
	@JsonProperty("dateReqFrom")
	public String dateReq;
	@JsonProperty("dateCompFrom")
	public String dateCompl;

	@JsonCreator
	public OtherUser2(@JsonProperty("firstName") String fname, 
			@JsonProperty("lastName") String lname, 
			@JsonProperty("email") String email,
			@JsonProperty("pmsUid") String puid, 
			@JsonProperty("redID") String ruid, 
			@JsonProperty("status") String status, 
			@JsonProperty("dateReqFrom") String dateReq, 
			@JsonProperty("dateCompFrom") String dateCompl) {

		this.firstName = fname;

		this.lastName = lname;
		
		this.email = email;
		
		this.puid = puid;
		
		this.ruid =  ruid;
		
		this.status = status;
		
		this.dateReq = dateReq;
		
		this.dateCompl = dateCompl;
		
	}

}
