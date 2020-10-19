package com.fastcampus.javaallinon.project3.demo.Service;

import com.fastcampus.javaallinon.project3.demo.Repository.BlockRepository;
import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.domain.Block;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PersonServiceTest {

    @Autowired
    private  PersonService personService;
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private BlockRepository blockRepository;

    @Test
    void  getPeopleExcludeBlocks(){
        //givenPeople();

        List<Person> resultList = personService.getPeopleExcludeBlocks();
        resultList.forEach(System.out::println);

        assertThat(resultList.size()).isEqualTo(3);
    }

    @Test
    void getPeopleBloodType(){
        //givenPeople();

        List<Person> result = personRepository.findByBloodType("A");
        result.forEach(System.out::println);
    }




    public void givenBlockPerson(String name, int age, String bloodType){
            Person blockPerson = Person.builder().name(name).age(age).bloodType(bloodType).build();
            blockPerson.setBlock(new Block(name));
            personRepository.save(blockPerson);
    }



    private void givenPerson(String name, int age, String bloodType) {
        personRepository.save(Person.builder().name(name).age(age).bloodType(bloodType).build());
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

}
