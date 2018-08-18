package com.hackathon.service;

import com.hackathon.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    Optional<List<Category>> getAll();

    Optional<Category> getById(Long id);
}
