package com.allinone.backend.common.security.user

import io.github.oshai.kotlinlogging.KotlinLogging
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


@RestController
class UserController(
    private val userService: UserService,
) {
    
    val logger = KotlinLogging.logger {}

    @PostMapping("/join")
    fun join(@RequestBody users: Users): ResponseEntity<Void> {
        logger.info { "회원가입 컨트롤러 실행$users" }
        userService.joinUser(users.toEntity())
        logger.info { "회원가입 완료" }
        return ResponseEntity.ok().build()
    }

    @GetMapping("/loginOk")
    fun loginOk(): ResponseEntity<Map<String, String>> {
        val authentication: Authentication = SecurityContextHolder.getContext().authentication
        val email: String = authentication.name
        val authorities: String = authentication.authorities.toString()

        logger.info { "로그인한 유저 이메일:$email" }
        logger.info { "유저 권한: ${authentication.authorities}" }

        val userInfo: MutableMap<String, String> = HashMap()
        userInfo["email"] = email
        userInfo["authorities"] = authorities

        return ResponseEntity.ok(userInfo)
    }

    @GetMapping("/logoutOk")
    fun logoutOk(): ResponseEntity<Void> {
        logger.info { "로그아웃 성공" }
        return ResponseEntity.ok().build()
    }

    @GetMapping("/admin")
    fun getAdminPage(): ResponseEntity<Void> {
        logger.info { "어드민 인증 성공" }
        return ResponseEntity.ok().build()
    }

    @GetMapping("/user")
    fun getUserPage(): ResponseEntity<Users> {
        logger.info { "일반 인증 성공" }

        val authentication: Authentication = SecurityContextHolder.getContext().authentication
        val email: String = authentication.getName()

        // 유저 정보
        val user = userService.getUserInfo(email)

        return ResponseEntity.ok(user)
    }

    @PostMapping("/loginProc")
    fun loginOk(@RequestBody users: Users): ResponseEntity<Map<String, String>> {

        logger.info { "loginProc: ${users}" }

        val user = userService.getUserInfo(users.userEmail) ?: throw RuntimeException("사용자 없음")

        val userInfo: MutableMap<String, String> = HashMap()
        userInfo["email"] = user.userEmail
        userInfo["authorities"] = user.userRole?: ""

        return ResponseEntity.ok(userInfo)
    }
}