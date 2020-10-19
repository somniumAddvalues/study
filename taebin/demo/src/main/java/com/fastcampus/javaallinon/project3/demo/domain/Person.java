package com.fastcampus.javaallinon.project3.demo.domain;

import com.fastcampus.javaallinon.project3.demo.dto.Birthday;
import com.fastcampus.javaallinon.project3.demo.dto.PersonDto;
import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.*;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
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
@RequiredArgsConstructor
@Data
public class Person {

    @Id
    //값을 자동으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @NotEmpty
    @Column(nullable = false)
    private String name;

    @NonNull
    private int age;

    private  String hobby;

    @NonNull
    @NotEmpty
    @Column(nullable = false)
    private  String bloodType;

    private String address;

    @Valid
    @Embedded
    private Birthday birthday;

    private String job;
    @ToString.Exclude
    private String phoneNumber;

   // @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    private Block block;

    public void set(PersonDto personDto){
        if (personDto.getAge() != 0){
            this.setAge(personDto.getAge());
        }
        if (!StringUtils.isEmpty(personDto.getHobby())){
            this.setHobby(personDto.getHobby());
        }
        if(!StringUtils.isEmpty(personDto.getBloodType())){
            this.setBloodType(personDto.getBloodType());
        }
        if (!StringUtils.isEmpty(personDto.getAddress())) {
            this.setAddress(personDto.getAddress());
        }
        if (!StringUtils.isEmpty(personDto.getJob())) {
            this.setJob(personDto.getJob());
        }
        if (!StringUtils.isEmpty(personDto.getPhoneNumber())) {
            this.setPhoneNumber(personDto.getPhoneNumber());
        }
    }
}

