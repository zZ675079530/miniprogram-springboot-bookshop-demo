package com.gdjr.oldz2.mapper;

import com.gdjr.oldz2.pojo.Book;
import com.gdjr.oldz2.pojo.BookInformation;
import com.gdjr.oldz2.pojo.Category;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface BookMapper {

    BookInformation queryBookById();

    List<Category> queryCategory();

    List<Book> selectByCategoryId(String categoryId);

}
