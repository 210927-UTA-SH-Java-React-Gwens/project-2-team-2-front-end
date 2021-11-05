package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.services.MessageService;

@RestController
@RequestMapping(value="/message")
public class MessageController {
	
	private MessageService mServ;

	@Autowired
	public MessageController(MessageService m) {
		this.mServ = m;
	}

}
