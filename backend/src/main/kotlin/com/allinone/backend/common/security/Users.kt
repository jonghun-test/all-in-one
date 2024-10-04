package com.allinone.backend.common.security

import com.samsungfire.chac.admin.api.entities.common.DateAudit
import jakarta.persistence.*

@Entity(name = "USERS")
class Users(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Long? = null,

    @Column(name = "username", nullable = false)
    val username: String = "",

    @Column(name = "email", nullable = false)
    val email: String = "",

    @Column(name = "password", nullable = false)
    val password: String = "",

    @Column(name = "phoneNumber", nullable = false)
    val phoneNumber: String = "",

): DateAudit()