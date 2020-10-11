package com.fastcampus.javaallinon.project3.demo.domain;

import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

//getter
//setter
//생성자 Person(id,name,age)
@AllArgsConstructor
//생성자 Person()
@NoArgsConstructor
//데이터 베이스 객체 연결
@Entity
//Person.builder().id() .... .build()
@Builder
//tostring메소드, Exclude는 변수 제외
//생성자 만들기
//HashCode동일하게 만들어주기
//Data
@Data
public class Person {

    @Id
    //값을 자동으로 지정
    @GeneratedValue
    private Long id;

    @NonNull
    private String name;
    @NonNull
    private int age;

    private  String hobby;

    private  String bloodType;

    private String address;

    private LocalDate birthday;

    private String job;
    @ToString.Exclude
    private String phoneNumber;



}

