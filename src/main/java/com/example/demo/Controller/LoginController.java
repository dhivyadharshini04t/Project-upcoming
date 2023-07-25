package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.LoginModel;
import com.example.demo.Service.LoginService;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
	@Autowired(required=true)
	LoginService Service;
	@PostMapping("/addLoginDetails")
	public LoginModel addInfo(@RequestBody LoginModel st)
	{
		return Service.SaveDetails(st);
	}
	
@GetMapping("showLoginDetails")
	public List<LoginModel> fetchDetails()
	{
		return Service.getDetails();
	}
/*@PutMapping("/updateDetails/{id}")
public LoginModel updateInfo(@RequestBody LoginModel st1, @PathVariable Long id )
{
	return Service.updateDetails(id, st1);
}

@DeleteMapping("/deleteDetails/{id}")
public String deleteInfo(@PathVariable Long id)
{
	Service.deleteDetails(id);
	return "Deleted details";
}*/
	
}