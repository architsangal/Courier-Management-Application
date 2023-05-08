package com.iiitb.CourierManagement.controller;

import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.JwtRequest;
import com.iiitb.CourierManagement.entity.JwtResponse;
import com.iiitb.CourierManagement.entity.User;
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

    @Autowired
    private UserDao userDao;

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping({"/authenticate"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        String uname = jwtRequest.getUserName();
        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] authenticate"+ " [CALLER] "+uname+ " [STATUS] ACCEPT");
        User user = userDao.findByUserName(uname);
        if(user.getStatus().equals("NOT_VERIFIED")) {
            return null;
        }
        JwtResponse j = jwtService.createJwtToken(jwtRequest);
        logger.info("[TYPE] outgoing"+" [METHOD] POST"+ " [API_NAME] authenticate"+ " [CALLER] "+uname+ " [STATUS] SUCCESS");
        return j;
    }
}
