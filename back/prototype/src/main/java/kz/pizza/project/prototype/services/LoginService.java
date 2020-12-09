package kz.pizza.project.prototype.services;

import kz.pizza.project.prototype.handlers.CheckEmailHandler;
import kz.pizza.project.prototype.handlers.CheckPhoneNumberHandler;
import kz.pizza.project.prototype.models.Customer;
import kz.pizza.project.prototype.models.LoginData;
import kz.pizza.project.prototype.repositories.CustomerRepository;
import kz.pizza.project.prototype.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
//    private CheckEmailHandler checkEmailHandler = new CheckEmailHandler(new CheckPhoneNumberHandler());

    @Autowired
    private CustomerRepository customerRepository;

    public boolean login(Customer data) {
        if (customerRepository.getCustomerByEmail(data.getEmail()) != null) {
            return customerRepository.getCustomerByEmail(data.getEmail()).getPassword().equals(data.getPassword());
        } else if (customerRepository.getCustomerByPhoneNumber(data.getEmail()) != null) {
            return customerRepository.getCustomerByPhoneNumber(data.getEmail()).getPassword().equals(data.getPassword());
        } else  {
          return false;
        }
    }
}
