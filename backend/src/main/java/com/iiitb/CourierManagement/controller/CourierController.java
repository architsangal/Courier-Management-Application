package com.iiitb.CourierManagement.controller;

import com.iiitb.CourierManagement.entity.Courier;
import com.iiitb.CourierManagement.service.CourierService;
import com.iiitb.CourierManagement.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Set;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin
public class CourierController {

    Logger logger = LoggerFactory.getLogger(CourierController.class);

//    private static Logger logger = LogManager.getLogger(CourierController.class);

    @Autowired
    private CourierService courierService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping({"/addCourier"})
    @PreAuthorize("hasRole('Admin')")
    public Courier addCourier(@RequestBody Courier courier, HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] addCourier"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");
        Courier cour = courierService.addCourier(courier);
        if(cour != null) {
            logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] addCourier"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        }
        else {
            logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] addCourier"+ " [CALLER] "+uname+ " [STATUS] FAILURE");
        }
        return cour;
    }

    @PostMapping({"/updateCourier"})
    @PreAuthorize("hasRole('Admin')")
    public Courier updateCourier(@RequestBody Courier courier, HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] updateCourier"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");
        Courier cour = courierService.updateCourier(courier);
        if(cour != null) {
            logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] updateCourier"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        }
        else {
            logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] updateCourier"+ " [CALLER] "+uname+ " [STATUS] FAILURE");
        }
        return cour;
    }

    @PostMapping({"/deleteCourier"})
    @PreAuthorize("hasRole('Admin')")
    public void deleteCourier(@RequestBody Courier courier, HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] deleteCourier"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");

        courierService.deleteCourier(courier);

        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] deleteCourier"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
    }

    @GetMapping({"/getMyCouriers"})
    @PreAuthorize("hasRole('User')")
    public Set<Courier> getMyCouriers(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getMyCouriers"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");

        Set<Courier> couriers = courierService.getMyCouriers(jwtToken);

        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getMyCouriers"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        return couriers;
    }

    @GetMapping({"/getAllCouriers"})
    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    public Set<Courier> getAllCouriers(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getAllCouriers"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");

        Set<Courier> couriers = courierService.getAllCouriers();

        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getAllCouriers"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        return couriers;
    }

    @GetMapping({"/getCouriersByRollNo"})
    @PreAuthorize("hasRole('Admin')")
    public Set<Courier> getCouriersByRollNo(@RequestParam String ownerRollNo, HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getCouriersByRollNo"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");

        Set<Courier> couriers = courierService.getCouriersByRollNo(ownerRollNo);

        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getCouriersByRollNo"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        return couriers;
    }

    @GetMapping({"/getCouriersByName"})
    @PreAuthorize("hasRole('Admin')")
    public Set<Courier> getCouriersByName(@RequestParam String owner, HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7);
        String uname = jwtUtil.getUsernameFromToken(jwtToken);
        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getCouriersByName"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");

        Set<Courier> couriers = courierService.getCouriersByName(owner);

        logger.info("[TYPE] incoming"+" [METHOD] GET"+ " [API_NAME] getCouriersByName"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        return couriers;
    }

}
