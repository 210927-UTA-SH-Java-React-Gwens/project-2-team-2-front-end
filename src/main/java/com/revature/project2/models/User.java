package com.revature.project2.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="username", nullable=false, unique=true)
	private String username;
	
	@Column(name="email", nullable=false, unique=true)
	private String email;
	
	@Column(name="funds", nullable=false)
	private int funds = 0;
	
	@Column(name="password", nullable=false)
	private String password;
	
	
	
	@OneToMany(mappedBy="poster", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Listing> listings;
	
	@ManyToMany(mappedBy="watchers")
	@JsonIgnore
	private List<Listing> bookmarks;
	
	@OneToMany(mappedBy="purchaser")
	@JsonIgnore
	private List<Listing> purchases;
	
	@OneToMany(mappedBy="id")
	@JsonIgnore
	private List<Message> sent_messages;
	
	@OneToMany(mappedBy="id")
	@JsonIgnore
	private List<Message> received_messages;

	public User() {
		super();
	}
	
	public User(int id, String username, String email, int funds, String password, List<Listing> listings,
			List<Listing> bookmarks, List<Listing> purchases, List<Message> sent_messages,
			List<Message> received_messages) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.funds = funds;
		this.password = password;
		this.listings = listings;
		this.bookmarks = bookmarks;
		this.purchases = purchases;
		this.sent_messages = sent_messages;
		this.received_messages = received_messages;
	}
	
	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getFunds() {
		return funds;
	}

	public void setFunds(int funds) {
		this.funds = funds;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Listing> getListings() {
		return listings;
	}

	public void setListings(List<Listing> listings) {
		this.listings = listings;
	}

	public List<Listing> getBookmarks() {
		return bookmarks;
	}

	public void setBookmarks(List<Listing> bookmarks) {
		this.bookmarks = bookmarks;
	}

	public List<Listing> getPurchases() {
		return purchases;
	}

	public void setPurchases(List<Listing> purchases) {
		this.purchases = purchases;
	}
	
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Message> getSent_messages() {
		return sent_messages;
	}

	public void setSent_messages(List<Message> sent_messages) {
		this.sent_messages = sent_messages;
	}

	public List<Message> getReceived_messages() {
		return received_messages;
	}

	public void setReceived_messages(List<Message> received_messages) {
		this.received_messages = received_messages;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", email=" + email + ", funds=" + funds + ", password="
				+ password + ", listings=" + listings + ", bookmarks=" + bookmarks + ", purchases=" + purchases
				+ ", sent_messages=" + sent_messages + ", received_messages=" + received_messages + "]";
	}

	

	
	
	
}
