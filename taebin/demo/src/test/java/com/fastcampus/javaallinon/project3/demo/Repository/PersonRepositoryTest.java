package com.fastcampus.javaallinon.project3.demo.Repository;

import com.fastcampus.javaallinon.project3.demo.domain.Person;
import com.fastcampus.javaallinon.project3.demo.dto.Birthday;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDate;
import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
class PersonRepositoryTest {

    @Autowired
    PersonRepository personRepository;

    @Test
    void Crud(){
//        Person person = Person.builder().name("john").age(10).bloodType("A").build();
//        personRepository.save(person);

    //System.out.println(personRepository.findAll());
        List<Person> result = personRepository.findByName("martin");
        assertThat(result.size()).isEqualTo(1);
        assertThat(result.get(0).getName()).isEqualTo("martin");

//        assertThat(result.get(0).getBloodType()).isEqualTo("A");
    }

//@Test
//    void hashCodeAndEquals(){
//    Person person1 = Person.builder().name("martin").age(10).bloodType("A").build();
//    Person person2 = Person.builder().name("martin").age(10).bloodType("B").build();
//    System.out.println(person1.equals(person2));
//    System.out.println(person1.hashCode());
//    System.out.println(person2.hashCode());
//
//    Map<Person, Integer> map = new HashMap<>();
//    map.put(person1, person1.getAge());
//    System.out.println(map);
//    System.out.println(map.get(person1));
//    System.out.println(map.get(person2));
//}




    @Test
    void findByBirthdayBetween(){

        List<Person> result = personRepository.findByMonthOfBirthday(8);

        Person marin = new Person();


        assertThat(result.size()).isEqualTo(2);
        assertThat(result.get(0).getName()).isEqualTo("martin");

    }

}
