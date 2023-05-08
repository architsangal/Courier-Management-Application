package com.iiitb.CourierManagement.controller;

import com.iiitb.CourierManagement.dao.RoleDao;
import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.Role;
import com.iiitb.CourierManagement.entity.User;
import com.iiitb.CourierManagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        logger.info("[TYPE] incoming"+" [METHOD] POST"+ " [API_NAME] registerNewUser"+ " [CALLER] "+user.getUserName()+ " [STATUS] ACCEPT");
        User u = userService.registerNewUser(user);
        logger.info("[TYPE] outgoing"+" [METHOD] POST"+ " [API_NAME] registerNewUser"+ " [CALLER] "+user.getUserName()+ " [STATUS] SUCCESS");
        return u;
    }

}
