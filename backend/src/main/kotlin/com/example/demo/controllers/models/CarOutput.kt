package com.example.demo.controllers.models

data class CarOutput(
    val name: String,
    val price: Float
)

data class CarWithoutNameOutput(
    val price: String,
    val shortDescription: String,
    val longDescription: String,
)