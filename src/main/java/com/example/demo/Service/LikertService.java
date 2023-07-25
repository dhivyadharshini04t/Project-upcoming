package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.LikertModel;
import com.example.demo.Repository.LikertRepo;

@Service
public class LikertService {
	@Autowired
	LikertRepo Repo;
	public List<LikertModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	LikertModel SaveDetails(LikertModel e)
	{
		return Repo.save(e);
	}
	public LikertModel updateDetails(Long id, LikertModel e1)
	{
		LikertModel modelx = Repo.findById(id).orElse(null);
		if(modelx !=null) {
			modelx.setlikertquestion(e1.getlikertquestion());
			modelx.setlikertoption1(e1.getlikertoption1());
			modelx.setlikertoption2(e1.getlikertoption2());
			modelx.setlikertoption3(e1.getlikertoption3());
			modelx.setlikertoption4(e1.getlikertoption4());
			
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
}