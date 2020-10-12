package kr.co.fastcampus.eatgo.domain;

<<<<<<< HEAD
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
=======
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
public class MenuItem {

    @Id
    @GeneratedValue
    private Long  id;
   private String name ;
    private Long restorandid;


    public MenuItem(String name) {
        this.name = name;
    }
<<<<<<< HEAD

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
=======
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
}
