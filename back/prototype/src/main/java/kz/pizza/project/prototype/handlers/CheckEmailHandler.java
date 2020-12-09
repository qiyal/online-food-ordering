package kz.pizza.project.prototype.handlers;

import kz.pizza.project.prototype.models.Customer;
import kz.pizza.project.prototype.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class CheckEmailHandler extends Handler {
    @Autowired
    private CustomerRepository customerRepository;

    public CheckEmailHandler() {}

    public CheckEmailHandler(Handler handler) {
        setNext(handler);
    }

    @Override
    public boolean check(Customer data) {
        System.out.println("CHEJDNJNSJDNJSNDJSDNJ");


        if(data.getEmail().contains("@")) {
            if (customerRepository.getCustomerByEmail(data.getEmail()) != null) {

                if (customerRepository.getCustomerByEmail(data.getEmail()).getEmail().equals(data.getEmail()) && customerRepository.getCustomerByEmail(data.getPassword()).getPassword().equals(data.getPassword())) {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        }

        return checkNext(data);
    }
}
