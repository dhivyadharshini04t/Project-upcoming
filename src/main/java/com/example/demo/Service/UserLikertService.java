package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.UserLikertModel;
import com.example.demo.Repository.UserLikertRepo;

@Service
public class UserLikertService {
	@Autowired
	UserLikertRepo Repo;
	public List<UserLikertModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	UserLikertModel SaveDetails(UserLikertModel e)
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