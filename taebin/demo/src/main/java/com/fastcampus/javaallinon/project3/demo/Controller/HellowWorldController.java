package com.fastcampus.javaallinon.project3.demo.Controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class HellowWorldController {

    @GetMapping("/api/test")
    public String hello(){
        return "Hellow World";
    }

}
