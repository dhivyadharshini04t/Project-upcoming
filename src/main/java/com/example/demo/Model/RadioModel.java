package com.example.demo.Model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name = "radio")
public class RadioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userid;
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;

    @OneToMany(mappedBy = "radioModel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<UserModel> userModels;
	
	public Long getid() {
		return id;
	}


	public void setid(Long id) {
		this.id = id;
	}


	public Long getuserid() {
		return userid;
	}


	public void setuserid(Long userid) {
		this.userid = userid;
	}


	public String getquestion() {
		return question;
	}


	public void setquestion(String question) {
		this.question = question;
	}


	public String getoption1() {
		return option1;
	}


	public void setoption1(String option1) {
		this.option1 = option1;
	}


	public String getoption2() {
		return option2;
	}


	public void setoption2(String option2) {
		this.option2 = option2;
	}


	public String getoption3() {
		return option3;
	}


	public void setoption3(String option3) {
		this.option3 = option3;
	}


	public String getoption4() {
		return option4;
	}


	public void setoption4(String option4) {
		this.option4 = option4;
	}

	
	
	public RadioModel(Long id, Long userid, String question, String option1, String option2, String option3,
			String option4) {
		super();
		this.id = id;
		this.userid = userid;
		this.question = question;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
	}


	public RadioModel()
	{
		
	}
}