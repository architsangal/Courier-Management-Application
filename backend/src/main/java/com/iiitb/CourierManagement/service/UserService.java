package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.RoleDao;
import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.Role;
import com.iiitb.CourierManagement.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailSenderService emailSenderService;

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        String OTP = getSixDigitOTP();
        user.setStatus("NOT_VERIFIED");
        user.setOTP(OTP);

        emailSenderService
                .sendSimpleEmail(
                user.getMailID(),
                "Your mail verification OTP for registering to IIIT-B couriers app is " + OTP,
                "Verification OTP (IIIT-B couriers)");

        return userDao.save(user);
    }

    public User verifyMail(String mailID, String OTP) {
        User user = userDao.findByMailID(mailID);
        if(user.getStatus().equals("VERIFIED")) {
            return null;
        }
        if(user.getOTP().equals(OTP)) {
            user.setStatus("VERIFIED");
            userDao.save(user);
            return user;
        }
        return null;
    }

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");

        adminUser.setStatus("VERIFIED");

        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

        User user = new User();
        user.setUserName("IMT2019012");
        user.setUserPassword(getEncodedPassword("archit@123"));
        user.setUserFirstName("Archit");
        user.setUserLastName("Sangal");

        user.setStatus("VERIFIED");
        user.setMailID("archit.sangal@iiitb.ac.in");
        user.setOTP(getSixDigitOTP());

        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userDao.save(user);
    }

    public String getSixDigitOTP() {
        // It will generate 6 digit random Number.
        // from 0 to 999999
        Random rnd = new Random();
        int number = rnd.nextInt(999999);

        // this will convert any number sequence into 6 character.
        return String.format("%06d", number);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
