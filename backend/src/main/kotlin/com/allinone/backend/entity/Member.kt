package com.allinone.backend.entity

import jakarta.persistence.*

@Entity
data class Member(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false, length = 50)
    var name: String? = null,
) {
}