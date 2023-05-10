package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.CourierDao;
import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.Courier;
import com.iiitb.CourierManagement.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.sql.Time;
import java.util.Optional;

import static org.mockito.BDDMockito.given;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

//@SpringBootTest
@ExtendWith(MockitoExtension.class)
class CourierServiceTest {

    @Mock
    private CourierDao courierDao;

    @Mock
    private UserDao userDao;

    private CourierService courierService;

    @BeforeEach
    void setUp() {
        courierService = new CourierService(courierDao, userDao);
//        this.courierService = new CourierService();
    }

    @Test
    void TestAddCourier() {
        Courier courier = new Courier();
        courier.setOwner("Aditya Vardhan");
        courier.setCourierCompany("Amazon");
        courier.setArrivalDate(Date.valueOf("2023-04-14"));
        courier.setArrivalTime(Time.valueOf("19:50:30"));
        courier.setOwnerRollNo("IMT2019003");

        courierService.addCourier(courier);
        verify(courierDao).save(courier);
    }

    @Test
    void updateCourier() {
        Courier courier = new Courier();
        courier.setOwner("Aditya Vardhan");
        courier.setCourierCompany("Amazon");
        courier.setArrivalDate(Date.valueOf("2023-04-14"));
        courier.setArrivalTime(Time.valueOf("19:50:30"));
        courier.setOwnerRollNo("IMT2019003");
        courier.setCourierID(1);

        Courier cour = new Courier();
        cour.setCourierID(1);
        cour.setReceiverName("Archit Sangal");
        cour.setReceiverRollNo("IMT2019012");
        cour.setDeliverDate(Date.valueOf("2023-04-14"));
        cour.setDeliverTime(Time.valueOf("22:26:00"));
        cour.setStatus("COMPLETE");

        Courier c = new Courier();
        c.setOwner("Aditya Vardhan");
        c.setCourierCompany("Amazon");
        c.setArrivalDate(Date.valueOf("2023-04-14"));
        c.setArrivalTime(Time.valueOf("19:50:30"));
        c.setOwnerRollNo("IMT2019003");
        c.setCourierID(1);
        c.setReceiverName("Archit Sangal");
        c.setReceiverRollNo("IMT2019012");
        c.setDeliverDate(Date.valueOf("2023-04-14"));
        c.setDeliverTime(Time.valueOf("22:26:00"));
        c.setStatus("COMPLETE");


        doReturn(Optional.of(cour)).when(courierDao).findById(1);
        when(courierDao.save(eq(cour))).thenReturn(c);
        Courier result = courierService.updateCourier(cour);
        assertEquals(result,c);
    }
//
//    @Test
//    void deleteCourier() {
//    }
//
//    @Test
//    void getAllCouriers() {
//    }
//
//    @Test
//    void getCouriersByRollNo() {
//    }
//
//    @Test
//    void getCouriersByName() {
//    }
}