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

import com.example.demo.Model.LikertModel;
import com.example.demo.Service.LikertService;

@RestController
@CrossOrigin(origins = "*")
public class LikertController {
	@Autowired(required=true)
	LikertService Service;
	@PostMapping("/addLikertDetails")
	public LikertModel addInfo(@RequestBody LikertModel st)
	{
		return Service.SaveDetails(st);
	}
    @GetMapping("showLikertDetails")
	public List<LikertModel> fetchDetails()
	{
		return Service.getDetails();
	}
@PutMapping("/updateLikertDetails/{id}")
public LikertModel updateInfo(@RequestBody LikertModel st1, @PathVariable Long id )
{
	return Service.updateDetails(id, st1);
}

@DeleteMapping("/deleteLikertDetails/{id}")
public String deleteInfo(@PathVariable Long id)
{
	Service.deleteDetails(id);
	return "Deleted details";
}
	
}