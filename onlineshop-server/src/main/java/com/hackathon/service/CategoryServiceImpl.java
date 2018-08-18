package com.hackathon.service;

import com.hackathon.dao.CategoryRepository;
import com.hackathon.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Optional<List<Category>> getAll() {
        return Optional.ofNullable(categoryRepository.findAll());
    }

    @Override
    public Optional<Category> getById(Long id) {
        return Optional.ofNullable(categoryRepository.findOne(id));
    }
}
