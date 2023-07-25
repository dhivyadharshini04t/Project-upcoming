package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.LoginModel;
import com.example.demo.Repository.LoginRepo;

@Service
public class LoginService {
	@Autowired
	LoginRepo Repo;

	public List<LoginModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	LoginModel SaveDetails(LoginModel e)
	{
		return Repo.save(e);
	}
	/*public LoginModel updateDetails(Long id, LoginModel e1)
	{
		LoginModel modelx = Repo.findById(id).orElse(null);
		if(modelx !=null) {
			modelx.setPassword(e1.getPassword());
			modelx.setEmail(e1.getEmail());
			
			return Repo.saveAndFlush(modelx);
		}
		else {
			return null;
		}
		}
    public void deleteDetails(Long id)
    {
    	Repo.deleteById(id);
    }*/
}