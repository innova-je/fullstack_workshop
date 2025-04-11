package com.example.demo.controllers

import com.example.demo.controllers.models.CreateCarInput
import com.example.demo.services.CustomService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class Controller(private val service: CustomService) {

    @PostMapping("/rest/cars")
    fun createCar(
        @RequestBody carCreation: CreateCarInput
    ): ResponseEntity<*> {
        val car = service.createCar(carCreation)
        return ResponseEntity.status(201).body(car)
    }

    @GetMapping("/rest/cars/{cid}")
    fun getCarById(
        @PathVariable cid: String
    ): ResponseEntity<*> {
        val car = service.getCarById(cid)
        return ResponseEntity.status(200).body(car)
    }

    @GetMapping("/rest/cars")
    fun getAllCars(): ResponseEntity<*> {
        val cars = service.getCars()
        return ResponseEntity.ok(cars)
    }

    @DeleteMapping("/rest/cars/{cid}")
    fun deleteCarById(
        @PathVariable cid: String
    ): ResponseEntity<*> {
        service.deleteCarById(cid)
        return ResponseEntity.ok(cid)
    }
}