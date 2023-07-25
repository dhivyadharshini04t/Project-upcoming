package com.example.demo.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "userscom")
public class UserCommentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    	private Long id;
		private Long userid;
        private String enteryourquestion;
        private String answer;

  

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
	public String getenteryourquestion() {
		return enteryourquestion;
	}
	public void setenteryourquestion(String enteryourquestion) {
		this.enteryourquestion = enteryourquestion;
	}
	public String getanswer() {
		return answer;
	}
	public void setanswer(String answer) {
		this.answer = answer;
	}
	public UserCommentModel(Long id, Long userid, String enteryourquestion, String answer) {
		super();
		this.id = id;
		this.userid = userid;
		this.enteryourquestion = enteryourquestion;
		this.answer = answer;
	}
	
	public UserCommentModel(){
	
	}
    }
