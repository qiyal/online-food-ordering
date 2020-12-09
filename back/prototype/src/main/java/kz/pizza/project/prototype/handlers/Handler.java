package kz.pizza.project.prototype.handlers;

import kz.pizza.project.prototype.models.Customer;

public abstract class Handler {
    private Handler next;

    public void setNext(Handler nextHandler) {
        this.next = nextHandler;
    }

    public Handler getNext() {
        return next;
    }

    public abstract boolean check(Customer data);

    protected boolean checkNext(Customer data) {
        if(next == null) {
            return true;
        }

        return next.check(data);
    }
}
