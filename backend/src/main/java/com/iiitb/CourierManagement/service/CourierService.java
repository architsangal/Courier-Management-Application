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
}
