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

    public PersonDto(PersonDto personDto) {
        this.name = personDto.getName();
        this.hobby = personDto.getHobby();
        this.address = personDto.getAddress();
        this.birthday = personDto.getBirthday();
        this.job = personDto.getJob();
        this.phoneNumber = personDto.getPhoneNumber();
    }

    public static PersonDto of(PersonDto personDto){
        return new PersonDto(personDto);
    }
}
