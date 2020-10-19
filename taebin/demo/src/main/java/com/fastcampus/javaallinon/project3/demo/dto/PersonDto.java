package com.fastcampus.javaallinon.project3.demo.dto;

import com.fastcampus.javaallinon.project3.demo.domain.Block;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PersonDto {
    private String name;
    private int age;
    private String hobby;
    private  String bloodType;
    private String address;
    private LocalDate birthday;
    private String job;
    private  String phoneNumber;
    private Block block;
}
