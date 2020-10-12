package kr.co.fastcampus.eatgo.service;

import kr.co.fastcampus.eatgo.domain.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.event.annotation.BeforeTestClass;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

public class RestorangServiceTests {

private RestorangService restorangService;

@Mock
private RestorangRepository restorangRepository;
@Mock
private MenuItemRepository menuItemRepository;

    @BeforeEach
    public void setUP(){
        MockitoAnnotations.initMocks(this);
        MockRestorangRepository();
        MockMenuItemRepository();
        restorangService = new RestorangService(restorangRepository,menuItemRepository);
    }

    private void MockMenuItemRepository() {
        List<MenuItem> menuitems = new ArrayList<>();
<<<<<<< HEAD
        menuitems.add(new MenuItem("kimchi"));
=======
        menuitems.add(MenuItem.builder().name("kimchi").build());
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        given(menuItemRepository.findAllByRestorandid(1004L)).willReturn(menuitems);
    }

    private void MockRestorangRepository() {
        List<Restorang> restorangs = new ArrayList<>();
<<<<<<< HEAD
        Restorang restorang= new Restorang("Bob zip","Seoul",1004L);
=======
       //Restorang restorang= new Restorang("Bob zip","Seoul",1004L);
        Restorang restorang = Restorang.builder()
                .id(1004L)
                .name("Bob zip")
                .loc("Seoul")
                .menuItems(new ArrayList<MenuItem>())
                .build();
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        restorangs.add(restorang);

        given(restorangRepository.findAll()).willReturn(restorangs);
        given(restorangRepository.findByid(1004L)).willReturn(Optional.of(restorang));

    }

    @Test
    public void getRestroang() {

        Restorang a = restorangService. getRestroang(1004L);
        assertThat(a.getId(),is(1004L));

        MenuItem menuItem = a.getMenuItems().get(0);
        assertThat(menuItem.getName(),is("kimchi"));
    }

    @Test
    public void test2(){

    }

    @Test
    public void getRestroangs() {
        List<Restorang> a = restorangService.getRestroangs();
        Restorang r = a.get(0);
        assertThat(r.getId(),is(1004L));
    }
<<<<<<< HEAD
=======
    @Test
    public void getRestroangWithExisted() {
        Restorang restorang = restorangService.getRestroang(1004L);
        assertThat(restorang.getId(),is(1004L));

        MenuItem menuItem = restorang.getMenuItems().get(0);

        assertThat(restorang.getId(),is(1004L));
    }

>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d


    @Test
    public void addRestorang(){
<<<<<<< HEAD
        Restorang restorang = new Restorang("BeRyoung", "Busan");
        Restorang saved = new Restorang("BeRyoung" ,"Busan",1234L);

        given(restorangRepository.save(any())).willReturn(saved);
=======
        given(restorangRepository.save(any())).will(invocation -> {
            Restorang restorang = invocation.getArgument(0);
            restorang.setId(1234L);
            return restorang;
        });


        Restorang restorang = Restorang.builder()
                .name("BeRyong")
                .loc("Busan")
                .build();

                //new Restorang("BeRyoung", "Busan");
//        Restorang saved = Restorang.builder()
//                                            .id(1234L)
//                                            .loc("Busan")
//                                            .name("BeRyong")
//                                            .build();

                //new Restorang("BeRyoung" ,"Busan",1234L);


>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        Restorang created=  restorangService.addRestorang(restorang);

        assertThat(created.getId(),is(1234L));
    }


    @Test
    public void updateRestorang(){
<<<<<<< HEAD
        Restorang restorang = new Restorang("Bob zip","Seoul",1004L);
=======
//        Restorang restorang = new Restorang("Bob zip","Seoul",1004L);
        Restorang restorang = Restorang.builder()
                .id(1004L)
                .name("Bob zip")
                .loc("Seoul")
                .build();
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        given(restorangRepository.findByid(1004L)).willReturn(Optional.of(restorang));

    Restorang updated = restorangService.updateRestorang(1004L,"Sool zip","Busan");
    assertThat(updated.getName(),is("Sool zip"));
        assertThat(updated.getLoc(),is("Busan"));
    }

}
