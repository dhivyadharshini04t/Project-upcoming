package com.example.demo.Model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="likert")
public class LikertModel {
	@Id
	
	
	private Long id;
	private String likertquestion;
	private String likertoption1;
	private String likertoption2;
	private String likertoption3;
	private String likertoption4;
	public Long getid() {
		return id;
	}


	public void setid(Long id) {
		this.id = id;
	}


	public String getlikertquestion() {
		return likertquestion;
	}


	public void setlikertquestion(String likertquestion) {
		this.likertquestion = likertquestion;
	}


	public String getlikertoption1() {
		return likertoption1;
	}


	public void setlikertoption1(String likertoption1) {
		this.likertoption1 = likertoption1;
	}


	public String getlikertoption2() {
		return likertoption2;
	}


	public void setlikertoption2(String likertoption2) {
		this.likertoption2 = likertoption2;
	}


	public String getlikertoption3() {
		return likertoption3;
	}


	public void setlikertoption3(String likertoption3) {
		this.likertoption3 = likertoption3;
	}


	public String getlikertoption4() {
		return likertoption4;
	}


	public void setlikertoption4(String likertoption4) {
		this.likertoption4 = likertoption4;
	}

	

	public LikertModel(Long id, String likertquestion, String likertoption1, String likertoption2, String likertoption3,
			String likertoption4) {
		super();
		this.id = id;
		this.likertquestion = likertquestion;
		this.likertoption1 = likertoption1;
		this.likertoption2 = likertoption2;
		this.likertoption3 = likertoption3;
		this.likertoption4 = likertoption4;
	}


	public LikertModel()
	{
		
	}
}