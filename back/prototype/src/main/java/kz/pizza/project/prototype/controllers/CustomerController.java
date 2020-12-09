package kz.pizza.project.prototype.controllers;

import kz.pizza.project.prototype.models.Customer;
import kz.pizza.project.prototype.models.LoginData;
import kz.pizza.project.prototype.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/create")
    public String createUser(@RequestBody Customer customer) {
        String status = customerService.createUser(customer);
        return status;
    }

    @GetMapping("/map")
    public Map<String, String> getMapData(@RequestParam("login") String login) {
        System.out.println("dksjdksdasdhsjfgsfhsgfhjsghjghjgj");
        return customerService.getMapData(login);
    }

    @GetMapping("/{login}")
    public Customer getCustomer(@PathVariable String login) {
        return customerService.getCustomer(login);
    }

    @PutMapping("/{login}")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }


}
