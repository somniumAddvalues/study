package kr.co.fastcampus.eatgo.interfaces;

import kr.co.fastcampus.eatgo.domain.*;
import kr.co.fastcampus.eatgo.service.RestorangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
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

            Restorang rs = restorangService.getRestroang(id);
        return rs;
    }
    @GetMapping("/re")
    public String test(){
        return "hellow world";
    }


    @PostMapping("/rest")
    public ResponseEntity <?> create(@Valid @RequestBody Restorang resource)
            throws URISyntaxException {
        String name = resource.getName();
        String loc = resource.getLoc();
//        Restorang restorang = new Restorang(name, loc);
        Restorang restorang = Restorang.builder().name(name).loc(loc).build();
        restorangService.addRestorang(restorang);
        URI uri = new URI("/rest/1234");
        return ResponseEntity.created(uri).body("{}");
    }

    @PatchMapping("/rest/{id}")
    public String update(@PathVariable("id") Long id,  @Valid  @RequestBody Restorang restorang){
        String name = restorang.getName();
        String loc = restorang.getLoc();
        restorangService.updateRestorang(id, name, loc);
        return "{}";
    }
}
