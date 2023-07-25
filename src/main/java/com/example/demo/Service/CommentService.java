package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CommentModel;
import com.example.demo.Model.UserCommentModel;
import com.example.demo.Repository.CommentRepo;

@Service
public class CommentService {
	@Autowired
	CommentRepo Repo;
	public List<CommentModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	CommentModel SaveDetails(CommentModel e)
	{
		return Repo.save(e);
	}
	public CommentModel updateDetails(Long id, CommentModel e1)
	{
		CommentModel modelx = Repo.findById(id).orElse(null);
		if(modelx !=null) {
			modelx.setquestionid(e1.getquestionid());
			modelx.setuserid(e1.getuserid());
			modelx.setenteryourquestion(e1.getenteryourquestion());
			modelx.setanswer(e1.getanswer());
			
			
			return Repo.saveAndFlush(modelx);
		}
		else {
			return null;
		}
	}
    public void deleteDetails(Long id)
    {
    	Repo.deleteById(id);
    }
	public void saveUserComment(UserCommentModel comment) {
		// TODO Auto-generated method stub
		
	}
}