package com.allinone.backend.common.security.user

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<Users, Long> {

    fun findByEmail(email: String): Users?
}