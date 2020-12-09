package kz.foodlocator.www.demo.services;

import kz.foodlocator.www.demo.models.User;
import kz.foodlocator.www.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public String createNewUser(User user) {
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
