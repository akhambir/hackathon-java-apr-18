package com.hackathon.controller;

import com.hackathon.model.Product;
import com.hackathon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/product/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getById(@PathVariable Long id) {
        return productService.getById(id)
                .map(ResponseEntity::ok)
                .orElseGet(ResponseEntity.notFound()::build);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/products/categoryId/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> getAllByCategoriesId(@PathVariable Long id) {
        return productService.getAllByCategoryId(id)
                .map(ResponseEntity::ok)
                .orElseGet(ResponseEntity.notFound()::build);
    }
}
