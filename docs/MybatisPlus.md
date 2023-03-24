---
lang: zh-CN
title: MybatisPlus
description: Xiaojunjie的个人网站
---
笔记结构

![image-20220914102401154](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220914102401154.png)

官网：[MyBatis-Plus (baomidou.com)](https://baomidou.com/)

Mybatis-Plus结构

![image-20220914102700977](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220914102700977.png)

## HelloMybatisPlus

构建一个SpringBoot项目

引入依赖

配置

创建实体类

```java
package com.mamba.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @ClassName User
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:40
 * @Version 1.0
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id;
    private String name;
    private String password;
    private Integer utype;


}
```



创建Mapper接口（plus提供了BaseMapper，提供了一些基础的方法接口，支持泛型）

 

```java
package com.mamba.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mamba.pojo.User;

/**
 * @ClassName UserMapper
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:55
 * @Version 1.0
 */

public interface UserMapper extends BaseMapper<User> {


}
```

在启动类上添加@MapperScan

将指定包下的所有接口利用动态代理机制，生成对象在Spring容器中

```java
package com.mamba;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.mamba.mapper")
public class HelloMyBatisPlusApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloMyBatisPlusApplication.class, args);
    }

}
```

测试类

```java
@SpringBootTest
public class MyTest {

    @Autowired
    private UserMapper userMapper; // 这里虽然会警告无法自动注入，但是是可以运行的

    @Test
    public void test(){
        User user = userMapper.selectById(3);
        System.out.println(user);
    }
}
```

application.properties添加日志输出

```properties
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```

## BaseMapper

提供了一系列对单表操作的基本操作

#### insert

```java
@Test
public void testInsert(){
    User user = new User("user2", "123456", 2);
    int res = userMapper.insert(user);
    System.out.println(res);
    System.out.println(user.getId()); // 将自增的注解自动注入到实体类
}
```

#### delete

```java
@Test
public void testDelete(){
    int res = userMapper.deleteById(15);
    System.out.println(res);
}
```

```java
/**\
 * 根据Map中的条件删除
 */
@Test
public void testDeleteByMap(){
    Map<String, Object> map = new HashMap<>();
    map.put("name", "user2");
    int res = userMapper.deleteByMap(map);
    System.out.println(res);
}


//==>  Preparing: DELETE FROM user WHERE name = ?
//==> Parameters: user2(String)
//<==    Updates: 1
```

```java
/**\
 * 根据id批量删除
 */
@Test
public void testDeleteByIds(){

    ArrayList<Integer> ids = new ArrayList<>();
    ids.add(1);
    ids.add(2);
    ids.add(3);

    int res = userMapper.deleteBatchIds(ids);
    System.out.println(res);
}

/*
* 
* ==>  Preparing: DELETE FROM user WHERE id IN ( ? , ? , ? )
    ==> Parameters: 1(Integer), 2(Integer), 3(Integer)
    <==    Updates: 1
* 
* 
* */
```

#### update

```java
/**
 * 根据id修改
 * 传入实体类对象
 * 为空的属性，不做修改
 * 
 * */
@Test
public void testUpdate(){
    User user = new User();
    user.setId(8);
    user.setName("第8号user");
    int res = userMapper.updateById(user);
    System.out.println(res);
}

/*
    * ==>  Preparing: UPDATE user SET name=? WHERE id=?
    ==> Parameters: 第8号user(String), 8(Integer)
    <==    Updates: 1
* 
* 
* */
```

#### select

```java
/**
 * 根据id查询数据
 */
@Test
public void testSelectById(){
    User user = userMapper.selectById(8);
    System.out.println(user);
}

/*
    * ==>  Preparing: SELECT id,name,password,utype FROM user WHERE id=?
==> Parameters: 8(Integer)
<==    Columns: id, name, password, utype
<==        Row: 8, 第8号user, 123456, 3
<==      Total: 1
    * 
    * 
    * */
```

```java
    /**
     * 根据ids批量查询
     *
     */
    @Test
    public void testSelectByIds(){
        List<Integer> ids = Arrays.asList(8, 9, 10);

        List<User> list = userMapper.selectBatchIds(ids);
        for (User user : list) {
            System.out.println(user);
        }

        
        /*
        * 
        * JDBC Connection [HikariProxyConnection@1081635795 wrapping com.mysql.cj.jdbc.ConnectionImpl@608bc8f8] will not be managed by Spring
==>  Preparing: SELECT id,name,password,utype FROM user WHERE id IN ( ? , ? , ? )
==> Parameters: 8(Integer), 9(Integer), 10(Integer)
<==    Columns: id, name, password, utype
<==        Row: 8, 第8号user, 123456, 3
<==        Row: 9, XJJ, 456, 2
<==        Row: 10, mamba1, 123132, 3
<==      Total: 3
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@1d96d872]
User(id=8, name=第8号user, password=123456, utype=3)
User(id=9, name=XJJ, password=456, utype=2)
User(id=10, name=mamba1, password=123132, utype=3)

*/

        
    }
```

```java
    /**
     * 根据map中的条件，进行查询
     */
    @Test
    public void testSelectByMap(){

        Map<String, Object> map = new HashMap<>();
        map.put("utype", 2);
        List<User> list = userMapper.selectByMap(map);
        for (User user : list) {
            System.out.println(user);
        }

        
        
        /*
        * JDBC Connection [HikariProxyConnection@1579139754 wrapping com.mysql.cj.jdbc.ConnectionImpl@688d411b] will not be managed by Spring
==>  Preparing: SELECT id,name,password,utype FROM user WHERE utype = ?
==> Parameters: 2(Integer)
<==    Columns: id, name, password, utype
<==        Row: 9, XJJ, 456, 2
<==        Row: 14, mamba5, 123132, 2
<==      Total: 2
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@834831b]
User(id=9, name=XJJ, password=456, utype=2)
User(id=14, name=mamba5, password=123132, utype=2)
        * 
        * */
    }
```

```java
    /**
     * 
     * 根据条件构造器查询，返回List
     * 条件构造器为null ,即无条件，查询所有的数据
     */
    @Test
    public void testselectList(){

        List<User> list= userMapper.selectList(null); // 没有条件构造器，默认查询所有数据
        for (User user : list) {
            System.out.println(user);
        }
        
        
        
        /*
        * JDBC Connection [HikariProxyConnection@1289454852 wrapping com.mysql.cj.jdbc.ConnectionImpl@76db540e] will not be managed by Spring
==>  Preparing: SELECT id,name,password,utype FROM user
==> Parameters: 
<==    Columns: id, name, password, utype
<==        Row: 8, 第8号user, 123456, 3
<==        Row: 9, XJJ, 456, 2
<==        Row: 10, mamba1, 123132, 3
<==        Row: 11, mamba2, 123132, 3
<==        Row: 12, mamba3, 123132, 3
<==        Row: 13, mamba4, 123132, 3
<==        Row: 14, mamba5, 123132, 2
<==      Total: 7
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@234a8f27]
User(id=8, name=第8号user, password=123456, utype=3)
User(id=9, name=XJJ, password=456, utype=2)
User(id=10, name=mamba1, password=123132, utype=3)
User(id=11, name=mamba2, password=123132, utype=3)
User(id=12, name=mamba3, password=123132, utype=3)
User(id=13, name=mamba4, password=123132, utype=3)
User(id=14, name=mamba5, password=123132, utype=2)
        * 
        * 
        * */
    }
```

#### 自定义方法

在mybatis默认的mapper文件目录下创建mapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.mamba.mapper.UserMapper">
    <select id="selectMapById" resultType="map">
        select id,name,password, utype from user where id=##{id}
    </select>
</mapper>
```

在userMapper接口中添加对应的方法

```java
package com.mamba.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mamba.pojo.User;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * @ClassName UserMapper
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:55
 * @Version 1.0
 */


@Repository
public interface UserMapper extends BaseMapper<User> {
    /**
     * 根据用户id查询为map集合
     * @param id
     * @return
     */
    @MapKey("id")
    Map<String, Object> selectMapById(Integer id);


}
```

```java
package com.mamba;

import com.mamba.mapper.UserMapper;
import com.mamba.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

/**
 * @ClassName CustomFeaturesTest
 * @Description TODO 在baseMapper的基础上，自定义一系列方法,测试
 * @Author mamba
 * @Date 2022/9/15 15:16
 * @Version 1.0
 */


@SpringBootTest
public class CustomFeaturesTest {

    @Autowired
    private UserMapper userMapper;


    @Test
    public void testSelectMapById(){
        Map<String, Object> user = userMapper.selectMapById(8);

        System.out.println(user);
    }

}
```

## BaseService

mybatis除了提供基础的Mapper，也提供了基础的Service接口**IService**

和基础的Service实现类**ServiceImpl**



```java
package com.mamba.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.mamba.pojo.User;

/**
 * @ClassName UserService
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:35
 * @Version 1.0
 */

public interface UserService extends IService<User> {
}
```

说明:

- 通用 Service CRUD 封装[IService (opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/service/IService.java)接口，进一步封装 CRUD 采用 `get 查询单行` `remove 删除` `list 查询集合` `page 分页` 前缀命名方式区分 `Mapper` 层避免混淆，
- 泛型 `T` 为任意实体对象
- 建议如果存在自定义通用 Service 方法的可能，请创建自己的 `IBaseService` 继承 `Mybatis-Plus` 提供的基类
- 对象 `Wrapper` 为 [条件构造器](https://baomidou.com/01.指南/02.核心功能/wrapper.html)

**对于ServiceImpl，仅仅提供了一些很简单的单表操作，肯定无法满足业务需求，因此UserServiceImpl既要继承`ServiceImpl<T>`的一些基础方法，也要实现自定义的UserService，实现自定义的方法**

UserService

```java
package com.mamba.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.mamba.pojo.User;

import java.util.Map;

/**
 * @ClassName UserService
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:35
 * @Version 1.0
 */

public interface UserService extends IService<User> {
    Map<String, Object> selectMapById(Integer id);
}
```

UserServiceImpl

```java
import com.mamba.service.UserService;

/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:39
 * @Version 1.0
 */


@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    

}
```

ServiceImpl<UserMapper, User>中已经实现了一些基础的Service方法



#### 测试——count()

```java


/**
     * 测试userServiceImpl通过继承ServiceImpl类，调用ServiceImpl类中的count方法 查询所有记录数
     */
    @Test
    public void testServiceCount(){
        int res = userService.count();
        System.out.println(res);
    }
    
    /*
    * 
    * ==>  Preparing: SELECT COUNT( * ) FROM user
==> Parameters: 
<==    Columns: COUNT( * )
<==        Row: 7
<==      Total: 1
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@bc0f53b]
7
    * 
    * */
```

#### 测试—批量增加

```java
 /**
     *
     * 批量增加
      测试userServiceImpl通过继承ServiceImpl类，调用ServiceImpl类中的saveBatch方法
     */
    @Test
    public void testBatchInsert(){

        List<User> list = new ArrayList<>();
        list.add(new User("xjj2", "123123", 3));
        list.add(new User("xjwj", "1231fsd23", 2));
        list.add(new User("xwjj", "123123f", 2));
        list.add(new User("jj", "1sdf23123", 3));

        boolean res = userService.saveBatch(list);

        
        
        /*
        * 
        * ==>  Preparing: INSERT INTO user ( name, password, utype ) VALUES ( ?, ?, ? )
        ==> Parameters: xjj2(String), 123123(String), 3(Integer)
        ==> Parameters: xjwj(String), 1231fsd23(String), 2(Integer)
        ==> Parameters: xwjj(String), 123123f(String), 2(Integer)
        ==> Parameters: jj(String), 1sdf23123(String), 3(Integer)
        * 
        * */
    }
```

#### 测试——自定义方法selectMapById

```java
    /**
     * 测试userServiceImpl通过实现UserService接口，调用的自定义方法selectMapById
     */
    @Test
    public void testSelectMapById(){

        Map<String ,Object> map = userService.selectMapById(8);
        System.out.println(map);
        
        
    /*
    * ==>  Preparing: select id,name,password, utype from user where id=?
==> Parameters: 8(Integer)
<==    Columns: id, name, password, utype
<==        Row: 8, 第8号user, 123456, 3
<==      Total: 1
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@33f98231]
{8={password=123456, name=第8号user, utype=3, id=8}}
    *
    *
    * */
    }
```

## 常用注解

mybatisplus默认将实体类名称（小写）与表名称进行映射

将属性名与字段名进行映射

当两者不同时，需要用到一些注解进行映射

#### @TableName

当实体类名与表明不一致时，在实体类上添加@TableName注解，指定表名，实现实体类与表的映射

如果所有的表名有一个通用前缀，比如t_user,t_student。。。。mybatis也支持通过全局配置，实现映射

```properties
mybatis-plus.global-config.db-config.table-prefix=t_
```

这样就不用一 一配置了

#### @TableId

mybatisplus默认将实体类中的**id**成员遍量作为主键在实体类的映射，如果字段和成员变量不叫id，而是user_id, stu_id，就无法与主键映射，这是需要在实体类中与主键字段对应的属性上添加@TableId属性，显式指定该字段为主键的映射成员变量

```java
package com.mamba.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @ClassName User
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:40
 * @Version 1.0
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @TableId(value="id",type= IdType.AUTO) //将属性对应的字段指定为主键
    private Integer id;
    private String name;
    private String password;
    private Integer utype;

    public User(String name, String password, Integer utype) {
        this.name = name;
        this.password = password;
        this.utype = utype;
    }
}
```

###### value属性

当表中列名与实体类中的属性名不一致时，需要通过value属性值，进行对应

当两者一致，则不用写，mybatisplus自动进行映射

###### type属性

设置主键id的填入方式类型

IdType是一个枚举类

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.baomidou.mybatisplus.annotation;

public enum IdType {
    AUTO(0),
    NONE(1),
    INPUT(2),
    ASSIGN_ID(3),
    ASSIGN_UUID(4),
    /** @deprecated */
    @Deprecated
    ID_WORKER(3),
    /** @deprecated */
    @Deprecated
    ID_WORKER_STR(3),
    /** @deprecated */
    @Deprecated
    UUID(4);

    private final int key;

    private IdType(int key) {
        this.key = key;
    }

    public int getKey() {
        return this.key;
    }
}
```

TableId中，IdType默认为None，雪花算法一个uuid

如果所有的实体类的主键策略一致，也可以通过全局配置实现

```properties
mybatis-plus.global-config.db-config.id-type=uuid
```

如果在实体类对象中设置了id，则会优先使用手动设置的id值，而不会使用自增、雪花算法等其他主键策略

#### 雪花算法

常见的数据库扩展方式：业务分库、主从复制、数据库分表

雪花id并不是uuid，而是结合了自增id和uuid的优势，既不会重复，也有自增特性

###### 数据库分表

单表数据量爆炸，需要对表进行拆分，一般水平拆分、垂直拆分

![image-20220916153811969](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220916153811969.png)

######## 垂直拆分

适合将不常用但占用空间的字段列拆分出去

######## 水平拆分

适合拆分数据量大的表，关键在于如何根据主键id对数据进行拆分

1. 主键自增

   比如以1000w为上限，达到1000w就分出一张表

   分表范围的选取很重要，太小导致分表过多，太大导致单表依然数据量很大

   优点：非常简单，数据多了只需要增加表即可，不会影响之前的数据

   问题：分布不均匀。比如1000w数据分一张表，那么有10000010条数据时，一张表是满的，而另一张表只有10条数据

2. 取模

   ![image-20220916154412762](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220916154412762.png)

3. 雪花算法

   该算法是由推特公布的分布式主键生成算法，能够保证不同表的不同主键的不重复性，以及相同表的主键有序性

   长度64位 Long型

![image-20220916155039773](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220916155039773.png)

 

#### @TableField

 

 

#### @TableLogic

物理删除：真是删除，将对应数据从数据库删除

逻辑删除，假删除，记录为删除状态，数据库不会真的删除

逻辑删除可以进行数据恢复

@TableLogic  标识的属性，可以作为逻辑删除的标识属性

## 条件构造器

Wrapper

用于封装条件

![image-20220917104532941](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220917104532941.png)

![image-20220917104605310](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220917104605310.png)

#### QueryWrapper

QueryWrapper主要是可以决定where语句的内容，提供了一系列动态生成where语句的方法

```java
    @Test
    public void test(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("name", "mam")
                .eq("utype", 3);
        List<User> list = userMapper.selectList(queryWrapper);
        for (User user : list) {
            System.out.println(user);
        }
        
        /*
        * ==>  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ? AND utype = ?)
==> Parameters: %mam%(String), 3(Integer)
<==    Columns: id, name, password, utype
<==        Row: 10, mamba1, 123132, 3
<==        Row: 11, mamba2, 123132, 3
<==        Row: 12, mamba3, 123132, 3
<==        Row: 13, mamba4, 123132, 3
<==      Total: 4

        * 
        * 
        * */
    }
```

```java
    @Test
    public void testOrderBy(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByAsc("utype")
                .orderByAsc("id");
        //先根据utype排序，然后根据id排序
        List<User> list = userMapper.selectList(queryWrapper);
        for (User user : list) {
            System.out.println(user);
        }
/*
* ==>  Preparing: SELECT id,name,password,utype FROM user ORDER BY utype ASC,id ASC
==> Parameters: 
<==    Columns: id, name, password, utype
<==        Row: 9, XJJ, 456, 2
<==        Row: 14, mamba5, 123132, 2
<==        Row: 22, xjwj, 1231fsd23, 2
<==        Row: 23, xwjj, 123123f, 2
<==        Row: 8, 第8号user, 123456, 3
<==        Row: 10, mamba1, 123132, 3
<==        Row: 11, mamba2, 123132, 3
<==        Row: 12, mamba3, 123132, 3
<==        Row: 13, mamba4, 123132, 3
<==        Row: 21, xjj2, 123123, 3
<==        Row: 24, jj, 1sdf23123, 3
<==      Total: 11

* */
    }
```

```java
@Test
    public void testDelete(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("utype",4);
        int res = userMapper.delete(queryWrapper);
        System.out.println(res);
        
        /*
        * ==>  Preparing: DELETE FROM user WHERE (utype = ?)
==> Parameters: 4(Integer)
<==    Updates: 1
        * */
    }
```

```java
@Test
    public void testUpdate(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        // update 的条件
        queryWrapper.like("name", "mam")
                .eq("utype", 3)
                .or() // 上下两个条件之间or
                .like("password", "123");

        User user = new User();
        //update的内容
        user.setUtype(4);
        userMapper.update(user, queryWrapper);


        /*
        *
        *==>  Preparing: UPDATE user SET utype=? WHERE (name LIKE ? AND utype = ? OR password LIKE ?)
==> Parameters: 4(Integer), %mam%(String), 3(Integer), %123%(String)
<==    Updates: 9
        *
        *
        * */
    }
```

Wrapper默认在每一个条件之间加上and

如果需要加括号修改顺序，需要根据需求显式加上and()

并且在and()中使用lambda表达式继续添加括号内的条件

lambda表达式中的条件将会优先执行

```java
@Test
    public void testWrapperAnd(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("name", "mam")
                .and(i -> i.eq("utype", 3)
                        .or()
                        .eq("utype", 4)
                )
        ;

        List<User> list = userMapper.selectList(queryWrapper);
        for (User user : list) {
            System.out.println(user);
        }

        /*
        *==>  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ? AND (utype = ? OR utype = ?))
==> Parameters: %mam%(String), 3(Integer), 4(Integer)
<==    Columns: id, name, password, utype
<==        Row: 10, mamba1, 123132, 4
<==        Row: 11, mamba2, 123132, 4
<==        Row: 12, mamba3, 123132, 4
<==        Row: 13, mamba4, 123132, 4
<==        Row: 14, mamba5, 123132, 4
<==      Total: 5

        *
        *
        *
        * */

    }
```

###### 组装查询

查询一部分字段，用map接收

selectMaps

```java
@Test
    public void testSelect(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.select("name", "password");  //只需要查询两个字段
        List<Map<String, Object>> list = userMapper.selectMaps(queryWrapper);
        list.forEach(System.out::println);

        /*
        *==>  Preparing: SELECT name,password FROM user
==> Parameters: 
<==    Columns: name, password
<==        Row: 第8号user, 123456
<==        Row: XJJ, 456
<==        Row: mamba1, 123132
<==        Row: mamba2, 123132
<==        Row: mamba3, 123132
<==        Row: mamba4, 123132
<==        Row: mamba5, 123132
<==        Row: xjj2, 123123
<==        Row: xjwj, 1231fsd23
<==        Row: xwjj, 123123f
<==      Total: 10
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@34e20e6b]
{password=123456, name=第8号user}
{password=456, name=XJJ}
{password=123132, name=mamba1}
{password=123132, name=mamba2}
{password=123132, name=mamba3}
{password=123132, name=mamba4}
{password=123132, name=mamba5}
{password=123123, name=xjj2}
{password=1231fsd23, name=xjwj}
{password=123123f, name=xwjj}
        *
        * */
    }
```

#### 组装子查询



使用wrapper.inSql()

```java
 @Test
    public void testSubSelect(){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        /*查询id小于10的用户信息
        使用子查询实现
        select id, name, password, utype from user
        where id in
        (select id from user where id <= 10)
        */
        queryWrapper.inSql("id", "select id from user where id <= 10");//写子查询的sql语句
        //外部select语句条件为：in （子查询的结果）

        List<User> list = userMapper.selectList(queryWrapper);

        for (User user : list) {
            System.out.println(user);
        }
        
        
        /*
        * 
        * ==>  Preparing: SELECT id,name,password,utype FROM user WHERE (id IN (select id from user where id <= 10))
==> Parameters: 
<==    Columns: id, name, password, utype
<==        Row: 8, 第8号user, 123456, 4
<==        Row: 9, XJJ, 456, 2
<==        Row: 10, mamba1, 123132, 4
<==      Total: 3
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@56d93692]
User(id=8, name=第8号user, password=123456, utype=4)
User(id=9, name=XJJ, password=456, utype=2)
User(id=10, name=mamba1, password=123132, utype=4)


        * 
        * */
    }
```

#### UpdateWrapper

虽然之前配合QueryWrapper，使用mapper.update(User, queryMapper)可以实现update操作

但是UpdateWrapper是专门用来update操作的

UpdateWrapper不仅可以设置修改的条件，还可以直接设置修改的字段

UpdateWrappper提供了set方法，设置修改的字段

```java
@Test
public void testUpdateWrapper(){
    UpdateWrapper<User> updateWrapper = new UpdateWrapper<>();
    updateWrapper.set("name", "mamba666") // 设置修改的字段，字段值
     .eq("id", 8); // 条件是id=8

    int res = userMapper.update(null, updateWrapper);//这里不用传入实体类对象，直接传入updateWrapper即可


    /*
    * ==>  Preparing: UPDATE user SET name=? WHERE (id = ?)
    ==> Parameters: mamba666(String), 8(Integer)
    <==    Updates: 1
    *
    *
    * */
}
```



#### 条件组装

很多场景中，用户选择了某一个条件，后台才会将该条件加入到sql语句的where语句中，这里模拟实现一下这种业务

```java
@Test
public void testConditionMerge(){
    String name = "mam"; // 如果name为null或者""， 则不加入where语句
    Integer utype = 0; //如果utype为null或者0，则不加入where语句

    QueryWrapper<User> queryWrapper = new QueryWrapper<>();
    if (!StringUtils.isBlank(name)){ //isBlank判断字符串是否为null， “”， 空白符
        queryWrapper.like("name", name);
    }
    if (utype != null && utype != 0){
        queryWrapper.eq("utype", utype);

    }

    List<User> list = userMapper.selectList(queryWrapper);

    for (User user : list) {
        System.out.println(user);
    }
    
    
    /*
    * 
    * 
    * ==>  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ?)
        ==> Parameters: %mam%(String)
        <==    Columns: id, name, password, utype
        <==        Row: 8, mamba666, 123456, 4
        <==        Row: 10, mamba1, 123132, 4
        <==        Row: 11, mamba2, 123132, 4
        <==        Row: 12, mamba3, 123132, 4
        <==        Row: 13, mamba4, 123132, 4
        <==        Row: 14, mamba5, 123132, 4
        <==      Total: 6
    * */
}
```



###### condition

上面的例子是需要我们自己代码去判断的，QueryWrapper对于每一种条件方法，也重载了另一种实现方式，添加了一个形参condition,是Boolean类型，可以填入一系列条件判断语句，当满足条件是，该条件方法才会添加到sql语句中

我们用这种方法，再实现一下与上面相同的操作

```java
@Test
public void testConditionArgument(){
    QueryWrapper<User> queryWrapper = new QueryWrapper<>();
    String name = "mam";
    Integer utype = 0;

    queryWrapper.like(!StringUtils.isBlank(name), "name", name)
            .eq(utype != null && utype != 0, "utype", utype);
    List<User> list = userMapper.selectList(queryWrapper);

    for (User user : list) {
        System.out.println(user);
    }



    /*
    *
    *==>  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ?)
        ==> Parameters: %mam%(String)
        <==    Columns: id, name, password, utype
        <==        Row: 8, mamba666, 123456, 4
        <==        Row: 10, mamba1, 123132, 4
        <==        Row: 11, mamba2, 123132, 4
        <==        Row: 12, mamba3, 123132, 4
        <==        Row: 13, mamba4, 123132, 4
        <==        Row: 14, mamba5, 123132, 4
        <==      Total: 6

    *
    * */
}
```

SQL、查询结果和上面一致

这种带有condition的方法实际就是把if语句内嵌实现的

#### LambdaQueryWrapper

使用QueryWrapper和UpdateWrapper的时候，容易出现列名写错的情况

**LambdaQueryWrapper和LambdaUpdateWrapper支持使用Lambda表达式获取字段名,代替了之前QueryWrapper和UpdateWrapper中使用字符串传入字段名的方式。**

比如User::getId

可以根据这个lambda表达式去获取该属性对应的表中的字段名

```java
@Test
public void testLambdaQueryWrapper() {
    String name = "mam";
    Integer utype = 0;

    LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.like(StringUtils.isNotBlank(name), User::getName, name)
            .eq(utype != null && utype != 0, User::getUtype, utype);  //第二个参数直接使用lambda表达式获取，避免输入错误

    List<User> list = userMapper.selectList(queryWrapper);
    for (User user : list) {
        System.out.println(user);
    }

    
    /*
    * ==>  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ?)
    ==> Parameters: %mam%(String)
    <==    Columns: id, name, password, utype
    <==        Row: 8, mamba666, 123456, 4
    <==        Row: 10, mamba1, 123132, 4
    <==        Row: 11, mamba2, 123132, 4
    <==        Row: 12, mamba3, 123132, 4
    <==        Row: 13, mamba4, 123132, 4
    <==        Row: 14, mamba5, 123132, 4
    <==      Total: 6

    * 
    * 
    * */
}
```



#### LambdaUpdateWrapper

```java
@Test
public void testLambdaUpdateWrapper() {
    LambdaUpdateWrapper<User> lm = new LambdaUpdateWrapper<>();
    String name = "abc";
    Integer utype = 5;
    Integer id = 8;
    lm.set(!StringUtils.isBlank(name), User::getName, name)
            .set(utype != null && utype!= 0, User::getUtype, utype)
            .eq(id != null && id != 0, User::getId, id);


    int res = userMapper.update(null, lm);
    System.out.println(res);



    /*
    *
    * ==>  Preparing: UPDATE user SET name=?,utype=? WHERE (id = ?)
    ==> Parameters: abc(String), 5(Integer), 8(Integer)
    <==    Updates: 1
    *
    *
    * */
}
```



可以发现，使用LambdaQueryWrapper、LambdaUpdateWrapper生成的sql语句和QueryWrapper、UpdateWrapper生成的sql语句是一样的

## MybatisPlus插件

#### 分页插件

1. 配置

   新建一个MybatisPlus配置类

   ```java
   package com.mamba.config;
   
   import com.baomidou.mybatisplus.annotation.DbType;
   import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
   import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
   import org.mybatis.spring.annotation.MapperScan;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   
   /**
    * @ClassName MybatisPlusConfig
    * @Description TODO
    * @Author mamba
    * @Date 2022/9/17 20:13
    * @Version 1.0
    */
   
   @Configuration
   @MapperScan("com.mamba.mapper")  // 将扫描包的注解移动至此
   public class MybatisPlusConfig {
   
   
       /**
        * 配置mybatisplus插件
        *
        * @return
        */
       @Bean  // 将该方法的返回值对象放入ioc容器
       public MybatisPlusInterceptor mybatisPlusInterceptor() {
           MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
           // 添加内部插件， 这里参数就填入你需要的插件类型
           interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));  // 由于不同的数据库类型，对分页的实现是不同的，这里要传入数据库类型
           return interceptor;  // 将该interceptor返回，放入spring容器，就实现了插件的配置
       }
   }
   ```

```java
@Test
public void test(){
    Integer id = 0;  // id 为0 ，默认不会通过条件构造器的条件，默认查询所有数据
    LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper<>();
    lambdaQueryWrapper.eq(id != null && id != 0, User::getId, id);
    Page<User> page = new Page<>(2, 5); // 默认从1开始
    userMapper.selectPage(page, lambdaQueryWrapper);  // 这里数据会直接保存在page对象中


    System.out.println(page);



    /*
    *
    * ==>  Preparing: SELECT id,name,password,utype FROM user LIMIT ?,?
    ==> Parameters: 5(Long), 5(Long)
    <==    Columns: id, name, password, utype
    <==        Row: 13, mamba4, 123132, 4
    <==        Row: 14, mamba5, 123132, 4
    <==        Row: 21, xjj2, 123123, 4
    <==        Row: 22, xjwj, 1231fsd23, 4
    <==        Row: 23, xwjj, 123123f, 4
    <==      Total: 5
        * */
}
```

###### 自定义分页功能

在实际业务中，对于分页的需求更加灵活，比如根据某一字段排序之后进行分页，这个时候需要自定义分页方法，实现相关业务



可以参照BaseMapper中的selectPage接口自定义一个返回Page的方法

```java
<E extends IPage<T>> E selectPage(E page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);//BaseMapper中的selectPage
```

```java
Page<User> selectPageByUtype(@Param("page") Page<User> page, @Param("utype") Integer utype); // page插件会自动帮我们加上limit 语句到sql语句，实现分页
```

这里方法定义时，第一个参数和返回参数必须时Page类型，这样才能保证Page插件可以实现分页

```java
<select id="selectPageByUtype" resultType="user">
    select id, name, password, utype from user where utype=##{utype}
</select>
```

```java
/**
 * 测试自定义分页方法
 */
@Test
public void test2(){
    Integer uptype = 4;  // id 为0 ，默认不会通过条件构造器的条件，默认查询所有数据
    Page<User> page = new Page<>(1, 3);
    userMapper.selectPageByUtype(page, uptype);  // 这里数据会直接保存在page对象中




    System.out.println(page.getRecords());


    /*
    * ==> Parameters: 4(Integer), 3(Long)
        <==    Columns: id, name, password, utype
        <==        Row: 10, mamba1, 123132, 4
        <==        Row: 11, mamba2, 123132, 4
        <==        Row: 12, mamba3, 123132, 4
        <==      Total: 3
    *
    *
    * */

}
```

#### 乐观锁插件

**思想：默认在你修改数据之前，没有人修改过数据或者想要修改数据**

一般通过版本号versionId实现

比如，每有一次数据更新的操作，versionId加1

**最新一次更新的时候，必须满足versionId匹配（也就是在你修改之前，没有人修改过数据），才能更新，否则就无法更新**

实现流程

1. 在表中添加versionId字段
2. 查询的时候，需要将versionId和信息一起取出
3. 在update的时候，在Where语句中加入**versionId=##{取出的versionId}**，如果满足条件，就可以实现更新操作，并且要在update 的**set中将versionId加1**

###### 模拟并发修改数据

MybatisPlus提供的乐观锁插件帮助我们去维护versionId，不用我们自己在Sql中加入关于versionId的操作与条件

我们用商品表来模拟多个用户操作同一条数据的场景

```java
@Test
public void testUpdateWithoutOptimisticLock(){

    //业务需求是想先将商品加个加50，再减30，最终也就是加20
    //分两个用户来操作

    //模拟用户1查询
    Product product_selected_by_user1 = productMapper.selectById(1);
    //模拟用户2查询
    Product product_selected_by_user2 = productMapper.selectById(1);

    //用户1将商品价格提高50
    product_selected_by_user1.setPrice(product_selected_by_user1.getPrice() + 50);
    productMapper.updateById(product_selected_by_user1);

    // 用户2将商品加个降低30
    product_selected_by_user2.setPrice(product_selected_by_user2.getPrice() - 30);
    productMapper.updateById(product_selected_by_user2);

    //模拟用户1查询
    Product product = productMapper.selectById(1);
    System.out.println(product_selected_by_user1);
    System.out.println(product_selected_by_user2);
    System.out.println(product);
}
```

![image-20220917213908450](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220917213908450.png)

最后并不是在先加50的基础上减30，而是直接在原价减30，覆盖了添加的操作

###### 使用乐观锁插件

1. 修改实体类

   ```java
   package com.mamba.pojo;
   
   import com.baomidou.mybatisplus.annotation.Version;
   import lombok.AllArgsConstructor;
   import lombok.Data;
   import lombok.NoArgsConstructor;
   
   /**
    * @ClassName Product
    * @Description TODO
    * @Author mamba
    * @Date 2022/9/17 21:20
    * @Version 1.0
    */
   
   @Data
   @AllArgsConstructor
   @NoArgsConstructor
   public class Product {
   
       private Long id;
       private String name;
       private Double price;
       @Version // 标识乐观锁版本号字段
       private Integer versionId;
   }
   ```

2. 添加乐观锁插件

   ```java
   package com.mamba.config;
   
   import com.baomidou.mybatisplus.annotation.DbType;
   import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
   import com.baomidou.mybatisplus.extension.plugins.inner.OptimisticLockerInnerInterceptor;
   import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
   import org.mybatis.spring.annotation.MapperScan;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   
   /**
    * @ClassName MybatisPlusConfig
    * @Description TODO
    * @Author mamba
    * @Date 2022/9/17 20:13
    * @Version 1.0
    */
   
   @Configuration
   @MapperScan("com.mamba.mapper")  // 将扫描包的注解移动至此
   public class MybatisPlusConfig {
   
   
       /**
        * 配置mybatisplus插件
        *
        * @return
        */
       @Bean  // 将该方法的返回值对象放入ioc容器
       public MybatisPlusInterceptor mybatisPlusInterceptor() {
           MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
           // 添加内部插件， 这里参数就填入你需要的插件类型
           interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));  // 由于不同的数据库类型，对分页的实现是不同的，这里要传入数据库类型
           interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor()); // 添加乐观锁插件
           return interceptor;  // 将该interceptor返回，放入spring容器，就实现了插件的配置
       }
   }
   ```

3. 测试

   同样对商品价格进行操作

   业务代码不需要改变，插件会自动完成对versionId的更新

   乐观锁会在第一次修改价格之后，增加versionId，这样第二次修改就不成功了，除非重新查询到最新的记录信息，在此基础上进行修改

```java
@Test
public void testUpdateWithOptimisticLock(){

    //业务需求是想先将商品加个加50，再减30，最终也就是加20
    //分两个用户来操作

    //模拟用户1查询
    Product product_selected_by_user1 = productMapper.selectById(1);
    //模拟用户2查询
    Product product_selected_by_user2 = productMapper.selectById(1);

    //用户1将商品价格提高50
    product_selected_by_user1.setPrice(product_selected_by_user1.getPrice() + 50);
    productMapper.updateById(product_selected_by_user1);

    // 用户2将商品加个降低30
    product_selected_by_user2.setPrice(product_selected_by_user2.getPrice() - 30);
    productMapper.updateById(product_selected_by_user2);

    //模拟用户1查询
    Product product = productMapper.selectById(1);
    System.out.println(product_selected_by_user1);
    System.out.println(product_selected_by_user2);
    System.out.println(product);


    /*
    *
    * ==>  Preparing: SELECT id,name,price,version_id FROM product WHERE id=?
    ==> Parameters: 1(Integer)
    <==    Columns: id, name, price, version_id
    <==        Row: 1, 书, 150.0, 1
    <==      Total: 1
    *
    *
    * Product(id=1, name=书, price=150.0, versionId=1)
        Product(id=1, name=书, price=70.0, versionId=1)  // 第二次操作
        Product(id=1, name=书, price=150.0, versionId=1) // 最后只有第一次操作成功

    *
    * */
}
```

#### 关于悲观锁

**思想：利用锁机制，默认我在操作数据的时候，其他人也可能操作数据，所以直接加锁**

MybatisPlus不提供悲观锁插件

## 通用枚举

数据库中对于性别之类的字段，使用int存储，而java对象中可以使用枚举类型

```java
package com.mamba.enums;

import lombok.Getter;

@Getter
public enum SexEnum {
    MALE(1, "男"),
    FEMALE(0, "女");
    private Integer sex;
    private String sexName;

    SexEnum(Integer sex, String sexName) {
        this.sex = sex;
        this.sexName = sexName;
    }
}
```

```java
package com.mamba.pojo;

import com.mamba.enums.SexEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @ClassName Student
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/18 11:30
 * @Version 1.0
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private String id;
    private String studentId;
    private String name;
    private SexEnum sex;
    private String birthday;
}
```

```java
@Test
public void test(){
    Student student = new Student();
    student.setId("12");
    student.setStudentId("123465");
    student.setSex(SexEnum.MALE); //
    student.setName("df");
    student.setBirthday("1999-05-15");

    int res = studentMapper.insert(student); // 这里会失败，因为会直接把MALE当成字符串存储到sex字段中
    //所以要使用通用枚举

}
```

#### 使用通用枚举

1. 添加enum包的扫描配置

   ```properties
   mybatis-plus.type-enums-package=com.mamba.enums
   ```

2. 使用@EnumValue标识属性值存储进入数据库

   ```java
   package com.mamba.enums;
   
   import com.baomidou.mybatisplus.annotation.EnumValue;
   import com.baomidou.mybatisplus.annotation.IEnum;
   import lombok.Getter;
   
   @Getter
   public enum SexEnum {
       MALE(1, "男"),
       FEMALE(0, "女");
       @EnumValue  // 将注解标识的属性值存储进入数据库
       private Integer sex;
       private String sexName;
   
       SexEnum(Integer sex, String sexName) {
           this.sex = sex;
           this.sexName = sexName;
       }
   }
   
   ```
   
3. 测试

   ```java
   @Test
   public void test(){
       Student student = new Student();
       student.setId("13");
       student.setStudentId("123465");
       student.setSex(SexEnum.MALE); // 这里如果Student类中不指定EnumValue，会默认将MALE当作字符串添加到sex字段中，报错
       student.setName("df");
       student.setBirthday("1999-05-15");
   
       int res = studentMapper.insert(student); // 如果不使用通用枚举，这里会失败，因为会直接把MALE当成字符串存储到sex字段中
       //所以要使用通用枚举
       
       
       /*
       * 
       * 
       * ==>  Preparing: INSERT INTO student ( id, studentid, name, sex, birthday ) VALUES ( ?, ?, ?, ?, ? )
       ==> Parameters: 13(String), 123465(String), df(String), 1(Integer), 1999-05-15(String)
       <==    Updates: 1
       * 
       * */
       
       
       
       
   }
   ```

对于数据库中固定值的字段，java中可以使用枚举，然后用mybatisplus的通用枚举，即可实现枚举value与字段的映射

## 代码生成器

1. 引入依赖

   ```
   <dependency>
       <groupId>com.baomidou</groupId>
       <artifactId>mybatis-plus-generator</artifactId>
       <version>3.5.1</version>
   </dependency>
   <dependency>
       <groupId>org.freemarker</groupId>
       <artifactId>freemarker</artifactId>
       <version>2.3.31</version>
   </dependency>
   ```

2. 添加生成器代码，运行，则可以按照要求生成一个mybatisplus的模块demo

## 多数据源

场景：多库、读写分离、一主多从、混合模式....

#### 多库

1. 添加依赖

   ```xml
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>dynamic-datasource-spring-boot-starter</artifactId>
        <version>3.1.0</version>
   </dependency>
   ```

2. 修改springboot配置文件， yml or  properties(同时存在优先读properties文件)

   ```yml
   spring:
     application:
       name: MultiDataSource_MybatisPlus
     datasource:
       dynamic:
         primary: master ##设置默认的数据源或者数据源组,默认值即为master
         strict: false ##设置严格模式,默认false不启动. 启动后在未匹配到指定数据源时候会抛出异常,不启动则使用默认数据源.
         datasource: ## 配置一系列数据源
           master:
             url: jdbc:mysql://localhost:3306/dynamic
             username: root
             password: 123456
             driver-class-name: com.mysql.jdbc.Driver ## 3.2.0开始支持SPI可省略此配置
           slave_1:
             url: jdbc:mysql://localhost:3306/ssm01?serverTimezone=Asia/Shanghai&characterEncoding=utf-8
             username: root
             password: 123456
             driver-class-name: com.mysql.jdbc.Driver
   ##        slave_2:
   ##          url: ENC(xxxxx) ## 内置加密,使用请查看详细文档
   ##          username: ENC(xxxxx)
   ##          password: ENC(xxxxx)
   ##          driver-class-name: com.mysql.jdbc.Driver
   ##          schema: db/schema.sql ## 配置则生效,自动初始化表结构
   ##          data: db/data.sql ## 配置则生效,自动初始化数据
   ##          continue-on-error: true ## 默认true,初始化失败是否继续
   ##          separator: ";" ## sql默认分号分隔符
   
   mybatis-plus:
     configuration:
       log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
     global-config:
       db-config:
         id-type: uuid
     type-aliases-package: com.mamba.pojo
   ```

3. 定义pojo， mapper，service

   在serviceImpl类上，使用注解@DS标识操作的数据源

```java
package com.mamba.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mamba.mapper.UserMapper;
import com.mamba.pojo.User;
import com.mamba.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:39
 * @Version 1.0
 */
@DS("master")
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {


    @Autowired
    private UserMapper userMapper;

    @Override
    public Map<String, Object> selectMapById(Integer id) {
        return userMapper.selectMapById(id);
    }
}
```

```java
package com.mamba.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mamba.mapper.BookMapper;
import com.mamba.pojo.Book;
import com.mamba.service.BookService;
import org.springframework.stereotype.Service;

/**
 * @ClassName BookServiceImpl
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/19 11:03
 * @Version 1.0
 */

@DS("slave_1")
@Service
public class BookServiceImpl extends ServiceImpl <BookMapper, Book> implements BookService{
}
```

```java
@Test
public void test(){
    User user = userService.getById(8);
    Book book = bookService.getById(1);
    System.out.println(user);
    System.out.println(book);
    
    /*
    * 
    * JDBC Connection [HikariProxyConnection@1334391583 wrapping com.mysql.cj.jdbc.ConnectionImpl@618ff5c2] will not be managed by Spring
    ==>  Preparing: SELECT id,name,password,utype FROM user WHERE id=?
    ==> Parameters: 8(Integer)
    <==    Columns: id, name, password, utype
    <==        Row: 8, abc, 123456, 5
    <==      Total: 1
    Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@411c6d44]
    Creating a new SqlSession
    SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@8bd86c8] was not registered for synchronization because synchronization is not active
    JDBC Connection [HikariProxyConnection@83532470 wrapping com.mysql.cj.jdbc.ConnectionImpl@2d3ef181] will not be managed by Spring
    ==>  Preparing: SELECT id,name,count,detail FROM book WHERE id=?
    ==> Parameters: 1(Integer)
    <==    Columns: id, name, count, detail
    <==        Row: 1, JAVA, 50, 入门级别
    <==      Total: 1
    Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@8bd86c8]
    User(id=8, name=abc, password=123456, utype=5)
    Book(id=1, name=JAVA, count=50, detail=入门级别)
    
    * 
    * 
    * */
}
```

通过日志可以发现，JDBC创建了两个SqlSession访问两个数据源

@DS可以作用域类，也可以作用于方法

## MybatisX插件

虽然MybatisPlus提供了BaseMapper和ServiceImpl模板，提供了一系列基础的sql操作，提高了开发效率，但也远不能满足开发需求

MybatisX是IDEA的快速开发插件

#### 对应mapper.xml 和 Mapper

#### 代码快速生成

打开DataBase，右键表，选择MybatisX-Generator

![image-20220920131153472](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220920131153472.png)

![image-20220920131221568](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220920131221568.png)

#### 快速生成CRUD