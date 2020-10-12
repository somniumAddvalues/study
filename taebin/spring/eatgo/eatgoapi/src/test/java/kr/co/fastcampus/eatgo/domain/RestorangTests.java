package kr.co.fastcampus.eatgo.domain;

import org.junit.jupiter.api.Test;
<<<<<<< HEAD
=======

import java.awt.*;
import java.util.ArrayList;

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class RestorangTests {


    @Test
    public void creation(){
<<<<<<< HEAD
        Restorang a = new Restorang("Bob zip","seoul",1004L);
=======
        //Restorang a = new Restorang("Bob zip","seoul",1004L);
        Restorang a = Restorang.builder()
                .id(1004L)
                .name("Bob zip")
                .loc("Seoul")
                .menuItems(new ArrayList<MenuItem>())
                .build();

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        assertThat(a.getName(),is("Bob zip"));
        assertThat(a.getId(),is(1004L));
    }
    @Test
    public void information(){
<<<<<<< HEAD
        Restorang b = new Restorang("Bob zip","seoul");
        assertThat(b.getInformation(),is("Bob zip in seoul"));
    }


=======
//        Restorang b = new Restorang("Bob zip","seoul");
        Restorang b = Restorang.builder().name("Bob zip").loc("seoul").build();
        assertThat(b.getInformation(),is("Bob zip in seoul"));
    }
@Test
    public void  get1information(){
    Restorang restorang = Restorang.builder()
            .id(1004L)
            .name("Bob zip")
            .loc("Seoul")
            .menuItems(new ArrayList<MenuItem>())
            .build();
    restorang.setName("Sool zip");
    //assertThat(restorang.getInformation(),is("Bob zip in Seoul"));
    assertThat(restorang.getName(),is("Sool zip"));



}

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
}
