package com.iiitb.CourierManagement.controller;

import com.iiitb.CourierManagement.entity.Courier;
import com.iiitb.CourierManagement.service.CourierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CourierController {

    @Autowired
    private CourierService courierService;

    @PostMapping({"/addCourier"})
    @PreAuthorize("hasRole('Admin')")
    public Courier addCourier(@RequestBody Courier courier) {
        return courierService.addCourier(courier);
    }

    @PostMapping({"/updateCourier"})
    @PreAuthorize("hasRole('Admin')")
    public Courier updateCourier(@RequestBody Courier courier) {
        return courierService.updateCourier(courier);
    }
}
