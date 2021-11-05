package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.services.ListingService;

@RestController
@RequestMapping(value="/listing")
public class ListingController {
	
	private ListingService lServ;

	@Autowired
	public ListingController(ListingService l) {
		this.lServ = l;
	}

}
