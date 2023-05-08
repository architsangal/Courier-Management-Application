package com.iiitb.CourierManagement.dao;

import com.iiitb.CourierManagement.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User,String> {

    User findByUserName(String uname);

    User findByMailID(String mailID);
}
