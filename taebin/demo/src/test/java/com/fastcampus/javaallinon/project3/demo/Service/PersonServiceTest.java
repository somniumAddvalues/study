package com.fastcampus.javaallinon.project3.demo.Service;

import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import com.fastcampus.javaallinon.project3.demo.dto.PersonDto;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatcher;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PersonServiceTest {
    // test의 대상이 되는 클래스
    @InjectMocks
    private  PersonService personService;
    // 해당 대상의 클래스에서 사용되는  클래스들
    @Mock
    private PersonRepository personRepository;

    private void givenPerson(String name, int age, String bloodType) {
        personRepository.save(Person.builder().name(name).build());
    }

    @Test
    void getPeopleByName(){
        //givenPeople();
        when(personRepository.findByName("martin"))
                .thenReturn(Lists.newArrayList(new Person("martin")));

        List<Person> result = personService.getPeopleByName("martin");

        assertThat(result.size()).isEqualTo(1);
        assertThat(result.get(0).getName()).isEqualTo("martin");

    }


    @Test
    void getPerson(){
        //givenPeople();
        when(personRepository.findById(1L))
                .thenReturn(Optional.of(new Person("martin")));
        Person person = personService.getPerson(1L);

        assertThat(person.getName()).isEqualTo("martin");
    }

    @Test
    void getPersonIfNotFound(){
        when(personRepository.findById(1L))
                .thenReturn(Optional.empty());
        Person person = personService.getPerson(1L);
        assertThat(person).isNull();
    }

    @Test
    void put(){
        PersonDto personDto = mockPersonDto();
        personService.put(personDto);
    }

    @Test
    void modifyIfPersonNotFound(){

            when(personRepository.findById(1L))
                    .thenReturn(Optional.empty());
            assertThrows(RuntimeException.class, () -> personService.modify(1L,mockPersonDto()));
    }

    @Test
    void modifyIfNameIsDifferent(){
        when(personRepository.findById(1L))
                .thenReturn(Optional.of(new Person("tonny")));
        assertThrows(RuntimeException.class,() ->personService.modify(1L,mockPersonDto()));
    }

    @Test
    void modify(){
        when(personRepository.findById(1L))
                .thenReturn(Optional.of(new Person("martin")));

        personService.modify(1L,mockPersonDto());
    }

    private PersonDto mockPersonDto(){
        return new PersonDto("martin","programming","판교", LocalDate.now(),"programmer","010-1111-2222");
    }
    private static class OsPersonWillBeUpdated implements ArgumentMatcher<Person>{

        @Override
        public boolean matches(Person person) {
            return person.getName().equals("martin")
                    && person.getHobby().equals("programming")
                    && person.getAddress().equals("판교")
                    && person.getJob().equals("programmer");
        }
    }

}
