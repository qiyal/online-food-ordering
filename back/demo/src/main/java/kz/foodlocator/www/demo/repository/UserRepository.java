package kz.foodlocator.www.demo.repository;

import kz.foodlocator.www.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User getUserByEmail();
    User getUserByPhoneNumber();
}
