package com.hackathon.service;

import com.hackathon.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Optional<Product> getById(Long id);

    Optional<List<Product>> getAllByCategoryId(Long id);

}
