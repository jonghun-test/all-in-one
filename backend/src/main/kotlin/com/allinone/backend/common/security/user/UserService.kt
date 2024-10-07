package com.allinone.backend.common.security.user

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val bCryptPasswordEncoder: BCryptPasswordEncoder
) {

    fun joinUser(users: Users){

        val rawPassword = users.password
        val encPassword = BCryptPasswordEncoder().encode(rawPassword)

        users.password = encPassword
        users.userRole = "ROLE_USER"

        userRepository.save(users)
    }

    fun getUserInfo(email: String): Users? {
        return userRepository.findByEmail(email)
    }
}