package com.fastcampus.javaallinon.project3.demo.Service;

import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import com.fastcampus.javaallinon.project3.demo.dto.PersonDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
public class PersonService {

    @Autowired
    private PersonRepository personRepository;




    @Transactional(readOnly = true)
    public Person getPerson(Long id){
       // Person person = personRepository.findById(id).get();
        Person  person = personRepository.findById(id).orElse(null);
        //System.out.println("Person"+person);
        log.info("person:{}", person);
        return person;
    }

    public List<Person> getPeopleByName(String name){
//        List<Person> people = personRepository.findAll();
//        return  people.stream().filter(person -> person.getName().equals(name)).collect(Collectors.toList());
         return personRepository.findByName(name);
    }

    @Transactional
    public void put(PersonDto personDto) {
        Person person = new Person();
        person.set(personDto);
        person.setName(personDto.getName());
        personRepository.save(person);
    }

    @Transactional
    public  void modify(Long id, PersonDto person){
        log.info("{}",person);
        Person personAtDb = personRepository.findById(id).orElseThrow(() -> new RuntimeException("runtimme error"));
        if(!personAtDb.getName().equals(person.getName())){
            throw new RuntimeException("1");
        }

        personAtDb.set(person);
        personRepository.save(personAtDb);
    }

    @Transactional
    public void modify(Long id, String name){
        Person person = personRepository.findById(id).orElseThrow(() -> new RuntimeException("아이디가 존재 하지 않습니다"));
        System.out.println(person);
        person.setName(name);
        personRepository.save(person);
    }

    @Transactional
    public void delete(Long id) {
//        Person person = personRepository.findById(id).orElseThrow(() -> new RuntimeException('Idㄱㅏ 존재하지 않습니다.'));
//        personRepository.delete(person);

        Person person = personRepository.findById(id).orElseThrow(() -> new RuntimeException("아이디가 존재 하지 않습니다"));
        person.setDeleted(true);
        personRepository.save(person);
    }
}
