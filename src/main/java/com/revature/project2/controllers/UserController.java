package com.revature.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.models.User;
import com.revature.project2.services.UserService;

@RestController
@RequestMapping(value="/user")
public class UserController {

	private UserService uServ;

	@Autowired
	public UserController(UserService u) {
		this.uServ = u;
	}
	
	@GetMapping("/")
	public List<User> getAll(){
		return uServ.getAllUsers();
	}
	
	@PostMapping("/")
	public User createUser(@RequestBody User u) {
		return uServ.createUser(u);
	}
	
}
