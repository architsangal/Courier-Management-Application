package com.iiitb.CourierManagement.dao;

import com.iiitb.CourierManagement.entity.Courier;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface CourierDao extends CrudRepository<Courier,Integer> {
    Set<Courier> findByOwnerRollNo(String rollNo);
}
