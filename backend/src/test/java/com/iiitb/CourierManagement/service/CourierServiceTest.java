package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.CourierDao;
import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.Courier;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.sql.Date;
import java.sql.Time;
import static org.mockito.Mockito.verify;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class CourierServiceTest {

    @Mock
    private CourierDao courierDao;

    @Mock
    private UserDao userDao;

    private CourierService courierService;

    @BeforeEach
    void setUp() {
        this.courierService = new CourierService(this.courierDao, this.userDao);
    }

    @Test
    void addCourierTruePositive() {
        Courier courier = new Courier();
        courier.setOwner("Aditya Vardhan");
        courier.setCourierCompany("Amazon");
        courier.setArrivalDate(Date.valueOf("2023-04-14"));
        courier.setArrivalTime(Time.valueOf("19:50:30"));
        courier.setOwnerRollNo("IMT2019003");

        courierService.addCourier(courier);
        verify(courierDao).save(courier);
    }
}