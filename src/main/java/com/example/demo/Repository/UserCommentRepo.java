package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.UserCommentModel;
@Repository
public interface UserCommentRepo extends JpaRepository<UserCommentModel,Long>{

}

