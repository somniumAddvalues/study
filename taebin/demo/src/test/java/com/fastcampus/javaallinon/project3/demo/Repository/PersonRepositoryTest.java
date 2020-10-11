package com.fastcampus.javaallinon.project3.demo.Repository;

import com.fastcampus.javaallinon.project3.demo.domain.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PersonRepositoryTest {

    @Autowired
    PersonRepository personRepository;

    @Test
    void Crud(){
        Person person = Person.builder().name("martin").age(10).bloodType("A").build();
        personRepository.save(person);

    System.out.println(personRepository.findAll());
        List<Person> people = personRepository.findAll();
        assertThat(people.size()).isEqualTo(1);
        assertThat(people.get(0).getName()).isEqualTo("martin");
        assertThat(people.get(0).getAge()).isEqualTo(10);
        assertThat(people.get(0).getBloodType()).isEqualTo("A");
    }

@Test
    void hashCodeAndEquals(){
    Person person1 = Person.builder().name("martin").age(10).bloodType("A").build();
    Person person2 = Person.builder().name("martin").age(10).bloodType("B").build();
    System.out.println(person1.equals(person2));
    System.out.println(person1.hashCode());
    System.out.println(person2.hashCode());

    Map<Person, Integer> map = new HashMap<>();
    map.put(person1, person1.getAge());
    System.out.println(map);
    System.out.println(map.get(person1));
    System.out.println(map.get(person2));
}



}
