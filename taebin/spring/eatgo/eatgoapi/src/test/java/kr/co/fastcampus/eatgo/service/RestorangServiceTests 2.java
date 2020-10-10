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
        menuitems.add(new MenuItem("kimchi"));
        given(menuItemRepository.findAllByRestorandid(1004L)).willReturn(menuitems);
    }

    private void MockRestorangRepository() {
        List<Restorang> restorangs = new ArrayList<>();
        Restorang restorang= new Restorang("Bob zip","Seoul",1004L);
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


    @Test
    public void addRestorang(){
        Restorang restorang = new Restorang("BeRyoung", "Busan");
        Restorang saved = new Restorang("BeRyoung" ,"Busan",1234L);

        given(restorangRepository.save(any())).willReturn(saved);
        Restorang created=  restorangService.addRestorang(restorang);

        assertThat(created.getId(),is(1234L));
    }


    @Test
    public void updateRestorang(){
        Restorang restorang = new Restorang("Bob zip","Seoul",1004L);
        given(restorangRepository.findByid(1004L)).willReturn(Optional.of(restorang));

    Restorang updated = restorangService.updateRestorang(1004L,"Sool zip","Busan");
    assertThat(updated.getName(),is("Sool zip"));
        assertThat(updated.getLoc(),is("Busan"));
    }

}
