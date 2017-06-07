package com.highrise.login;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/login")
public class LoginController {

	
	
	@RequestMapping(method = RequestMethod.GET)
	public Object thing1()
	{
		Result result = new Result();
		
		result.setKey("key");
		result.setValue("The first thing");
		
		return result;
	}
	
	
	@RequestMapping(value="/authenticate1/{usr}/{pw}", method = RequestMethod.POST)
	public boolean authenticate1(@PathVariable("usr") String userName, @PathVariable("pw") String pw){
		
		boolean isValid = false;
		
		String realUserName = "admin";
		String realPassWord = "jackDaniels";
		
		if (userName.equals(realUserName) && pw.equals(realPassWord) ){
			
			isValid = true;
		}
		
		return isValid;
		
	}
	
	@RequestMapping(value="/seriTest")
	public Object javaToJson(){
		
		
		User u1 = new User("me","too");
		return u1;
		
	}
	
	@RequestMapping(value="/authenticate2", method = RequestMethod.POST)
	public boolean authenticate2(@RequestBody User u1){
//	public boolean authenticate2(@RequestParam("usr") String userName, @RequestParam("pw") String pw){
		
		boolean isValid = false;
		
		String realUserName = "admin";
		String realPassWord = "jackDaniels";
		
		if (u1.userName.equals(realUserName) && u1.password.equals(realPassWord) ){
			
			isValid = true;
		}
		
		return isValid;
		
	}
	
	@RequestMapping(method = RequestMethod.GET, value="getUsersGet")
	public List<OtherUser2> performSearch(UserSearchParams params){

		
		
		return Collections.emptyList();
	}

	@RequestMapping(value="/getUsersPost", method = RequestMethod.POST)
	public List<OtherUser2> userSearch(@RequestBody OtherUser2 userResult){
		
		
		
		List<OtherUser2> theList = new ArrayList<OtherUser2>();
		
//		stopped here: creating an updated getUsers method to accept more parameters without clogging the method parameters field		
		
		String fname;
		String lname;
		String email;
		String puid;
		String ruid;
		String status;
		String dateReq;
		String dateCompl;
		
		
		
		for (int j=0;j<5;j++){
			
			//action: creating mock data
			fname = "name"+j;
			lname = "last name"+j;
			email = "you@me.com"+j;
			puid = "p3829"+j;
			ruid = "r42398"+j;
			status = "approved"+j;
			dateReq = "06/1"+j+"/2017";
			dateCompl = "06/2"+j+"/2017";
			      
			
			boolean fnCheck = userResult.firstName != null && !userResult.firstName.isEmpty() && fname.toLowerCase().contains(userResult.firstName.toLowerCase()) ? true : false;
			boolean lnCheck = userResult.lastName != null && !userResult.lastName.isEmpty() && lname.toLowerCase().contains(userResult.lastName.toLowerCase()) ? true : false;
			boolean emailCheck = userResult.email != null && !userResult.email.isEmpty() && email.toLowerCase().contains(userResult.email.toLowerCase()) ? true : false;
			boolean puCheck = userResult.puid != null && !userResult.puid.isEmpty() && puid.toLowerCase().contains(userResult.puid.toLowerCase()) ? true : false;
			boolean ruCheck = userResult.ruid != null && !userResult.ruid.isEmpty() && ruid.toLowerCase().contains(userResult.ruid.toLowerCase()) ? true : false;
			boolean statusCheck = userResult.status != null && !userResult.status.isEmpty() && status.toLowerCase().contains(userResult.status.toLowerCase()) ? true : false;
			boolean drCheck = userResult.dateReq != null && !userResult.dateReq.isEmpty() && dateReq.toLowerCase().contains(userResult.dateReq.toLowerCase()) ? true : false;
			boolean dcCheck = userResult.dateCompl != null && !userResult.dateCompl.isEmpty() && dateCompl.toLowerCase().contains(userResult.dateCompl.toLowerCase()) ? true : false;
			
			
			
//			
			if (fnCheck || lnCheck || emailCheck || puCheck || ruCheck || statusCheck || drCheck || dcCheck){
			//action: take the one object matching a mock name value and exit the for loop
//				
				OtherUser2 u1 = new OtherUser2(fname,lname,email,puid,ruid,status,dateReq,dateCompl);
				theList.add(u1);

				
			}else{
				continue;
			}
			
			
			
		}



return theList;
		
	}
	
	@RequestMapping(value="/getUsers" , method = RequestMethod.GET)
	
	public List<OtherUser> userSearch(@RequestParam("fn") String fn,@RequestParam("ln") String ln,@RequestParam("em") String email1,@RequestParam("puid") String pmsId,@RequestParam("reqType") String reqType,@RequestParam("status") String status,@RequestParam("dateReq") String dr,@RequestParam("dateComp") String dc){
//	public List<OtherUser> userSearch(){
		
		List<OtherUser> theList = new ArrayList<OtherUser>();
		
		
				
				String fname;
				String lname;
				String email;
				String gender;
				String ip_add;
				
				
				
				for (int j=0;j<5;j++){
					
					//action: creating mock data
					fname = "name"+j;
					lname = "last name"+j;
					email = "you@me.com"+j;
					gender = "female"+j;
					ip_add =  "20.39.39.0"+j;
					      
					
					
					
//					if (fn != null && !fn.isEmpty() && fn.equals(fname) && fn.length() > 0){
					if (fn != null && !fn.isEmpty() && fname.toLowerCase().contains(fn.toLowerCase()) && fn.length() > 0){
					//action: take the one object matching a mock name value and exit the for loop
//						theList.clear();
						OtherUser u1 = new OtherUser(fname,lname,email,gender,ip_add);
						theList.add(u1);
//						break;
//						return theList;
						
					}/*else{
						//action: add all mock object data
						OtherUser u1 = new OtherUser(fname,lname,email,gender,ip_add);
						theList.add(u1);
						
					}*/
					
					
					
				}
		
		
		
		return theList;
		
		
	}
	
	public static class Result {
		private String key;
		private String value;
		public String getKey() {
			return key;
		}
		public String getValue() {
			return value;
		}
		public void setKey(String key) {
			this.key = key;
		}
		public void setValue(String value) {
			this.value = value;
		}
	}
	
	public static class UserSearchParams {
		private String firstName;
		private String lastName;
		private String email;
		private Date dateRequestedFrom;
		
		public Date getDateRequestedFrom() {
			return dateRequestedFrom;
		}
		public void setDateRequestedFrom(Date dateRequestedFrom) {
			this.dateRequestedFrom = dateRequestedFrom;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		
	}
}








