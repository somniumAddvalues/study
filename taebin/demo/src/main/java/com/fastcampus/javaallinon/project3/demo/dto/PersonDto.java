package com.fastcampus.javaallinon.project3.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PersonDto {
    private String name;
    private String hobby;

    private String address;
    private LocalDate birthday;
    private String job;
    private  String phoneNumber;
}
