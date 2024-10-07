package com.allinone.backend.common.security.user

import com.allinone.backend.common.additional.audits.DateAudit
import jakarta.persistence.*

@Entity(name = "USERS")
class Users(

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

    @Column(name = "userRole", nullable = true)
    var userRole: String? = null

) : DateAudit() {

    fun toEntity() = Users (
        username = this.username,
        email = this.email,
        password = this.password,
        phoneNumber = this.phoneNumber,
        userRole = this.userRole
    )

    override fun toString(): String {
        return "Users(id=$id, username='$username', email='$email', password='$password', phoneNumber='$phoneNumber', userRole=$userRole)"
    }
}