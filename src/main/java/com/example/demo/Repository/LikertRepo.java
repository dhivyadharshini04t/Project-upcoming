package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.LikertModel;
@Repository
public interface LikertRepo extends JpaRepository<LikertModel,Long>{

}

