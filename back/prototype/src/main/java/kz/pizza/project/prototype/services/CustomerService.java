package kz.pizza.project.prototype.services;

import kz.pizza.project.prototype.handlers.CheckEmailHandler;
import kz.pizza.project.prototype.handlers.CheckPhoneNumberHandler;
import kz.pizza.project.prototype.models.Customer;
import kz.pizza.project.prototype.models.LoginData;
import kz.pizza.project.prototype.repositories.CustomerRepository;
import kz.pizza.project.prototype.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer getCustomer(String login) {
        if (customerRepository.getCustomerByEmail(login) != null) {
            return customerRepository.getCustomerByEmail(login);
        }
        return customerRepository.getCustomerByPhoneNumber(login);
    }

    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public String createUser(Customer customer) {
        if (customerRepository.getCustomerByEmail(customer.getEmail()) != null) {
            return "Email no free";
        } else if (customerRepository.getCustomerByPhoneNumber(customer.getPhoneNumber()) != null) {
            return "PhoneNumber no free";
        }

        customerRepository.save(customer);
        return "Created";
    }

    public Map<String, String> getMapData(String login) {
        Customer customer;

        Map<String, String> data = new HashMap<>(2);

        if(customerRepository.getCustomerByPhoneNumber(login) != null) {
            customer = customerRepository.getCustomerByPhoneNumber(login);
        } else if (customerRepository.getCustomerByEmail(login) != null) {
            customer = customerRepository.getCustomerByEmail(login);
        } else {
            data.put("urlAvatarImage", "");
            return data;
        }

        data.put("email", customer.getEmail());
        data.put("firstName", customer.getFirstName());
        data.put("lastName", customer.getLastName());
        data.put("urlAvatarImage", customer.getUrlAvatar());
        return data;
    }
}
