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

import com.example.demo.Model.RadioModel;
import com.example.demo.Service.RadioService;

@RestController
@CrossOrigin(origins = "*")
public class RadioController {
	@Autowired(required=true)
	RadioService Service;
	@PostMapping("/addRadioDetails")
	public RadioModel addInfo(@RequestBody RadioModel st)
	{
		return Service.SaveDetails(st);
	}
	@GetMapping("showRadioDetails")
	public List<RadioModel> fetchDetails()
	{
		return Service.getDetails();
	}
@PutMapping("/updateRadioDetails/{id}")
public RadioModel updateInfo(@RequestBody RadioModel st1, @PathVariable Long id )
{
	return Service.updateDetails(id, st1);
}

@DeleteMapping("/deleteRadioDetails/{id}")
public String deleteInfo(@PathVariable Long id)
{
	Service.deleteDetails(id);
	return "Deleted details";
}
	
}