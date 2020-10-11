package kr.co.fastcampus.eatgo.domain;

import org.junit.jupiter.api.Test;

import java.awt.*;
import java.util.ArrayList;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class RestorangTests {


    @Test
    public void creation(){
        //Restorang a = new Restorang("Bob zip","seoul",1004L);
        Restorang a = Restorang.builder()
                .id(1004L)
                .name("Bob zip")
                .loc("Seoul")
                .menuItems(new ArrayList<MenuItem>())
                .build();

        assertThat(a.getName(),is("Bob zip"));
        assertThat(a.getId(),is(1004L));
    }
    @Test
    public void information(){
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

}
