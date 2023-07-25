package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.RadioModel;
import com.example.demo.Repository.RadioRepo;

@Service
public class RadioService {
	@Autowired
	RadioRepo Repo;
	public List<RadioModel> getDetails()
	{
		return Repo.findAll();
	}
	public 	RadioModel SaveDetails(RadioModel e)
	{
		return Repo.save(e);
	}
	public RadioModel updateDetails(Long id, RadioModel e1)
	{
		RadioModel modelx = Repo.findById(id).orElse(null);
		if(modelx !=null) {
			modelx.setuserid(e1.getuserid());
			modelx.setquestion(e1.getquestion());
			modelx.setoption1(e1.getoption1());
			modelx.setoption2(e1.getoption2());
			modelx.setoption3(e1.getoption3());
			modelx.setoption4(e1.getoption4());
			
			
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