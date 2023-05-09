package com.iiitb.CourierManagement.service;

import com.iiitb.CourierManagement.dao.CourierDao;
import com.iiitb.CourierManagement.dao.UserDao;
import com.iiitb.CourierManagement.entity.Courier;
import com.iiitb.CourierManagement.entity.User;
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

    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private UserDao userDao;

    public CourierService(CourierDao courierDao, UserDao userDao) {
        this.courierDao = courierDao;
        this.userDao = userDao;
    }

    public Courier addCourier(Courier courier) {
        courier.setStatus("ACTIVE");
        String uname = courier.getOwnerRollNo();
        if(uname!=null) {
            User user = userDao.findByUserName(uname);
            if(user!=null) {
                emailSenderService.sendSimpleEmail(user.getMailID(),
                        addCourierMailBody(courier),
                        "Arrival of new courier!");
            }
        }
        return courierDao.save(courier);
    }

    public String addCourierMailBody(Courier courier) {
        String body = "New courier has arrived for you.\n\n";
        body += "Courier details:\n\n";
        if(courier.getOwner()!=null) {
            body += "Owner: "+courier.getOwner()+"\n";
        }

        if(courier.getArrivalDate() !=null) {
            body += "Arrival Date: "+courier.getArrivalDate()+"\n";
        }

        if(courier.getArrivalTime()!=null) {
            body += "Arrival Time: "+courier.getArrivalTime()+"\n";
        }

        if(courier.getOwnerRollNo()!=null) {
            body += "Owner RollNo: "+courier.getOwnerRollNo()+"\n";
        }

        if(courier.getCourierCompany()!=null) {
            body += "Courier Company: "+courier.getCourierCompany()+"\n";
        }
        return body;
    }

    public String updateCourierMailBody(Courier courier) {
        String body = "Your courier has been delivered.\n\n";
        body += "Courier details:\n\n";
        if(courier.getOwner()!=null) {
            body += "Owner: "+courier.getOwner()+"\n";
        }

        if(courier.getArrivalDate() !=null) {
            body += "Arrival Date: "+courier.getArrivalDate()+"\n";
        }

        if(courier.getArrivalTime()!=null) {
            body += "Arrival Time: "+courier.getArrivalTime()+"\n";
        }

        if(courier.getOwnerRollNo()!=null) {
            body += "Owner RollNo: "+courier.getOwnerRollNo()+"\n";
        }

        if(courier.getCourierCompany()!=null) {
            body += "Courier Company: "+courier.getCourierCompany()+"\n";
        }

        if(courier.getReceiverName()!=null) {
            body += "Receiver Name: "+courier.getReceiverName()+"\n";
        }

        if(courier.getReceiverRollNo()!=null) {
            body += "Receiver RollNo: "+courier.getReceiverRollNo()+"\n";
        }

        if(courier.getDeliverDate()!=null) {
            body += "Deliver Date: "+courier.getDeliverDate()+"\n";
        }

        if(courier.getDeliverTime()!=null) {
            body += "Deliver Time: "+courier.getDeliverTime()+"\n";
        }
        return body;
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
            String uname = cour.getOwnerRollNo();
            if(uname!=null) {
                User user = userDao.findByUserName(uname);
                if(user!=null) {
                    emailSenderService.sendSimpleEmail(user.getMailID(),
                            updateCourierMailBody(cour),
                            "Courier Delivered!");
                }
            }
            return courierDao.save(cour);
        }
        return null;
    }

    public void deleteCourier(Courier courier) {
        Courier cour = courierDao.findById(courier.getCourierID()).get();
        courierDao.delete(cour);
    }

    public Set<Courier> getMyCouriers(String jwtToken) {
        String rollNo = jwtUtil.getUsernameFromToken(jwtToken);
        User user = userDao.findByUserName(rollNo);
        if(user.getStatus().equals("NOT_VERIFIED")) {
            return null;
        }
        return courierDao.findByOwnerRollNoContaining(rollNo);
    }

    public Set<Courier> getAllCouriers() {
        Set<Courier> couriers = new HashSet<>();
        courierDao.findAll().forEach(couriers::add);
        return couriers;
    }

    public Set<Courier> getCouriersByRollNo(String rollNo) {
        System.out.println(rollNo);
        Set<Courier> couriers = new HashSet<>();
        System.out.println(courierDao.findByOwnerRollNoContaining(rollNo));
        return courierDao.findByOwnerRollNoContaining(rollNo);
    }

    public Set<Courier> getCouriersByName(String name) {
        Set<Courier> couriers = new HashSet<>();
        return courierDao.findByOwnerContaining(name);
    }
}
