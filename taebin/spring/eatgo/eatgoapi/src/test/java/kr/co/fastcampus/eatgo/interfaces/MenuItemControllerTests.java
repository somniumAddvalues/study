package kr.co.fastcampus.eatgo.interfaces;

import kr.co.fastcampus.eatgo.service.RestorangService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest
class MenuItemControllerTests {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RestorangService restorangService;

    @Test
    public void bulkUpdate() throws Exception {
        mockMvc.perform(patch("/rest/1004")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"JOCKER Bar\",\"loc\":\"Busan\"}"))
                .andExpect(status().isOk());


        verify(restorangService).updateRestorang(1004L,"JOCKER Bar","Busan");
    }

}
