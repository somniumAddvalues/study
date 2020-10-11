package com.fastcampus.javaallinon.project3.demo.Repository;

import com.fastcampus.javaallinon.project3.demo.domain.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Long> {


}
