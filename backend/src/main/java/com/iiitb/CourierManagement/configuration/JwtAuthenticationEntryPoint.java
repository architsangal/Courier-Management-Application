package com.iiitb.CourierManagement.configuration;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.io.IOException;


//This is a Java class that provides an implementation of the
//AuthenticationEntryPoint interface for handling unauthorized access
//to a secured resource in a Spring Security-enabled application.

//The AuthenticationEntryPoint interface provides a single
//method, commence(), which is called when an unauthenticated user
//attempts to access a secured resource.
//The method takes three arguments:
//1. the HttpServletRequest containing the request,
//2. the HttpServletResponse containing the response, and an
//3. AuthenticationException containing the authentication exception that occurred.
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

//    the commence() method sends an HTTP error response with the
//    status code HttpServletResponse.SC_UNAUTHORIZED and the
//    message "Unauthorized" using the sendError() method of the
//    HttpServletResponse object. This indicates that the user is
//    not authorized to access the requested resource.
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {

        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
    }
}
