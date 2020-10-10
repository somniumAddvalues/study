package kr.co.fastcampus.eatgo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Restorang {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String loc;

    @Transient
    private List<MenuItem> menuItems = new ArrayList<>();

    public Restorang() {
    }

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

    public String getName() {
        return this.name;

    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId(){
        return this.id;
    }

    public void setLoc(String loc) {
        this.loc = loc;
    }

    public String getLoc() {
        return loc;
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
        for(MenuItem menuItem: menuItems){
            addMenuItem(menuItem);
        }
    }

    public void setInformation(String name, String loc) {
    this.name = name;
    this.loc = loc;
    }
}
