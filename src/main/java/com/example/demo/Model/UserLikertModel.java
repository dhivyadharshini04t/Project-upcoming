package com.example.demo.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "likertuser")
public class UserLikertModel {
	
    @Id
    private Long questionsid;
    private String selectedoptions; 
   
	public Long getquestionsid() {
		return questionsid;
	}
	public void setquestionsid(Long questionsid) {
		this.questionsid = questionsid;
	}


	public String getSelectedoptions() {
		return selectedoptions;
	}
	public void setselectedoptions(String selectedoptions) {
		this.selectedoptions = selectedoptions;
	}
    public UserLikertModel(Long questionsid, String selectedoptions) {
		super();
		this.questionsid = questionsid;
		this.selectedoptions = selectedoptions;
	}
	public UserLikertModel()
	{
		
	}
}