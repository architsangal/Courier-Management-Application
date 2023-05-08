package com.iiitb.CourierManagement;

import com.iiitb.CourierManagement.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import javax.mail.MessagingException;

@SpringBootApplication
public class CourierManagementApplication {

//	@Autowired
//	private EmailSenderService service;

	public static void main(String[] args) {
		SpringApplication.run(CourierManagementApplication.class, args);
	}

//	@EventListener(ApplicationReadyEvent.class)
//	public void triggerMail() throws MessagingException {
//
//		service.sendSimpleEmail(
//				"vardhan.av2000@gmail.com",
//				"Hey bro!",
//				"test mail");
//
//	}
}
