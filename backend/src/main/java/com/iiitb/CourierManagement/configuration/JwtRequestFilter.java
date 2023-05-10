package com.iiitb.CourierManagement.configuration;

import com.iiitb.CourierManagement.service.JwtService;
import com.iiitb.CourierManagement.util.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


//The filter is responsible for authenticating requests by extracting
//the JWT from the Authorization header of the HTTP request and
//validating it.
//
//The class extends the OncePerRequestFilter class from Spring,
//which ensures that the filter is only executed once per request.
//
//The class is also annotated with @Component, indicating that
//it is a Spring-managed component that can be injected into other
//components using Spring's dependency injection mechanism.
@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private JwtService jwtService;


//    1. Get the Authorization header from the HTTP request.
//
//    2. Check if the JWT is present and starts with the prefix "Bearer ".
//
//    3. If the JWT is present and valid, extract the username from the
//    token using the JwtUtil bean.
//
//    4. If the username is valid and the user is not already
//    authenticated, load the user details from the JwtService bean.
//
//    5. If the JWT is valid for the user and has not expired,
//    create a new UsernamePasswordAuthenticationToken object
//    and set it in the SecurityContextHolder.
//
//    6. Call filterChain.doFilter() to continue processing the request.

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                System.out.println("Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                System.out.println("JWT Token has expired");
            }
        } else {
            System.out.println("JWT token does not start with Bearer");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails = jwtService.loadUserByUsername(username);

            if (jwtUtil.validateToken(jwtToken, userDetails)) {

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        filterChain.doFilter(request, response);

    }

//    The SecurityContextHolder class is designed to be used
//    as a central repository for storing and retrieving the
//    SecurityContext object, which represents the security-related
//    information for the current user.

}
