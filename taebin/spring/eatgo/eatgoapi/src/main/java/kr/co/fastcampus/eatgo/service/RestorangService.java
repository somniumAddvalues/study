package kr.co.fastcampus.eatgo.service;

import kr.co.fastcampus.eatgo.domain.MenuItem;
import kr.co.fastcampus.eatgo.domain.MenuItemRepository;
import kr.co.fastcampus.eatgo.domain.Restorang;
import kr.co.fastcampus.eatgo.domain.RestorangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RestorangService {

    @Autowired
    RestorangRepository restorangRepository;

    @Autowired
    MenuItemRepository menuItemRepository;

    public RestorangService(RestorangRepository restorangRepository, MenuItemRepository menuItemRepository){
        this.restorangRepository = restorangRepository;
        this.menuItemRepository = menuItemRepository;
    }

    public Restorang getRestroang(Long id){
        //
        Restorang a = restorangRepository.findByid(id).orElse(null);
        List<MenuItem> menuItems = menuItemRepository.findAllByRestorandid(id);
        a.setMenuItems(menuItems);
        return  a;
    }

    public List<Restorang> getRestroangs() {
        List<Restorang> restorangs = restorangRepository.findAll();
        return restorangs;
    }

    public Restorang addRestorang(Restorang restorang) {

        return restorangRepository.save(restorang);
    }

    @Transactional
    public Restorang updateRestorang(Long id, String name, String loc) {
    //TODO:update restorang
        Restorang restorang = restorangRepository.findByid(id).orElse(null);
        restorang.setInformation(name,loc);
//        Restorang restorang = new Restorang(name,loc,id);
        return restorang;
    }
}
