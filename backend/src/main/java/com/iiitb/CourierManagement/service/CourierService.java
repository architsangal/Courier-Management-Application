package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.CourierDao;
import com.iiitb.CourierManagement.entity.Courier;
import com.iiitb.CourierManagement.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CourierService {

    @Autowired
    private CourierDao courierDao;

    @Autowired
    private JwtUtil jwtUtil;

    public Courier addCourier(Courier courier) {
        courier.setStatus("ACTIVE");
        return courierDao.save(courier);
    }

    public Courier updateCourier(Courier courier) {
        if(courier!=null) {
            Courier cour = courierDao.findById(courier.getCourierID()).get();
            if(courier.getOwner()!=null) {
                cour.setOwner(courier.getOwner());
            }

            if(courier.getArrivalDate() !=null) {
                cour.setArrivalDate(courier.getArrivalDate());
            }

            if(courier.getArrivalTime()!=null) {
                cour.setArrivalTime(courier.getArrivalTime());
            }

            if(courier.getOwnerRollNo()!=null) {
                cour.setOwnerRollNo(courier.getOwnerRollNo());
            }

            if(courier.getReceiverName()!=null) {
                cour.setReceiverName(courier.getReceiverName());
            }

            if(courier.getReceiverRollNo()!=null) {
                cour.setReceiverRollNo(courier.getReceiverRollNo());
            }

            if(courier.getCourierCompany()!=null) {
                cour.setCourierCompany(courier.getCourierCompany());
            }

            if(courier.getDeliverDate()!=null) {
                cour.setDeliverDate(courier.getDeliverDate());
            }

            if(courier.getDeliverTime()!=null) {
                cour.setDeliverTime(courier.getDeliverTime());
            }

            if(courier.getStatus()!=null) {
                cour.setStatus(courier.getStatus());
            }
            return courierDao.save(cour);

        }
        return courierDao.save(courier);
    }

    public void deleteCourier(Courier courier) {
        Courier cour = courierDao.findById(courier.getCourierID()).get();
        courierDao.delete(cour);
    }

    public Set<Courier> getMyCouriers(String jwtToken) {
        String rollNo = jwtUtil.getUsernameFromToken(jwtToken);
        return courierDao.findByOwnerRollNo(rollNo);
    }

    public Set<Courier> getAllCouriers() {
        Set<Courier> couriers = new HashSet<>();
        courierDao.findAll().forEach(couriers::add);
        return couriers;
    }

    public Set<Courier> getCouriersByRollNo(String rollNo) {
        System.out.println(rollNo);
        Set<Courier> couriers = new HashSet<>();
        System.out.println(courierDao.findByOwnerRollNo(rollNo));
        return courierDao.findByOwnerRollNo(rollNo);
    }

    public Set<Courier> getCouriersByName(String name) {
        Set<Courier> couriers = new HashSet<>();
        return courierDao.findByOwnerContaining(name);
    }
}
