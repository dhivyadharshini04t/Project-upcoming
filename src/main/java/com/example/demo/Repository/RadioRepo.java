package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.RadioModel;
@Repository
public interface RadioRepo extends JpaRepository<RadioModel,Long>{

}

