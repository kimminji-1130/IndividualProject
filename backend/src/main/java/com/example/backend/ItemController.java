package com.example.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @PostMapping
    public ResponseEntity<String> saveItem(@RequestBody ItemDto item) {
        // 여기에 저장 로직을 넣을 수 있음 (예: DB 저장, 메모리 저장 등)
        System.out.println("Received item: " + item.getName() + ", " + item.getPrice());
        return ResponseEntity.ok("Item saved successfully!");
    }
}
