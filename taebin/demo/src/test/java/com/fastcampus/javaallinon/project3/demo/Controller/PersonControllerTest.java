package com.fastcampus.javaallinon.project3.demo.Controller;

import com.fastcampus.javaallinon.project3.demo.Repository.PersonRepository;
import com.fastcampus.javaallinon.project3.demo.domain.Person;
import com.fastcampus.javaallinon.project3.demo.dto.Birthday;
import com.fastcampus.javaallinon.project3.demo.dto.PersonDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.NestedServletException;


import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@Transactional
class PersonControllerTest {

    @Autowired
    private PersonController personController;

    private MockMvc mockMvc;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter;

    @BeforeEach
    void beforEach(){
        mockMvc = MockMvcBuilders.standaloneSetup(personController).setMessageConverters(mappingJackson2HttpMessageConverter).build();
    }


    @Test
    void getPerson() throws  Exception{


        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/person/1"))
                .andDo(print())
                .andExpect(status().isOk())
                //json attribute compare
                //달러를 객체를 표시함
                .andExpect(jsonPath("$.name").value("martin"))
                .andExpect(jsonPath("$.hobby").isEmpty())
                .andExpect(jsonPath("$.address").isEmpty())
                .andExpect(jsonPath("$.job").isEmpty())
                .andExpect(jsonPath("$.birthday").value("1991-08-15"))
                .andExpect(jsonPath("$.phoneNumber").isEmpty())
                .andExpect(jsonPath("$.deleted").value(false))
                .andExpect(jsonPath("$.age").isNumber())
                .andExpect(jsonPath("$.birthdayToday").isBoolean());
                //assertTha(result.getName()).isEqualTo("martin) -> java attribute compare


    }

@Test
void PostPerson()throws  Exception{

    PersonDto personDto = new PersonDto("martin","programming","판교",LocalDate.now(),"programmer","010-1111-2222");
    mockMvc.perform(
            MockMvcRequestBuilders.post("/api/person")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(toJsonString(personDto)))
            .andDo(print())
            .andExpect(status().isCreated());

    Person result = personRepository.findAll(Sort.by(Sort.Direction.DESC,"id")).get(0);
    System.out.println(result);
    assertAll(
            () -> assertThat(result.getName()).isEqualTo("martin"),
            () -> assertThat(result.getHobby()).isEqualTo("programming"),
            () -> assertThat(result.getAddress()).isEqualTo("판교"),
            () -> assertThat(result.getBirthday()).isEqualTo(Birthday.of(LocalDate.now())),
            () -> assertThat(result.getJob()).isEqualTo("programmer"),
            () -> assertThat(result.getPhoneNumber()).isEqualTo("010-1111-2222")
    );
}




  @Test
    void  putPerson() throws Exception {
      mockMvc.perform(
              MockMvcRequestBuilders.post("/api/person")
                      .contentType(MediaType.APPLICATION_JSON)
                      .content("{\n" +
                      "    \"name\" :\"martin2\",\n" +
                      "    \"age\" : 20,\n" +
                      "    \"bloodType\" : \"A\"\n" +
                      "}"))
              .andDo(print())
              .andExpect(status().isCreated());
    }

    @Test
    void patchPerson() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.put("/api/person/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\n" +
                                "    \"name\" :\"martin\",\n" +
                                "    \"bloodType\" : \"A\"\n" +
                                "}"))
                .andDo(print())
                .andExpect(status().isOk());

    }
    @Test
    void modifyPerson() throws Exception{
        PersonDto personDto = new PersonDto("martin","programming","판교",LocalDate.now(),"programmer","010-1111-2222");
        mockMvc.perform(
                MockMvcRequestBuilders.put("/api/person/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJsonString(personDto)))
                .andDo(print())
                .andExpect(status().isOk());

        Person result = personRepository.findById(1L).get();
        assertThat(result.getName()).isEqualTo(("martin"));


    }



//@Test
//    void modifyName() throws Exception {
//    PersonDto personDto = new PersonDto("martine","programming","판교",LocalDate.now(),"programmer","010-1111-2222");
//
//    mockMvc.perform(
//            MockMvcRequestBuilders.patch("/api/person/1")
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .content(toJsonString(personDto)))
//            .andDo(print())
//            .andExpect(status().isOk());
//}
    @Test
    void modifyPersonIfNameIsDifferent() throws Exception {
        PersonDto personDto = new PersonDto("james","programming","판교",LocalDate.now(),"programmer","010-1111-2222");

        assertThrows(NestedServletException.class,() ->
        mockMvc.perform(
                MockMvcRequestBuilders.patch("/api/person/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJsonString(personDto)))
                .andDo(print())
                .andExpect(status().isOk()));
    }

@Test

    void deletePerson() throws Exception{
    mockMvc.perform(
            MockMvcRequestBuilders.delete("/api/person/1"))
            .andDo(print())
            .andExpect(status().isOk());

assertTrue(personRepository.findPeopleDeleted().stream().anyMatch(person -> person.getId().equals(1L)));
    }



    private String toJsonString(PersonDto personDto) throws JsonProcessingException {
        return objectMapper.writeValueAsString(personDto);
    }






}

