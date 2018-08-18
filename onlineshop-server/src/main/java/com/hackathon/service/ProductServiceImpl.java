package com.hackathon.service;

import com.hackathon.dao.ProductRepository;
import com.hackathon.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Optional<Product> getById(Long id) {
        return Optional.ofNullable(productRepository.findOne(id));
    }
}
