package com.hackathon.service;

import com.hackathon.model.Product;

import java.util.Optional;

public interface ProductService {

    Optional<Product> getById(Long id);
}
