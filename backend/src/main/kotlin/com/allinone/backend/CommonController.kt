package com.allinone.backend

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CommonController {

    @GetMapping(value = ["/api/data"])
    fun health(): String {
        return "hello22"
    }
}