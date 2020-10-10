package kr.co.fastcampus.eatgo.domain;

import org.junit.jupiter.api.Test;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class RestorangTests {


    @Test
    public void creation(){
        Restorang a = new Restorang("Bob zip","seoul",1004L);
        assertThat(a.getName(),is("Bob zip"));
        assertThat(a.getId(),is(1004L));
    }
    @Test
    public void information(){
        Restorang b = new Restorang("Bob zip","seoul");
        assertThat(b.getInformation(),is("Bob zip in seoul"));
    }


}
