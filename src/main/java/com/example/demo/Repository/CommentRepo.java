package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.CommentModel;
@Repository
public interface CommentRepo extends JpaRepository<CommentModel,Long>{

}

