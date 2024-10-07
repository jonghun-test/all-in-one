package com.allinone.backend.common.security.user

import org.springframework.data.crossstore.ChangeSetPersister
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val bCryptPasswordEncoder: BCryptPasswordEncoder
) {

    fun joinUser(user: User){

        val rawPassword = user.password
        val encPassword = BCryptPasswordEncoder().encode(rawPassword)

        user.password = encPassword
        user.role = "ROLE_USER"

        userRepository.save(user)
    }

    fun getUserInfo(email: String): User? {
        return userRepository.findByEmail(email)
    }
}