package com.gdjr.oldz2.controller;

import com.gdjr.oldz2.pojo.Book;
import com.gdjr.oldz2.pojo.BookInformation;
import com.gdjr.oldz2.service.impl.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class BookListController {

    @Autowired
    BookServiceImpl bookService;

    @RequestMapping("book")
    @ResponseBody
    public BookInformation test(){
        return bookService.queryBookById();
    }



}
