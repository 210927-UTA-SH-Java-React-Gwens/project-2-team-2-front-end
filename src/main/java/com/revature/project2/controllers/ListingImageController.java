package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project2.services.ListingImageService;

@RestController
@RequestMapping(value="/listingimage")
public class ListingImageController {

	private ListingImageService liServ;

	@Autowired
	public ListingImageController(ListingImageService li) {
		this.liServ = li;
	}
	
}
