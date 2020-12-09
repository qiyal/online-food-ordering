package kz.pizza.project.prototype.controllers;

import kz.pizza.project.prototype.models.Customer;
import kz.pizza.project.prototype.models.LoginData;
import kz.pizza.project.prototype.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("")
    public String createUser(@RequestBody Customer customer) {
        boolean status = loginService.login(customer);

        if (status)
            return "true";
        return "false";
    }
}
