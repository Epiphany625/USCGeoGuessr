package com.uscgeoguessr.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class TestController {
    @GetMapping("/test")
    public Map<String, String> test() {
        System.out.println("get request for testing");
        return Map.of("message", "Hello world");
    }
}
