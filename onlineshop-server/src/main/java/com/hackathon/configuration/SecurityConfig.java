package com.hackathon.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Qualifier("dataSource")
    @Autowired
    private DataSource dataSource;

    @Autowired
    private BCryptPasswordEncoder encoder;

    protected void configure(AuthenticationManagerBuilder authentication)
            throws Exception {

        authentication.jdbcAuthentication()
                .dataSource(dataSource)
                .passwordEncoder(encoder)
                .usersByUsernameQuery("select email, password, enabled" +
                        " from users where email = ?")
                .authoritiesByUsernameQuery("select email, role_name from roles r" +
                        " join user_to_role utr on r.id = utr.fk_role_id" +
                        " join users u on utr.fk_user_id = u.id where email = ?");
    }

    protected void configure(HttpSecurity http)
            throws Exception {

        http.httpBasic().and().authorizeRequests()
                .antMatchers("/admin/**")
                .hasRole("ADMIN")
                .antMatchers("/**")
                .hasRole("USER").and()
                .csrf().disable()
                .headers()
                .frameOptions().disable();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
