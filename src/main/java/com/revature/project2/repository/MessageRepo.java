package com.revature.project2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.project2.models.Message;

@Repository
public interface MessageRepo extends JpaRepository <Message, Integer> {

}
