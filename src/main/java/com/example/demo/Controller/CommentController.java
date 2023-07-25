package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.CommentModel;
import com.example.demo.Service.CommentService;

@RestController
@CrossOrigin(origins = "*")
public class CommentController {
  @Autowired(required = true)
  CommentService Service;

  @PostMapping("/addComDetails")
  public CommentModel addInfo(@RequestBody CommentModel st) {
    return Service.SaveDetails(st);
  }

  @GetMapping("/showComDetails")
  public List<CommentModel> fetchDetails() {
    return Service.getDetails();
  }

  @PutMapping("/updateComDetails/{id}")
  public CommentModel updateInfo(@RequestBody CommentModel st1, @PathVariable Long id) {
    return Service.updateDetails(id, st1);
  }

  @DeleteMapping("/deleteComDetails/{id}")
  public String deleteInfo(@PathVariable Long id) {
    Service.deleteDetails(id);
    return "Deleted details";
  }

}
