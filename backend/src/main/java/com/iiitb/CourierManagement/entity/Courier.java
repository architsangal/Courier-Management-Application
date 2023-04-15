package com.iiitb.CourierManagement.entity;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Courier {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int courierID;

    private String owner;

    private String courierCompany;

    @Basic
    private Date arrivalDate;

    @Basic
    private Time arrivalTime;

    private String ownerRollNo;

    private String receiverName;
    private String receiverRollNo;

    @Basic
    private Date deliverDate;

    @Basic
    private Time deliverTime;

    private String status;

    public String getCourierCompany() {
        return courierCompany;
    }

    public void setCourierCompany(String courierCompany) {
        this.courierCompany = courierCompany;
    }

    public Date getDeliverDate() {
        return deliverDate;
    }

    public void setDeliverDate(Date deliverDate) {
        this.deliverDate = deliverDate;
    }

    public Time getDeliverTime() {
        return deliverTime;
    }

    public void setDeliverTime(Time deliverTime) {
        this.deliverTime = deliverTime;
    }

    public int getCourierID() {
        return courierID;
    }

    public void setCourierID(int courierID) {
        this.courierID = courierID;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Date getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(Date arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public Time getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Time arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getOwnerRollNo() {
        return ownerRollNo;
    }

    public void setOwnerRollNo(String ownerRollNo) {
        this.ownerRollNo = ownerRollNo;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getReceiverRollNo() {
        return receiverRollNo;
    }

    public void setReceiverRollNo(String receiverRollNo) {
        this.receiverRollNo = receiverRollNo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
