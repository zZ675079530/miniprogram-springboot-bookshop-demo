package com.gdjr.oldz2.service.impl;

import com.gdjr.oldz2.mapper.BookMapper;
import com.gdjr.oldz2.pojo.Book;
import com.gdjr.oldz2.pojo.BookInformation;
import com.gdjr.oldz2.pojo.Category;
import com.gdjr.oldz2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.*;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookMapper bookMapper;

    @Override
    public BookInformation queryBookById(){

        return bookMapper.queryBookById();
    }

    /**
     *
     * list里有一个map , map里又有一个string和list , 最后那个list还有一个map
     * 第一个list是大类 ， 还有一个list是小类 ， 小类每一条是map 是因为要有一个id 方便点击后传参搜索
     */
    @Override
    public ArrayList<Map<String,Object>> queryCategory(){
        ArrayList<Map<String,Object>> cate = new ArrayList<Map<String,Object>>();
        List<Category> list = bookMapper.queryCategory();
        for (Category c :list){
            if (c.getParentId().equals("#")){
                Map<String,Object> mapCate = new HashMap<>();
                ArrayList<Map<String,String>> smallCateList = new ArrayList<>();
                mapCate.put("largeCate", c.getName());
                for (Category small : list){
                    if (small.getParentId().equals(c.getCategoryId())){

                        System.out.println(small.getParentId());

                        Map<String,String> smallCateMap = new HashMap<>();
                        smallCateMap.put("id", small.getCategoryId());
                        smallCateMap.put("name", small.getName());
                        smallCateList.add(smallCateMap);
                    }
                }
                mapCate.put("smallCate", smallCateList);
                cate.add(mapCate);
            }

        }
        return cate;
    }

    /**
     * 按类别 检索 商品
     */
    @Override
    public List<Book> selectByCategoryId(String id) {
        List<Book> bookList = bookMapper.selectByCategoryId(id);
        return bookList;
    }
}
