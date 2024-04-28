package com.app.zenzone.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService getDetailsService() {
        return new CustomUserDetailsService();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(getDetailsService());
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        return daoAuthenticationProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> requests
                        .requestMatchers("/", "/about", "/contact", "/register", "/signin", "/saveUser", "/error")
                        .permitAll()
                        .anyRequest().authenticated())
                .formLogin(login -> {
                    try {
                        login.loginPage("/userlogin").loginProcessingUrl("/login")
                                .defaultSuccessUrl("/dashboard.html").permitAll()
                                .failureUrl("/invalid")
                                .and()
                                .logout(logout -> logout.logoutSuccessUrl("/userlogout").logoutUrl("/logout")
                                        .permitAll());

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                });

        return http.build();
    }
}
