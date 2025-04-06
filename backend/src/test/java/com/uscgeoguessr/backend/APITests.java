package com.uscgeoguessr.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
class BackendApplicationTests {
    @Test
    void contextLoads() {
    }
}
@SpringBootTest
@AutoConfigureMockMvc
public class APITests {

    // test the "test" api
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testTestEndpoint() throws Exception {
        mockMvc.perform(get("/test")).andExpect(status().isOk()).andExpect(jsonPath("$.message").value("Hello world"));
    }

    @Test
    // test database connection to user database
    public void testDatabaseConnection() throws Exception {
        mockMvc.perform(get("/user")).andExpect(status().isOk());
    }
}
