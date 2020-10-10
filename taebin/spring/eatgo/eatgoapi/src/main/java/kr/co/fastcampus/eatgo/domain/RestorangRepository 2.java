package kr.co.fastcampus.eatgo.domain;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RestorangRepository  extends CrudRepository<Restorang,Long> {
    List<Restorang> findAll();

    Optional<Restorang> findByid(Long id);

    Restorang save(Restorang any);
}
