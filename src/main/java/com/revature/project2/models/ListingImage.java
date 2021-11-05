package com.revature.project2.models;

import java.util.Arrays;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="listing_images")
public class ListingImage {
	@Id
	@Column(name="li_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "img", nullable = false)
	private byte[] img;
	
	@Column(name = "filetype", nullable = false)
	private String type;
	

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "listing_id")
	private Listing listing;


	public ListingImage() {
		super();
	}


	public ListingImage(byte[] img, String type, Listing listing) {
		super();
		this.img = img;
		this.type = type;
		this.listing = listing;
	}


	public byte[] getImg() {
		return img;
	}


	public void setImg(byte[] img) {
		this.img = img;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public Listing getListing() {
		return listing;
	}

	
	public void setListing(Listing listing) {
		this.listing = listing;
	}

	
	@Override
	public String toString() {
		return "ListingImage [img=" + Arrays.toString(img) + ", type=" + type + ", listing=" + listing + "]";
	}
	
}
