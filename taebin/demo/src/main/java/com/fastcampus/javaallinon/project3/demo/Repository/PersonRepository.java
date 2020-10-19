package com.fastcampus.javaallinon.project3.demo.Repository;

import com.fastcampus.javaallinon.project3.demo.domain.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

//JpaRepository를 상속받으면 자동으로 spring Framework에 저장된다.
public interface PersonRepository extends JpaRepository<Person,Long> {

    List<Person> findByName(String name);

    List<Person> findByBlockIsNull();

    List<Person> findByBloodType(String bloodType);

    //jpql
    @Query(value = "select person from Person person where person.birthday.monthOfBirthday= :monthOfBirthday " )
    List<Person> findByMonthOfBirthday(@Param("monthOfBirthday")int monthOfBirthdy);
}
