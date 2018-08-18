package com.hackathon.dao;

import com.hackathon.model.Product;
import com.hackathon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<Product> getAll();
}
