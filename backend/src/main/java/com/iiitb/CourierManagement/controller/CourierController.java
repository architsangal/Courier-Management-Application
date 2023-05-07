package com.iiitb.CourierManagement.controller;

import com.iiitb.CourierManagement.entity.Courier;
import com.iiitb.CourierManagement.service.CourierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin
public class CourierController {

//    Logger logger = LoggerFactory.getLogger(CourierController.class);

    private static Logger logger;

    @PostConstruct
    public void initLogger() {
        logger = LogManager.getLogger(CourierController.class);
    }

    @Autowired
    private CourierService courierService;

    @PostMapping({"/addCourier"})
    @PreAuthorize("hasRole('Admin')")
    public Courier addCourier(@RequestBody Courier courier) {
        logger.info("FATAL ERROR");
        return courierService.addCourier(courier);
    }

    @PostMapping({"/updateCourier"})
    @PreAuthorize("hasRole('Admin')")
    public Courier updateCourier(@RequestBody Courier courier) {
        return courierService.updateCourier(courier);
    }

    @PostMapping({"/deleteCourier"})
    @PreAuthorize("hasRole('Admin')")
    public void deleteCourier(@RequestBody Courier courier, HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        System.out.println(header);
        courierService.deleteCourier(courier);
    }

    @GetMapping({"/getMyCouriers"})
    @PreAuthorize("hasRole('User')")
    public Set<Courier> getMyCouriers(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        return courierService.getMyCouriers(jwtToken);
    }

    @GetMapping({"/getAllCouriers"})
    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    public Set<Courier> getAllCouriers(HttpServletRequest request) {
        return courierService.getAllCouriers();
    }

    @GetMapping({"/getCouriersByRollNo"})
    @PreAuthorize("hasRole('Admin')")
    public Set<Courier> getCouriersByRollNo(@RequestParam String ownerRollNo) {
        System.out.println(courierService.getCouriersByRollNo(ownerRollNo));
        return courierService.getCouriersByRollNo(ownerRollNo);
    }

    @GetMapping({"/getCouriersByName"})
    @PreAuthorize("hasRole('Admin')")
    public Set<Courier> getCouriersByName(@RequestParam String owner) {
        return courierService.getCouriersByName(owner);
    }

}
