package com.fastcampus.javaallinon.project3.demo.Controller;

import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.Service.PersonService;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import com.fastcampus.javaallinon.project3.demo.dto.PersonDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value="/api/person")
@RestController
@Slf4j
public class PersonController {
    @Autowired
    private PersonService personService;
    @Autowired
    private PersonRepository personRepository;

    @GetMapping(value = "/{id}")
    public Person getPerson(@PathVariable Long id){
        return personService.getPerson(id);
    }



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void postPerson(@RequestBody  PersonDto person){

        personService.put(person);

    }

    @PutMapping(value= "/{id}")
    public void modifyPerson(@PathVariable Long id, @RequestBody PersonDto person){
        personService.modify(id,person);

    }
    @PatchMapping(value = "/{id}")
    public void modifyName(@PathVariable Long id,String name){
        personService.modify(id,name);

    }
@DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id){
    personService.delete(id);

    }
}
