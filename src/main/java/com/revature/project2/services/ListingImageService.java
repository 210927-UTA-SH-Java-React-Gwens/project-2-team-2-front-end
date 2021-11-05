package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.repository.ListingImageRepo;

@Service
public class ListingImageService {
	
private ListingImageRepo liDao;
	
	@Autowired
	public ListingImageService(ListingImageRepo li) {
		this.liDao = li;
	}

}
