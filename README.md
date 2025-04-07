# USCGeoGuesser

## push everything in a separate branch

**How to Run the Spring Boot Application**
IntelliJ Ultimate Version, Java version 21+, navigate to project root directory, and hit the green run button.

**Set Up Database**

```
CREATE DATABASE USCGeoguessr;
USE USCGeoguessr;
CREATE TABLE `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(1000) NOT NULL,
  `total_score` INT NOT NULL,
  `game_count` INT NOT NULL,
  `high_score` INT NOT NULL,
  PRIMARY KEY (`user_id`)
);
-- sample values
INSERT INTO `users` (`username`, `password`, `total_score`, `game_count`, `high_score`) VALUES ("Leo", "LeoPassword", 30, 5, 13);
INSERT INTO `users` (`username`, `password`, `total_score`, `game_count`, `high_score`) VALUES ("Felicia", "FeliciaPassword", 20, 2, 16);
INSERT INTO `users` (`username`, `password`, `total_score`, `game_count`, `high_score`) VALUES ("Joshua", "JoshuaPassword", 50, 6, 20);
INSERT INTO `users` (`username`, `password`, `total_score`, `game_count`, `high_score`) VALUES ("Thiago", "ThiagoPassword", 15, 1, 15);

```

**Edit application.properties**
Edit the file located at src/main/resources/application.properties to configure environment-specific settings.

```
spring.application.name=backend

spring.datasource.url=jdbc:mysql://localhost:3306/USCGeoguessr
spring.datasource.username=root
spring.datasource.password=<your_database_password>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

Make sure your database is up and credentials are correct.

**How to Run Tests**

To run all tests:

```
brew install maven
mvn test
```
