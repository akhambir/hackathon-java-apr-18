package com.hackathon.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hackathon.model.User;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.util.Optional;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        try {
            BufferedReader reader = request.getReader();
            StringBuffer stringBuffer = new StringBuffer();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuffer.append(line);
            }
            String parsedReq = stringBuffer.toString();
            if (parsedReq != null) {
                ObjectMapper mapper = new ObjectMapper();
                User user = mapper.readValue(parsedReq, User.class);
                return new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
            }
        } catch (Exception e) {
            throw new InternalAuthenticationServiceException("Failed to parse authentication request body");
        }

        return null;
    }
}
