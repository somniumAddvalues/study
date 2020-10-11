package kr.co.fastcampus.eatgo.domain;

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
public class MenuItem {

    @Id
    @GeneratedValue
    private Long  id;
   private String name ;
    private Long restorandid;


    public MenuItem(String name) {
        this.name = name;
    }
}
