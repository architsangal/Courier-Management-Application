package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.CourierDao;
import com.iiitb.CourierManagement.entity.Courier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourierService {

    @Autowired
    private CourierDao courierDao;

    public Courier addCourier(Courier courier) {
        courier.setStatus("ACTIVE");
        return courierDao.save(courier);
    }
}
