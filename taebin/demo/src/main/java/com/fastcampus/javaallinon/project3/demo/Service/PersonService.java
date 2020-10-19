package com.fastcampus.javaallinon.project3.demo.Service;

import com.fastcampus.javaallinon.project3.demo.Repository.BlockRepository;
import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import com.fastcampus.javaallinon.project3.demo.dto.Birthday;
import com.fastcampus.javaallinon.project3.demo.dto.PersonDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired

    private BlockRepository blockRepository;

    public List<Person> getPeopleExcludeBlocks(){
        List<Person> people = personRepository.findAll();

        //List<Block> blocks = blockRepository.findAll();
        //8버전 부터 사용 가능한 stream
        //List<String> blockNames = blocks.stream().map(Block::getName).collect(Collectors.toList());

        //Query Method

        return personRepository.findByBlockIsNull();
    }
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
    public void put(Person person) {
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
        person.setName(name);
        personRepository.save(person);
    }

}
