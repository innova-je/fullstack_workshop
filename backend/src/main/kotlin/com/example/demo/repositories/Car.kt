package com.example.demo.repositories

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("cars_container")
data class Car(
    @Id
    val name: String,
    val price: Float,
    val shortDescription: String,
    val longDescription: String
)