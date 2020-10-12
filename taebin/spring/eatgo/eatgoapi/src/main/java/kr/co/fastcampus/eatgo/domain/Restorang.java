package kr.co.fastcampus.eatgo.domain;

<<<<<<< HEAD
=======
import lombok.*;

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
<<<<<<< HEAD
=======
import javax.validation.constraints.NotEmpty;
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
import java.util.ArrayList;
import java.util.List;

@Entity
<<<<<<< HEAD
public class Restorang {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String loc;
=======
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
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d

    @Transient
    private List<MenuItem> menuItems = new ArrayList<>();

<<<<<<< HEAD
    public Restorang() {
    }
=======
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d

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

<<<<<<< HEAD
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
=======
    public String getId1(){
        return Long.toString(id);
    }

    public List<MenuItem> getMenuItems(){
        return this.menuItems;
    }

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
    public String getInformation(){
        return this.name+" in "+ this.loc;
    }

    public void addMenuItem(MenuItem menuItem) {
        menuItems.add(menuItem);
    }

    public void setMenuItems(List<MenuItem> menuItems) {
<<<<<<< HEAD
        for(MenuItem menuItem: menuItems){
            addMenuItem(menuItem);
        }
=======
        this.menuItems =  new ArrayList<>(menuItems);

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
    }

    public void setInformation(String name, String loc) {
    this.name = name;
    this.loc = loc;
    }
<<<<<<< HEAD
=======



>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
}
