package com.gdjr.oldz2.service;

import com.gdjr.oldz2.pojo.Book;
import com.gdjr.oldz2.pojo.BookInformation;
import com.gdjr.oldz2.pojo.Category;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface BookService {

    public BookInformation queryBookById();

    public ArrayList<Map<String,Object>> queryCategory();

    public List<Book> selectByCategoryId(String id);

}
