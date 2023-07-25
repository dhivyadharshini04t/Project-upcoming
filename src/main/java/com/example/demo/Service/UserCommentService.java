package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.UserCommentModel;
import com.example.demo.Repository.UserCommentRepo;

@Service
public class UserCommentService {
	@Autowired
	UserCommentRepo Repo;
	public List<UserCommentModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	UserCommentModel SaveDetails(UserCommentModel e)
	{
		return Repo.save(e);
	}
	/*public UserCommentModel updateDetails(Long id, UserCommentModel e1)
	{
		UserCommentModel modelx = Repo.findById(id).orElse(null);
		if(modelx !=null) {
		
			modelx.setquestionsid(e1.getquestionsid());
			modelx.setanswers(e1.getanswers());
			
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