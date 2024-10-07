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

    @Column(name = "userEmail", nullable = false)
    var userEmail: String = "",

    @Column(name = "password", nullable = false)
    var password: String = "",

    @Column(name = "phoneNumber", nullable = false)
    var phoneNumber: String = "",

    @Column(name = "userRole", nullable = true)
    var userRole: String? = null

) : DateAudit() {

    fun toEntity() = Users (
        username = this.username,
        userEmail = this.userEmail,
        password = this.password,
        phoneNumber = this.phoneNumber,
        userRole = this.userRole
    )

    override fun toString(): String {
        return "Users(id=$id, username='$username', email='$userEmail', password='$password', phoneNumber='$phoneNumber', userRole=$userRole)"
    }
}