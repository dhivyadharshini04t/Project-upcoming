package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.UserLikertModel;
@Repository
public interface UserLikertRepo extends JpaRepository<UserLikertModel,Long>{

}

