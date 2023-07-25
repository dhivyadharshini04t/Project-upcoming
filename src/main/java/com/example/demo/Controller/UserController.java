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

import com.example.demo.Model.UserModel;
import com.example.demo.Service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
  @Autowired(required = true)
  UserService Service;
  
  @PostMapping("/addUserDetails")
  public String addInfo(@RequestBody List<UserModel> userList) {
      try {
          for (UserModel st : userList) {
              Service.SaveDetails(st);
          }
          return "Successfully added user details.";
      } catch (Exception e) {
          return "Failed to add user details. Error: " + e.getMessage();
      }
  }


  @GetMapping("showUserDetails")
  public List<UserModel> fetchDetails() {
    return Service.getDetails();
  }
  
  /*@PutMapping("/updateUserDetails/{id}")
  public UserModel updateInfo(@RequestBody UserModel st1, @PathVariable Long id) {
    return Service.updateDetails(id, st1);
  }
*/
  @DeleteMapping("/deleteUserDetails/{id}")
  public String deleteInfo(@PathVariable Long id) {
    Service.deleteDetails(id);
    return "Deleted details";
  }
}
