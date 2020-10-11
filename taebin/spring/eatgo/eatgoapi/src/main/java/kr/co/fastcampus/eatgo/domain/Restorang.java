package kr.co.fastcampus.eatgo.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Restorang {
    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty
    private String name;
    @NotEmpty
    private String loc;
    private String regionName;
    private String categoryName;
    private String tagNames;

    @Transient
    private List<MenuItem> menuItems = new ArrayList<>();


    public Restorang(String name){
        this.name = name;
    }
    public Restorang(String name, String loc){
        this.name = name;
        this.loc = loc;
    }
    public Restorang(String name, String loc, Long id){
        this.name = name;
        this.loc = loc;
        this.id = id;
    }

    public String getId1(){
        return Long.toString(id);
    }

    public List<MenuItem> getMenuItems(){
        return this.menuItems;
    }

    public String getInformation(){
        return this.name+" in "+ this.loc;
    }

    public void addMenuItem(MenuItem menuItem) {
        menuItems.add(menuItem);
    }

    public void setMenuItems(List<MenuItem> menuItems) {
        this.menuItems =  new ArrayList<>(menuItems);

    }

    public void setInformation(String name, String loc) {
    this.name = name;
    this.loc = loc;
    }



}
