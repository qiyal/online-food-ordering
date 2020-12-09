package kz.foodlocator.www.demo.controlers;


import kz.foodlocator.www.demo.models.User;
import kz.foodlocator.www.demo.repository.UserRepository;
import kz.foodlocator.www.demo.services.UserService;
import kz.foodlocator.www.demo.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public String createNewUser(@RequestBody User user) {
        if (userRepository.getUserByEmail().equals(user.getEmail())) {
            return "this email already exists";
        } else if (userRepository.getUserByPhoneNumber().equals(user.getPhoneNumber())) {
            return "this phone number already exists";
        } else {
            userRepository.save(user);
            return "ok";
        }
    }
}
