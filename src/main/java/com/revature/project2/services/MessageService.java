package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.repository.MessageRepo;

@Service
public class MessageService {
	
private MessageRepo mDao;
	
	@Autowired
	public MessageService(MessageRepo m) {
		this.mDao = m;
	}

}
