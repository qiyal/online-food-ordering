package kz.pizza.project.prototype.models;

public class LoginData {
    private String login;
    private String password;

    public LoginData() {}

    public LoginData(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getLogin() {
        return login;
    }
}
