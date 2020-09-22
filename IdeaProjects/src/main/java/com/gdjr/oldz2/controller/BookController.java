package com.gdjr.oldz2.controller;

import com.gdjr.oldz2.pojo.Book;
import com.gdjr.oldz2.pojo.Category;
import com.gdjr.oldz2.service.impl.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class BookController {

    @Autowired
    BookServiceImpl bookService;

    /**
     * 类别目录页的加载
     */
    @ResponseBody
    @GetMapping("cate")
    public ArrayList<Map<String,Object>> category(){
        return bookService.queryCategory();
    }

    /**类别ID 查找
     * 按
     */
    @ResponseBody
    @GetMapping ("cateList/{id}")
    public List<Book> cateList(@PathVariable(name="id")String id){
        return bookService.selectByCategoryId(id);
    }
}
