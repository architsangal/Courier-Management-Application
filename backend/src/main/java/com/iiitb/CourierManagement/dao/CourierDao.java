package com.iiitb.CourierManagement.dao;

import com.iiitb.CourierManagement.entity.Courier;
import org.springframework.data.repository.CrudRepository;

public interface CourierDao extends CrudRepository<Courier,Integer> {
}
