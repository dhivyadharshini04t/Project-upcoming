package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.UserModel;
import com.example.demo.Repository.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo Repo;
	public List<UserModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	UserModel SaveDetails(UserModel e)
	{
		return Repo.save(e);
	}
	/*public UserModel updateDetails(Long id, UserModel e1)
	{
		UserModel modelx = Repo.findById(id).orElse(null);
		if(modelx !=null) {
			modelx.setuserid(e1.getuserid());
			modelx.setquestionid(e1.getquestionid());
			modelx.setselectedoption(e1.getselectedoption());
			
			return Repo.saveAndFlush(modelx);
		}
		else {
			return null;
		}
	}*/
    public void deleteDetails(Long id)
    {
    	Repo.deleteById(id);
    }
}