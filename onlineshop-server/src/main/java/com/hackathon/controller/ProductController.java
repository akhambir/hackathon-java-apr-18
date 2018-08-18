package com.hackathon.controller;

import com.hackathon.model.Product;
import com.hackathon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/product/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getById(@PathVariable String id) {
        return productService.getById(Long.valueOf(id))
                .map(ResponseEntity::ok)
                .orElseGet(ResponseEntity.notFound()::build);
    }
}
