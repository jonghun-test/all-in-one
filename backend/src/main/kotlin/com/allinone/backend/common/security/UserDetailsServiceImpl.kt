package com.allinone.backend.common.security

import com.allinone.backend.common.security.user.UserRepository
import io.github.oshai.kotlinlogging.KotlinLogging
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserDetailsServiceImpl(
    private val userRepository: UserRepository
): UserDetailsService {

    val logger = KotlinLogging.logger {  }

    override fun loadUserByUsername(email: String): UserDetails {
        logger.info { "Loading user by email: $email" }

        val user = userRepository.findByEmail(email) ?: throw UsernameNotFoundException("User not found")

        return User(
            user.email,
            user.password,
            arrayListOf(SimpleGrantedAuthority(user.userRole))
        )
    }
}