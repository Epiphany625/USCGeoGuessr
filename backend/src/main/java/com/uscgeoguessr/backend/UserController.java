package com.uscgeoguessr.backend;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Entity
@Table(name = "users")

class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int user_id;
    private String username;
    private String password;
    private int total_score;
    private int game_count;
    private int high_score;

    // Constructor
    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.total_score = 0;
        this.game_count = 0;
        this.high_score = 0;
    }

    public User(String username, String password, int total_score, int game_count, int high_score) {
        this.username = username;
        this.password = password;
        this.total_score = total_score;
        this.game_count = game_count;
        this.high_score = high_score;
    }

    // getters and setters (not important)
    public int getUser_id() { return user_id; }
    public int setUser_id(int user_id) { this.user_id = user_id; return this.user_id; }
    public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}
    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}
    public int getTotal_score() {return total_score;}
    public void setTotal_score(int total_score) {this.total_score = total_score;}
    public int getGame_count() {return game_count;}
    public void setGame_count(int game_count) {this.game_count = game_count;}
    public int getHigh_score() {return high_score;}
    public void setHigh_score(int high_score) {this.high_score = high_score;}
}

interface UserRepository extends JpaRepository<User, Integer> {
    // handle user sign up (do not allow duplicate usernames)
    @Query("SELECT u FROM User u WHERE u.username = :username")
    public Optional<User> signup(@Param("username") String username);
    // handle user login
    @Query("SELECT u FROM User u WHERE u.password = :password AND u.username = :username")
    public Optional<User> login(@Param("username") String username, @Param("password") String password);
}

// request format for login and sign up
class LoginSignupBody {
    private String username;
    private String password;
    // constructor, getters and setters
    public LoginSignupBody(String username, String password) {
        this.username = username;
        this.password = password;
    }
    public String getUsername() {return username;}
    public String getPassword() {return password;}
}

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:5173", "https://Epiphany625.github.io", "https://Epiphany625.github.io/USCGeoGuessr"})
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // for user sign up functionality
    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody LoginSignupBody loginSignupBody) {
        Optional<User> currUser = userRepository.signup(loginSignupBody.getUsername());
        if(currUser.isPresent()) {
            return ResponseEntity.status(400).body("User already exists");
        }
        else {
            userRepository.save(new User(loginSignupBody.getUsername(), loginSignupBody.getPassword()));
            Optional<User> validUser = userRepository.login(loginSignupBody.getUsername(), loginSignupBody.getPassword());
            return ResponseEntity.status(201).body(validUser.get());
        }
    }

    // for login functionality
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginSignupBody loginSignupBody) {
        Optional<User> currUser = userRepository.login(loginSignupBody.getUsername(), loginSignupBody.getPassword());
        if (currUser.isPresent()) {
            return ResponseEntity.status(201).body(currUser.get());
        }
        else {
            return ResponseEntity.status(400).body("Invalid username or password");
        }
    }

}
