package com.hackathon.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ORDERS")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "PRiCE")
    private Double price;
    @Column(name = "FK_USER_ID ")
    private Long userId;
    @Column(name = "ORDER_STATUS")
    private OrderStatus status;
    @Column(name = "CREATE_TIME")
    private LocalDateTime createTime;
    @Column(name = "PAYMENT_TIME")
    private LocalDateTime paymentTime;

    public Order() {
    }

    public Order(Double price, Long userId, OrderStatus status, LocalDateTime createTime, LocalDateTime paymentTime) {
        this.price = price;
        this.userId = userId;
        this.status = status;
        this.createTime = createTime;
        this.paymentTime = paymentTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getPaymentTime() {
        return paymentTime;
    }

    public void setPaymentTime(LocalDateTime paymentTime) {
        this.paymentTime = paymentTime;
    }
}