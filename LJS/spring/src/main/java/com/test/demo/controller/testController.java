package com.test.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @GetMapping("/test")
    public String getTest(){

        return "Hello World";
    }

    @PostMapping("/test")
    public String postTest(
            @RequestBody String email
    ){
        System.out.println(email);

        return "보낸 이메일은 : " + email;
    }
}
