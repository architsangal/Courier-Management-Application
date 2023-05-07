package com.iiitb.CourierManagement.controller;

import com.iiitb.CourierManagement.entity.JwtRequest;
import com.iiitb.CourierManagement.entity.JwtResponse;
import com.iiitb.CourierManagement.service.JwtService;
import com.iiitb.CourierManagement.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class JwtController {

    @Autowired
    private JwtService jwtService;

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping({"/authenticate"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] authenticate"+ " [CALLER] "+jwtRequest.getUserName()+ " [STATUS] ACCEPT");
        JwtResponse j = jwtService.createJwtToken(jwtRequest);
        logger.info("[TYPE] outgoing"+" [METHOD] POST"+ " [API_NAME] authenticate"+ " [CALLER] "+jwtRequest.getUserName()+ " [STATUS] SUCCESS");
        return j;
    }
}
