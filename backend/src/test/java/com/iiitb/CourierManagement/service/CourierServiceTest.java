package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.CourierDao;
import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.Courier;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.sql.Time;
import java.util.Optional;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
//@SpringBootTest
class CourierServiceTest {

    @Mock
    private CourierDao courierDao;

    @Mock
    private UserDao userDao;

    private CourierService courierService;

    @BeforeEach
    void setUp() {
        this.courierService = new CourierService(this.courierDao, this.userDao);
//        Courier courier = new Courier();
//        courier.setOwner("Aditya Vardhan");
//        courier.setCourierCompany("Amazon");
//        courier.setArrivalDate(Date.valueOf("2023-04-14"));
//        courier.setArrivalTime(Time.valueOf("19:50:30"));
//        courier.setOwnerRollNo("IMT2019003");
//        courierDao.save(courier);
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

//    @Test
//    void updateCourier() {
//        Courier courier = new Courier();
//        courier.setOwner("Aditya Vardhan");
//        courier.setCourierCompany("Amazon");
//        courier.setArrivalDate(Date.valueOf("2023-04-14"));
//        courier.setArrivalTime(Time.valueOf("19:50:30"));
//        courier.setOwnerRollNo("IMT2019003");
////        courierDao.save(courier);
////        Optional<Courier> optionalCourier1 = Optional.of(courier);
////        when(courierDao.findById(1)).thenReturn(optionalCourier1);
////        Optional<Courier> optionalCourier2 = Optional.of(courier);
////        when(optionalCourier1.get()).thenReturn(optionalCourier2);
////        Courier c = courierDao.findById(courier.getCourierID()).get();
////        System.out.println(c);
//        Courier cour = new Courier();
//        cour.setCourierID(1);
//        cour.setReceiverName("Archit Sangal");
//        cour.setReceiverRollNo("IMT2019012");
//        cour.setDeliverDate(Date.valueOf("2023-04-14"));
//        cour.setDeliverTime(Time.valueOf("22:26:00"));
//        cour.setStatus("COMPLETE");
//
//        Courier c = new Courier();
//        c.setOwner("Aditya Vardhan");
//        c.setCourierCompany("Amazon");
//        c.setArrivalDate(Date.valueOf("2023-04-14"));
//        c.setArrivalTime(Time.valueOf("19:50:30"));
//        c.setOwnerRollNo("IMT2019003");
//        c.setCourierID(1);
//        c.setReceiverName("Archit Sangal");
//        c.setReceiverRollNo("IMT2019012");
//        c.setDeliverDate(Date.valueOf("2023-04-14"));
//        c.setDeliverTime(Time.valueOf("22:26:00"));
//        c.setStatus("COMPLETE");
//
//
//        Optional<Courier> optionalCourier2 = Optional.of(cour);
//
////        when(courierDao.save()).thenReturn(cour);
//        given(courierDao.save(c)).willReturn(c);
//        Optional<Courier> optionalCourier1 = Optional.of(courier);
//        when(courierDao.findById(1)).thenReturn(optionalCourier1);
//        given(courierDao.findById(1).get()).willReturn(courier);
//        courierService.updateCourier(cour);
//
//
////        try {
////            System.out.println(courierService.getClass().getMethod("updateCourier",cour.getClass()));
////            courierService.updateCourier(cour);
////        }
////        catch(NoSuchMethodException e) {
////            System.out.println(e.toString());
////        }
//
////        verify(courierDao).save(cour);
//    }
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