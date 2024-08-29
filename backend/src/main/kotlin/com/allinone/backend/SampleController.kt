package com.allinone.backend

import jakarta.servlet.http.HttpServletRequest
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class SampleController {

    val logger: Logger = LoggerFactory.getLogger("test")

    @GetMapping("/**")
    fun handleGet(
        req: HttpServletRequest,
    ): String {
        logger.info(req.method)
        logger.info(req.queryString)
        logger.info(req.requestURI)
        logger.info(req.requestURL.toString())

        return "test"
    }

    @PostMapping("/**")
    fun handlePost(
        req: HttpServletRequest,
        @RequestBody body: Map<String, Any>
    ): Any {
        logger.info(req.method)
        logger.info(req.queryString)
        logger.info(req.requestURI)
        logger.info(req.requestURL.toString())

        logger.info(body.toString())

        return body.map {
            it.key.toString() + "!" to it.value.toString() + "@@"
        }.toMap()
    }
}