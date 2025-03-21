package com.example.demo.repositories

import org.springframework.data.mongodb.repository.MongoRepository

interface CustomRepository : MongoRepository<Car, String> {

}