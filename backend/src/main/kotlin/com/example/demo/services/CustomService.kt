package com.example.demo.services

import com.example.demo.controllers.models.CreateCarInput
import com.example.demo.controllers.models.CreateCarOutput
import com.example.demo.controllers.models.CarOutput
import com.example.demo.controllers.models.CarWithoutNameOutput
import com.example.demo.repositories.CustomRepository
import com.example.demo.repositories.Car
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class CustomService(@Autowired val repo: CustomRepository) {

    fun createCar(input: CreateCarInput): CreateCarOutput {
        repo.insert(Car(
            name = input.name,
            price = input.price,
            shortDescription = input.shortDescription,
            longDescription = input.longDescription,
        ))
        return CreateCarOutput(
            id = input.name
        )
    }

    fun getCarById(cid: String): CarOutput {
        val car = repo.findByIdOrNull(cid)
        if (car == null)
            throw IllegalStateException("Car not found")
        return CarOutput(
            name = car.name,
            price = car.price,
        )
    }

    fun getCars(): Map<String, CarWithoutNameOutput> {
        val cars = mutableMapOf<String, CarWithoutNameOutput>()
        repo.findAll().forEach { car ->
            cars.put(car.name, CarWithoutNameOutput(
                price = car.price.toString(),
                shortDescription = car.shortDescription,
                longDescription = car.longDescription
            )
            )
        }
        return cars
        /*
        can be improved:
        repo.findAll().associate { car ->
            car.name to CarWithoutNameOutput(
                price = car.price.toString(),
                shortDescription = car.shortDescription,
                longDescription = car.longDescription
            )
        }
         */
    }

    fun deleteCarById(cid: String) {
        val car = repo.findByIdOrNull(cid)
        if (car == null)
            throw IllegalStateException("Car not found")
        repo.delete(car)
    }

}