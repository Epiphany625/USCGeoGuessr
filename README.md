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
  PRIMARY KEY (`user_id`)
);
```


**Edit application.properties**
Edit the file located at src/main/resources/application.properties to configure environment-specific settings.
```
spring.application.name=backend

spring.datasource.url=jdbc:mysql://localhost:3306/USCGeoguessr
spring.datasource.username=root
spring.datasource.password=<fill_in_your_password_for_database>
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
