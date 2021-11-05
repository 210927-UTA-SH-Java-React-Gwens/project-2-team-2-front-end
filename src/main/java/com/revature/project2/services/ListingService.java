package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.repository.ListingRepo;

@Service
public class ListingService {
	
private ListingRepo lDao;
	
	@Autowired
	public ListingService(ListingRepo l) {
		this.lDao = l;
	}

}
