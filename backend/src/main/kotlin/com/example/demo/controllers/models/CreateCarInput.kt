package com.example.demo.controllers.models

data class CreateCarInput(
    val name: String,
    val price: Float,
    val shortDescription: String,
    val longDescription: String
)