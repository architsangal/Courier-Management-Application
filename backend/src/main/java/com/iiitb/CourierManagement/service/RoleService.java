package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.RoleDao;
import com.iiitb.CourierManagement.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
    @Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
