package com.test.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        // Spring Application을 구동, 첫 번째 인자 = Spring Component, 두 번째 인자 = Command-Line
        SpringApplication.run(DemoApplication.class, args);
    }
}
