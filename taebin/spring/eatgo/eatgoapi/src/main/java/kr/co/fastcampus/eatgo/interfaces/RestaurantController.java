package kr.co.fastcampus.eatgo.interfaces;

import kr.co.fastcampus.eatgo.domain.*;
import kr.co.fastcampus.eatgo.service.RestorangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;


=======
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;

@CrossOrigin
@RestController
public class RestaurantController {

    @Autowired
    private RestorangService restorangService;

    @GetMapping("/rest")
    public List<Restorang> list(){
        List<Restorang> a = restorangService.getRestroangs();
//      Restorang c = new Restorang("Bob zip","seoul",1004L);
        return a;
    }

    @GetMapping("/rest/{id}")
    public Restorang detail(@PathVariable("id") Long id){
<<<<<<< HEAD
        Restorang rs = restorangService.getRestroang(id);
        //기본 정보와 메뉴 정보

        return rs;
    }


=======

            Restorang rs = restorangService.getRestroang(id);
        return rs;
    }
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
    @GetMapping("/re")
    public String test(){
        return "hellow world";
    }


    @PostMapping("/rest")
<<<<<<< HEAD
    public ResponseEntity <?> create(@RequestBody Restorang resource)
            throws URISyntaxException {
        String name = resource.getName();
        String loc = resource.getLoc();
        Restorang restorang = new Restorang(name, loc);
=======
    public ResponseEntity <?> create(@Valid @RequestBody Restorang resource)
            throws URISyntaxException {
        String name = resource.getName();
        String loc = resource.getLoc();
//        Restorang restorang = new Restorang(name, loc);
        Restorang restorang = Restorang.builder().name(name).loc(loc).build();
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        restorangService.addRestorang(restorang);
        URI uri = new URI("/rest/1234");
        return ResponseEntity.created(uri).body("{}");
    }

    @PatchMapping("/rest/{id}")
<<<<<<< HEAD
    public String update(@PathVariable("id") Long id, @RequestBody Restorang restorang){
=======
    public String update(@PathVariable("id") Long id,  @Valid  @RequestBody Restorang restorang){
>>>>>>> 12a3e0ad8f8688ae06c488f56729da7c291cc46d
        String name = restorang.getName();
        String loc = restorang.getLoc();
        restorangService.updateRestorang(id, name, loc);
        return "{}";
    }
}
