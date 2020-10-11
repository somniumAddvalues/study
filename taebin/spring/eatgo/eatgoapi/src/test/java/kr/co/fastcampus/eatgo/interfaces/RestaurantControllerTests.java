package kr.co.fastcampus.eatgo.interfaces;

import kr.co.fastcampus.eatgo.domain.*;
import kr.co.fastcampus.eatgo.service.RestorangService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest
public class RestaurantControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RestorangService restorangService;


//가짜 객체

    @Test
    public void list() throws Exception {
        List<Restorang> restorangs = new ArrayList<>();
        restorangs.add(Restorang.builder().id(1004L).name("JOCKER HOUSE").loc("Seoul").build());
        given(restorangService.getRestroangs()).willReturn(restorangs);

        mockMvc.perform(get("/rest")).andExpect(status().isOk())
                .andExpect(content().string(containsString("\"id\":1004")))
                .andExpect(content().string(containsString("\"name\":\"JOCKER HOUSE\"")));
//                .andExpect(content().string(containsString("\"id\": 1004")));

    }

    @Test
    public void detailWithExisted() throws Exception {

        Restorang restorang = Restorang.builder().id(1004L).name("JOCKER HOUSE").loc("Seoul") .build();
                //new Restorang("JOCKER HOUSE","Seoul",1004L);
        restorang.setMenuItems(Arrays.asList(new MenuItem("kimchi")));
        //restorang.setMenuItems(Arrays.asList(new MenuItem()));
        Restorang restorang2 = Restorang.builder().id(2020L).loc("Seoul").name("Cyber food").build();
                //new Restorang("Cyber food","Seoul",2020L);
        //restorang2.addMenuItem(new MenuItem("kimchi"));

        given(restorangService.getRestroang(1004L)).willReturn(restorang);
        given(restorangService.getRestroang(2020L)).willReturn(restorang2);



        mockMvc.perform(get("/rest/1004"))
                .andExpect(content().string(containsString("\"id\":1004")))
                .andExpect(content().string(containsString("\"name\":\"JOCKER HOUSE\"")))
                .andExpect(content().string(containsString("kimchi")));

        mockMvc.perform(get("/rest/2020"))
                .andExpect(content().string(containsString("\"id\":2020")))
                .andExpect(content().string(containsString("\"name\":\"Cyber food\"")));

    }

    @Test

    public void detailWithNotExisted() throws Exception{
        given(restorangService.getRestroang(404L)).willThrow(new RestorangNotFoundException(404L));
        mockMvc.perform(get("/rest/404"))
                .andExpect(status().isNotFound())
        .andExpect(content().string("{}"));
    }



@Test
    public void createWithVaildData() throws Exception {
  given(restorangService.addRestorang(any())).will(invocation -> {
      Restorang restorang = invocation.getArgument(0);
      return Restorang.builder().id(1234L).name(restorang.getName()).loc(restorang.getLoc()).build();
  });
    mockMvc.perform(post("/rest")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"name\":\"Beryong\",\"loc\":\"Seoul\"}"))
            .andExpect(status().isCreated())
            .andExpect(header().string("location", "/rest/1234"))
            .andExpect(content().string("{}"));

    verify(restorangService).addRestorang(any());
    }



    @Test
    public void createWithInVaildData() throws Exception {

        mockMvc.perform(post("/rest")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"\",\"loc\":\"\"}"))
                .andExpect(status().isBadRequest());
        //verify(restorangService).addRestorang(any());
    }

    @Test
    public void updateWithValidData() throws Exception {
        mockMvc.perform(patch("/rest/1004")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"JOCKER Bar\",\"loc\":\"Busan\"}"))
                .andExpect(status().isOk());


        verify(restorangService).updateRestorang(1004L,"JOCKER Bar","Busan");
    }
    @Test
    public void updateWithInValidData() throws Exception {
        mockMvc.perform(patch("/rest/1004")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"\",\"loc\":\"\"}"))
                .andExpect(status().isBadRequest());

    }
}
