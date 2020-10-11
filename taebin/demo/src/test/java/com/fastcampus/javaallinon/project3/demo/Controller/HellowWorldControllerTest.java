package com.fastcampus.javaallinon.project3.demo.Controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class HellowWorldControllerTest {

    @Autowired
    HellowWorldController hellowWorldController;

    private MockMvc mockMvc;

    @Test
    void helloworld(){
        System.out.println(hellowWorldController.hello());
        assertThat(hellowWorldController.hello()).isEqualTo("Hellow World");
    }
    @Test
    void mockVvcTest() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(hellowWorldController).build();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/test")).andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Hellow World"));
        //content.string -> body의 내용을 확인
        //status.isOK-> 통신 상태 확인 200은 ok

    }
}
