package kr.co.fastcampus.eatgo.domain;


import org.springframework.data.repository.CrudRepository;

import javax.persistence.Entity;
import java.util.List;


public interface MenuItemRepository  extends CrudRepository<MenuItem,Long> {

    List<MenuItem> findAllByRestorandid(Long restorangId);
}
