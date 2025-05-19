package com.example.backend;

public class ItemDto {
    private String name;
    private int price;

    // 기본 생성자
    public ItemDto() {}

    // 생성자
    public ItemDto(String name, int price) {
        this.name = name;
        this.price = price;
    }

    // Getter, Setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
