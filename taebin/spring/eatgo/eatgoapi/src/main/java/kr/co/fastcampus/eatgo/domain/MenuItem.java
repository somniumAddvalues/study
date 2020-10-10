package kr.co.fastcampus.eatgo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
public class MenuItem {

    @Id
    @GeneratedValue
    private Long  id;
   private String name ;
    private Long restorandid;


    public MenuItem(String name) {
        this.name = name;
    }

    public MenuItem() {

    }

    public String getName(){
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }

    public Long getRestorandid() {
        return restorandid;
    }

    public void setRestorandid(Long restorandid) {
        this.restorandid = restorandid;
    }
}
