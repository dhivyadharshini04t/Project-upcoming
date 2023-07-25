package com.example.demo.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "Responsmodel")
public class UserModel {
    private String selectedoption;

    @Id
    private Long questionid;

    @ManyToOne
    @JoinColumn(name = "questionid", insertable = false, updatable = false)
    private RadioModel radioModel;
    
	public Long getQuestionid() {
		return questionid;
	}
	public void setQuestionid(Long questionid) {
		this.questionid = questionid;
	}


	public String getSelectedoption() {
		return selectedoption;
	}


	public void setSelectedoption(String selectedoption) {
		this.selectedoption = selectedoption;
	}
	 
    public UserModel(Long questionid, String selectedoption) {
		super();
		this.questionid = questionid;
		this.selectedoption = selectedoption;
	}
	public UserModel()
	{
		
	}

}
