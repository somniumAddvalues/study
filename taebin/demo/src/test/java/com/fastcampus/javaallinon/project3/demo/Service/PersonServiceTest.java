package com.fastcampus.javaallinon.project3.demo.Service;

import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class PersonServiceTest {

    @Autowired
    private  PersonService personService;
    @Autowired
    private PersonRepository personRepository;







    private void givenPerson(String name, int age, String bloodType) {
        personRepository.save(Person.builder().name(name).build());
    }

    @Test
    void getPeopleByName(){
        //givenPeople();
        List<Person> result = personService.getPeopleByName("martin");

        result.forEach(System.out::println);

    }


    @Test
    void getPerson(){
        //givenPeople();

        Person person = personService.getPerson(3L);

        assertThat(person.getName()).isEqualTo("dennis");
    }

    @Test
    void deletePerson() throws  Exception{

    }

}
