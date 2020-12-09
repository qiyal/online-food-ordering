package kz.pizza.project.prototype.handlers;

import kz.pizza.project.prototype.models.Customer;
import kz.pizza.project.prototype.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckPhoneNumberHandler extends Handler {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public boolean check(Customer data) {
        Customer customer = customerRepository.getCustomerByPhoneNumber(data.getEmail());

        if (customer.getPhoneNumber().contains("+")) {
            if (customer.getPhoneNumber().equals(data.getPhoneNumber()) && customer.getPassword().equals(data.getPhoneNumber())) {
                return true;
            }
        }

        return checkNext(data);
    }
}
