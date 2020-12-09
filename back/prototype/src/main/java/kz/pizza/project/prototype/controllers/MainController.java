package kz.pizza.project.prototype.controllers;

import kz.pizza.project.prototype.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class MainController {
//    @Autowired
//    private UserRepository userRepository;
//
//    @GetMapping(path="/all")
//    public @ResponseBody Iterable<User> getAllUsers() {
//        return userRepository.findAll();
//    }
}
