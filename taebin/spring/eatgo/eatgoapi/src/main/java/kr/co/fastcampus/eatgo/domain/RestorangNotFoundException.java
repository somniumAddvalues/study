package kr.co.fastcampus.eatgo.domain;


public class RestorangNotFoundException extends  RuntimeException{
    public RestorangNotFoundException(Long id) {
        super("Could not find restorang "+id);
    }
}
