package com.allinone.backend.common.security.user

import com.allinone.backend.common.additional.audits.DateAudit
import jakarta.persistence.*

@Entity(name = "USERS")
class Users(

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var no: Int? = null,

    var userName: String? = null,
    var password: String? = null,

    @Column(unique = true)
    var userEmail: String? = null,

    var role: String? = null // ROLE_USER, ROLE_ADMIN

) : DateAudit() {

    override fun toString(): String {
        return "Users(no=$no, userName=$userName, password=$password, userEmail=$userEmail, role=$role)"
    }

}