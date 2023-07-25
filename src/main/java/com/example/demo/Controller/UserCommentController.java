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

import com.example.demo.Model.UserCommentModel;
import com.example.demo.Model.UserLikertModel;
import com.example.demo.Service.UserCommentService;
@RestController
@CrossOrigin(origins = "*")
public class UserCommentController {
    @Autowired(required = true)
    UserCommentService Service;

    @PostMapping("/addUserCommentDetails")
    public String addInfo(@RequestBody List<UserCommentModel> userList) {
        try {
            for (UserCommentModel st : userList) {
                Service.SaveDetails(st);
            }
            return "Successfully added user details.";
        } catch (Exception e) {
            return "Failed to add user details. Error: " + e.getMessage();
        }
    }

   
  @GetMapping("showUserCommentDetails")
  public List<UserCommentModel> fetchDetails() {
    return Service.getDetails();
  }
  
  /*@PutMapping("/updateUserDetails/{id}")
  public UserModel updateInfo(@RequestBody UserModel st1, @PathVariable Long id) {
    return Service.updateDetails(id, st1);
  }
*/
  @DeleteMapping("/deleteUserCommentDetails/{id}")
  public String deleteInfo(@PathVariable Long id) {
    Service.deleteDetails(id);
    return "Deleted details";
  }
}
