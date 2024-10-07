package com.allinone.backend.common.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.WebSecurityConfigurer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer
import org.springframework.security.config.annotation.web.configurers.*
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter


@Configuration
@EnableWebSecurity
class SecurityConfig {

    @Bean
    @Throws(Exception::class)
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        return http
//            .csrf { it.disable() }
//            .httpBasic { it.disable() }
//            .formLogin { it.disable() }

            .formLogin { formLogin ->
                formLogin
                    .loginPage("/login")
                    .defaultSuccessUrl("/loginOk")
            }
            .logout { logout ->
                logout
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/logoutOk")
                    .invalidateHttpSession(true)
            }
            .addFilterBefore(corsFilter(), UsernamePasswordAuthenticationFilter::class.java)
            .csrf { it.disable() }
            //.addFilter(corsFilter())
            .authorizeHttpRequests {
                it
                    .requestMatchers("/admin/**").hasRole("ADMIN")
                    .requestMatchers("/user/**").authenticated()
                    .anyRequest().anonymous()
            }
            .orBuild
//            .sessionManagement {
//                it
//                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//            }
    }

    @Bean
    fun bCryptPasswordEncoder(): BCryptPasswordEncoder {
        return BCryptPasswordEncoder()
    }


    @Bean
    fun corsFilter(): CorsFilter {
        val config = CorsConfiguration()
        config.allowCredentials = true
        config.addAllowedOrigin("http://localhost:3000") // 리액트 서버
        config.addAllowedHeader("*")
        config.addAllowedMethod("*")

        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", config)

        return CorsFilter(source)
    }
}