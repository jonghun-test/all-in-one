package com.allinone.backend.common.security.user

import com.samsungfire.chac.admin.api.entities.common.DateAudit
import jakarta.persistence.*

@Entity(name = "USER")
class User(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long? = null,

    @Column(name = "username", nullable = false)
    var username: String = "",

    @Column(name = "email", nullable = false)
    var email: String = "",

    @Column(name = "password", nullable = false)
    var password: String = "",

    @Column(name = "phoneNumber", nullable = false)
    var phoneNumber: String = "",

    @Column(name="roles", nullable = true)
    var role: String? = null,

): DateAudit()