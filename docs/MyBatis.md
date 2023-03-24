---
lang: zh-CN
title: Mybatis
description: Xiaojunjie的个人网站
---

## 三层架构

MVC



View

Model

Controller

![image-20220829202514758](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220829202514758.png)

常用框架：SSM

Spring：IOC ，AOP

SpringMVC：优化控制器servlet，提供了极简的数据携带，页面跳转等功能

Mybatis：持久化框架，优化数据库访问，简化jdbc

## 框架

理解为半成品软件，提高开发效率，可复用可扩展

## Mybatis

来源于Apache的框架的开源项目ibatis，迁移至google之后改名mybatis

mybatis专注于数据访问层的优化，让开发者专注于SQL语句

## Mybatis结构

![image-20220830145306640](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220830145306640.png)

# Mybatis入门

## Demo

### 步骤

1. 添加mybatis, mysql依赖

2. 建立数据库表

3. 添加核心配置文件SqlMapConfig.xml

   核心配置标签的顺序不要颠倒（按照以下顺序）

   ```dtd
   <!ELEMENT configuration (properties?, settings?, typeAliases?, typeHandlers?, objectFactory?, objectWrapperFactory?, reflectorFactory?, plugins?, environments?, databaseIdProvider?, mappers?)>
   ```

   核心配置文件中进行配置

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE configuration
           PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-config.dtd">
   <configuration>
   <!--    database.properties-->
       <properties resource="database.properties"/>
   
   
       <!--配置数据库环境变量-->
       <!--default决定哪个配置生效，对应environment的id-->
       <environments default="development">
           <!--开发-->
           <environment id="development">
               <!--事务管理器-->
               <transactionManager type="JDBC"></transactionManager>
               <!--数据源-->
               <!--JNDI  java命名目录接口-->
               <!--POOLED 使用数据库连接池-->
               <!--UNPOOLED 不使用数据库连接池-->
               <dataSource type="POOLED">
                   <property name="driver" value="${jdbc.driver}"/>
                   <property name="url" value="${jdbc.url}"/>
                   <property name="username" value="${jdbc.username}"/>
                   <property name="password" value="${jdbc.password}"/>
               </dataSource>
   
           </environment>
           <!--home-->
           <environment id="home">
               <transactionManager type=""></transactionManager>
               <dataSource type=""></dataSource>
           </environment>
           <!--online-->
           <environment id="online">
               <transactionManager type=""></transactionManager>
               <dataSource type=""></dataSource>
           </environment>
       </environments>
       <!--配置mapper.xml-->
   
       <mappers>
           <mapper resource="com/mamba/mapper/UserMapper.xml"/>
       </mappers>
   </configuration>
   ```

4. 添加xxxMapper.xml

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   <mapper namespace="com.mamba.mapper.UserMapper">
   
       <insert id="insert" parameterType="com.mamba.pojo.User">
           INSERT INTO user (name, password, type) VALUES (#{name}, #{password}, #{type})
       </insert>
   
   
       <delete id="deleteById">
           DELETE FROM user WHERE id=#{id}
       </delete>
   
       <update id="update" parameterType="com.mamba.pojo.User">
           UPDATE user SET name=#{name}, password=#{password}, type=#{type} WHERE id=#{id}
       </update>
   
       <select id="selectAll" resultType="com.mamba.pojo.User">
           SELECT id, name, password, type FROM user
       </select>
   
   
       <select id="selectByName" resultType="com.mamba.pojo.User" parameterType="string">
           SELECT id, name, password, type FROM user WHERE name LIKE "%${name}%"
       </select>
   
       <select id="selectById" parameterType="int" resultType="com.mamba.pojo.User">
           SELECT id, name, password, type FROM user where id=#{id}
       </select>
   </mapper>
   ```

5. pom.xml指定资源文件

   ```xml
   <build>
       <!-- 资源目录 -->
       <resources>
           <resource>
               <directory>src/main/java</directory>
               <includes>
                   <include>**/*.xml</include>
                   <include>**/*.properties</include>
               </includes>
           </resource>
           <resource>
               <!-- 设定主资源目录  -->
               <directory>src/main/resources</directory>
   
               <!-- maven default生命周期，process-resources阶段执行maven-resources-plugin插件的resources目标处理主资源目下的资源文件时，只处理如下配置中包含的资源类型 -->
               <includes>
                   <include>**/*.properties</include>
                   <include>**/*.xml</include>
                   <include>**/*.jpg</include>
                   <include>**/*.css</include>
                   <include>**/*.js</include>
                   <include>**/*.html</include>
               </includes>
   
               <!-- maven default生命周期，process-resources阶段执行maven-resources-plugin插件的resources目标处理主资源目下的资源文件时，不处理如下配置中包含的资源类型（剔除下如下配置中包含的资源类型）-->
               <excludes>
                   <exclude>**/*.yaml</exclude>
               </excludes>
   
               <!-- maven default生命周期，process-resources阶段执行maven-resources-plugin插件的resources目标处理主资源目下的资源文件时，指定处理后的资源文件输出目录，默认是${build.outputDirectory}指定的目录-->
               <!--<targetPath>${build.outputDirectory}</targetPath> -->
   
               <!-- maven default生命周期，process-resources阶段执行maven-resources-plugin插件的resources目标处理主资源目下的资源文件时，是否对主资源目录开启资源过滤 -->
               <filtering>true</filtering>
           </resource>
       </resources>
   </build>
   ```

6. test

   ```java
   package test;
   
   import com.mamba.pojo.User;
   import org.apache.ibatis.io.Resources;
   import org.apache.ibatis.session.SqlSession;
   import org.apache.ibatis.session.SqlSessionFactory;
   import org.apache.ibatis.session.SqlSessionFactoryBuilder;
   import org.junit.Test;
   
   import java.io.IOException;
   import java.io.InputStream;
   import java.util.List;
   
   /**
    * @ClassName MyTest
    * @Description TODO
    * @Author mamba
    * @Date 2022/8/29 22:09
    * @Version 1.0
    */
   
   
   public class MyTest {
       
       
       @Test
       public void test() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
           List<User> list = session.selectList("selectAll");
           list.forEach(user -> {
               System.out.println(user);
           });
           session.close();
       }
   
   
    @Test
       public void test2() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
           User user = session.selectOne("selectById", 1);
           System.out.println(user);
           session.close();
       }
   
       @Test
       public void test3() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
           User user = session.selectOne("selectByName", "ad");
           System.out.println(user);
           session.close();
       }
   
       @Test
       public void test4() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
           Integer result = session.insert("insert", new User("mamba", "170715", 1));
   
           System.out.println(result);
           session.commit(); //insert, delete, update需要提交事务
           session.close();
       }
       @Test
       public void test5() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
           Integer result = session.insert("deleteById", 5);
   
           System.out.println(result);
           session.commit(); //insert, delete, update需要提交事务
           session.close();
       }
   
   
       @Test
       public void test6() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
   
           User user = session.selectOne("selectById", 1);
           System.out.println("修改前:" + user);
           user.setName("MAMBA");
           Integer result = session.update("update", user);
   
           System.out.println(result);
           session.commit(); //insert, delete, update需要提交事务
           user = session.selectOne("selectById", 1);
           System.out.println("修改后:" + user);
           session.close();
       }
   
   }
   
   ```
   
   利用@Before注解对MyTest中的冗余代码进行优化
   
   ```java
   package test;
   
   import com.mamba.pojo.User;
   import org.apache.ibatis.io.Resources;
   import org.apache.ibatis.session.SqlSession;
   import org.apache.ibatis.session.SqlSessionFactory;
   import org.apache.ibatis.session.SqlSessionFactoryBuilder;
   import org.junit.After;
   import org.junit.Before;
   import org.junit.Test;
   
   import java.io.IOException;
   import java.io.InputStream;
   import java.util.List;
   
   /**
    * @ClassName MyTest
    * @Description TODO
    * @Author mamba
    * @Date 2022/8/29 22:09
    * @Version 1.0
    */
   
   
   public class MyTest {
       
       private static SqlSession session;
       @Before
       public void openSqlSession() throws IOException{
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           session = factory.openSession();
       }
   
       @Test
       public void test() throws IOException {
           List<User> list = session.selectList("selectAll");
           list.forEach(user -> {
               System.out.println(user);
           });
           session.close();
       }
   
   
       @Test
       public void test2() throws IOException {
           User user = session.selectOne("selectById", 1);
           System.out.println(user);
           session.close();
       }
   
       @Test
       public void test3() throws IOException {
           User user = session.selectOne("selectByName", "ad");
           System.out.println(user);
           session.close();
       }
   
       @Test
       public void test4() throws IOException {
           Integer result = session.insert("insert", new User("mamba1", "170715", 1));
   
           System.out.println(result);
           session.commit(); //insert, delete, update需要提交事务
           session.close();
       }
       @Test
       public void test5() throws IOException {
           Integer result = session.insert("deleteById", 5);
   
           System.out.println(result);
           session.commit(); //insert, delete, update需要提交事务
           session.close();
       }
   
   
       @Test
       public void test6() throws IOException {
           InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
           SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
           SqlSession session = factory.openSession();
   
           User user = session.selectOne("selectById", 1);
           System.out.println("修改前:" + user);
           user.setName("MAMBA");
           Integer result = session.update("update", user);
   
           System.out.println(result);
           session.commit(); //insert, delete, update需要提交事务
           user = session.selectOne("selectById", 1);
           System.out.println("修改后:" + user);
       }
   
   
       @After
       public void closeSqlSession() {
           session.close();
       }
   }
   ```

### 数据库连接池

客户端-连接池-数据库

连接池事先建立数个连接，客户端请求连接的时候，直接将现有的连接给客户端用，用完返回给连接池，而不是频繁的打开、关闭连接

### resultType

在xxxMapper.xml中，若返回集合，resultType填集合的泛型类型即可

### 实体类注册别名

xxxMapper.xml中，每一次实体类的名称需要重复写，可以注册简单的别名

1. 单个注册

   ```xml
   <!--单个类注册别名-->
   <typeAlias type="com.mamba.pojo.User" alias="User"></typeAlias>
   ```

   每个类都需要注册很麻烦

2. 批量注册（推荐）

   ```xml
   <!--批量注册-->
   <package name="com.mamba.pojo"/>
   ```

   别名的命名规则是类名的小驼峰命名法（首字母小写）

   





## 常见类和接口

### Resources类

读取资源文件

### SqlSessionFactory 接口

SqlSessionFactoryBuilder.build返回一个DefaultSqlSessionFactory实现类的对象

实际是返回DefaultSqlSessionFactory实现类的对象来完成factory的创建

### SqlSession接口

DefaultSqlSession实现类

每个线程都应该有它自己的 SqlSession 实例。SqlSession 的实例不是线程安全的，因此是不能被共享的，所以它的最佳的作用域是请求或方法作用域

## 设置日志输出

```xml
<!--settings中配置日志输出-->
<settings>
    <setting name="logImpl" value="STDOUT_LOGGING"/>
</settings>
```

# 动态代理

Service层就是Mapper层的静态代理，ServiceImpl是代理对象，里面调用目标对象的业务(CRUD)，以及其他代理业务代码

![image-20220830152051415](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220830152051415.png)

Mybatis由xxxMapper.xml来完成数据访问实现类的工作，操作数据库

这样数据访问实现类的功能无法通过创建对象来调用

所以使用动态代理，在Service层依然通过接口调用数据访问层的业务，数据访问层的业务功能则通过动态代理实现，而不是创建对象

## 动态代理实现规范

1. xxxMapper.xml与xxxMapper.java在同一目录下
2. 文件名与接口名必须一致
3. xxxMapper.xml中标签的id值与xxxMapper.java中的方法名必须一致
4. xxxMapper.xml的paramType与xxxMapper.java的形参类型一致
5. xxxMapper.xml的resultType与xxxMapper.Java的返回类型一致
6. xxxMapper.xml的namespace必须是xxxMapper.java的完全限定名
7. SqlMapConfig.xml中的注册mapper文件时，class=接口完全限定名

## 动态代理_Mybatis_Demo

和Mybatis的Demo一样新建一个Demo

测试时，使用getMapper方法来获取数据持久层接口的对象，这里对象是由动态代理返回的，可以直接调用接口的方法，对数据库进行操作

```java
import com.mamba.mapper.UserMapper;
import com.mamba.pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * @ClassName MyTest
 * @Description TODO
 * @Author mamba
 * @Date 2022/8/29 22:09
 * @Version 1.0
 */


public class MyTest {
    
    private static SqlSession session;
    @Before
    public void openSqlSession() throws IOException{
        InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(in);
        session = factory.openSession();
    }



    @After
    public void closeSqlSession() {
        session.close();
    }

    @Test
    public void test(){
        /**
        *@author mamba
        *@Description 使用动态代理调用xml的方法
        *@Date 19:45 2022/8/30
        *@Param []
        *@Return void
        **/

        //通过动态代理的方法获取一个数据持久层的对象
        UserMapper userMapper = session.getMapper(UserMapper.class);
        User user = userMapper.selectById(3);
        System.out.println(user);

    }
}
```

## 优化xxxMaper.xml的注册

批量注册

```xml
<mappers>
        <package name="com/mamba/mapper"/>
<!--        <mapper resource="com/mamba/mapper/UserMapper.xml"/>-->
    </mappers>
```



# #{}与${}的区别

## #{}

**底层使用PreparedStatement对象，是安全的数据库访问，防止SQL注入**

是非字符串拼接的参数的**占位符**

对Sql解析时，是先用?代替，然后注入parameter

如果paramType是基本数据类型，#{}里面可以随便写（但也不推荐），都可以根据类型注入value；

如果时对象的成员变量，应该和变量名一致；

## ${}

涉及字符串拼接，**有sql注入风险**

一般模糊查询用到

如果paramType是基本数据类型，${}里面随便写（分版本）；

如果paramType是对象类型，${}里面必须是变量名（很少用）

${}还可以替换列名和表名，**存在SQL注入风险，少用**

## 优化模糊查询

因为直接使用${}实现模糊查询的SQL语句有SQL注入的风险，所以对这种方案进行优化

### 优化前

```xml
<select id="selectByName" resultType="user" parameterType="string">
    SELECT id, name, password, type FROM user WHERE name LIKE "%${name}%"
</select>
```

![image-20220830204142411](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220830204142411.png)

${}直接将值拼接到Sql语句

### 优化后

使用Sql中的concat函数实现字符串拼接，使用#{}来占位并注入

```xml
<select id="betterSelectByName" resultType="user" parameterType="string">
    SELECT id, name, password, type FROM user WHERE name LIKE concat("%", #{name}, "%")
</select>
```

![image-20220830203917183](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220830203917183.png)

## 字符串拼接与替换

### 拼接

拼接上一节已经讲过，使用SQL的concat函数代替${}实现字符串拼接，防止SQL注入的风险

### 替换

需求：一条SQL完成模糊name和模糊address查询

需要对SQL的name和address进行替换修改

我们将colName和value注入SQL，实现对指定列名的模糊查询，此时需要传入两个参数，**直接不写paramType**

在xxxMapper接口中，需要使用@Param对形参进行命名

列名需要注入，无法使用#{}，这里只能使用${}来注入，${}中填入之前注解定义的一样的名称，即可注入列名

```xml
<select id="selectByNameOrType" resultType="user">
    SELECT id, name, password, type FROM user WHERE ${colName} LIKE concat("%", #{colValue}, "%")
</select>
```

```java
public List<User> selectByNameOrType(@Param("colName")String colName, @Param("colValue") Integer colValue);
```



**${}基本只用在列名替换这里，其他的地方一律用#{}进行占位后替换**

## insert后返回主键id

### 背景

在新增一条记录后，需要根据主键id去对其他表进行一系列操作，这个时候需要获取最新一条记录的主键值

### 函数

SQL中，函数last_insert_id()可以获取最新增加的一条记录的主键值

### 思路

一般在插入操作时，主键是自增的，所以pojo对象的id值为null，可以根据这个特点，将插入后记录的id值重新注入到对象的id中，让业务层拿到最新记录的id值

### 实现

```xml
<insert id="insertReturnId" parameterType="user">
    <selectKey keyProperty="id" resultType="int" order="AFTER">
        SELECT last_insert_id()
    </selectKey>
    INSERT INTO user (name, password, type) VALUES (#{name}, #{password}, #{type})
</insert>
```

`selectKey>`标签实现将函数值，注入给对象的属性id

`order`表示在insert语句执行之前还是之后进行，明显是插入之后，才能获取新的id

上面这个语句的意思是，在执行完insert语句之后，将自增的主键值注入到User对象的属性id中 

### 思考

这个思想可以在delete update操作一样实现

不过自增主键并没有这么简单，分库分表之后，单纯的自增id，会出现id重复的问题，这里会用到**UUID**

### UUID

是一种全球统一的字符串，由36个字母数字中划线组成

UUID uuid = UUID.randomUUID();

```java
@Test
public void test10(){
    UUID uuid = UUID.randomUUID();
    System.out.println(uuid.toString()); //6fcbdb71-0065-44b9-8cce-deff312dc102
    System.out.println(uuid.toString().replace("-", "").substring(20));//deff312dc102
}
```

# 动态SQL

用处：定义片段、逻辑判断、循环、批量处理。。。

## sql标签

用来定义代码片段，可以被引用

```xml
<sql id="allColumnName">
    id, name, password, type
</sql>
```

## include标签

可以引用sql标签，实现复用

```xml
<selectKey keyProperty="id" resultType="int" order="AFTER">
    SELECT last_insert_id()
</selectKey>
```

## if标签

用处：逻辑判断（判断注入的属性值是否为空）





## where标签

进行多条件拼接

where标签相当于在sql语句中加入一个**where 1=1**



```xml
<!--包括所有列名条件得查询，用if判断传入得成员变量属性是否为空-->
    <select id="select" parameterType="user" resultType="user">
        SELECT
            <include refid="allColumnName"></include>
            FROM user
            /*where标签相当于在sql语句中加入一个where 1=1*/
            <where>
                <if test="id != null and id != 0">
                    AND id=#{id}
                </if>
                <if test="name != null and name != ''">
            /*使用模糊查询*/
                    AND name LIKE concat('%', #{name}, '%')
                </if>
                <if test="password != null and password != ''">
                    AND password=#{password}
                </if>
                <if test="type != null and type != 0">
                    AND type=#{type}
                </if>
            </where>
    </select>
```

if标签将满足条件的部分sql拼接进入主要的sql中

## set标签

有选择的进行更新

至少更新一列，不能一列都不更新



### 传统的update是存在问题的

比如只想更新user的name,传入user(id = 1, name=newname, password=null, type=0)

这样传入，会导致password，type全部被更新为null和0

```xml
<!--根据传入参数有选择的更新-->
    <update id="updateBySet" parameterType="user" >
        UPDATE user
        <set>
            <if test="name != '' and name != null">
                name=#{name},
            </if>
            <if test="password != '' and password != null">
                password=#{password},
            </if>
            <if test="type != 0 and type != null">
                type=#{type},
            </if>
        </set>
        WHERE id=#{id}
    </update>
```

```java
@Test
public void test12() {
    User user = new User();
    user.setId(8);
    user.setName("XJJ1");
    Integer res = mapper.updateBySet(user);
    session.commit();
    System.out.println(user.getId());
}
```



**注意，如果一行可跟新的列都不给，会导致sql语法错误,上层需要判断一下**

## foreach标签

用来循环和遍历

可进行循环条件查询，批量增加、批量删除、批量更新



### 批量查询

```xml
<select id="selectByIdList" resultType="user">
    SELECT
    <include refid="allColumnName"></include>
    FROM user
    WHERE id in
        <foreach collection="array" item="id" separator="," open="(" close=")">
            #{id}
        </foreach>
</select>
```



```java
public List<User> selectByIdList(Integer [] arr);
```



```java
@Test
public void test13() {
    Integer [] array = new Integer[]{1, 2, 3};
    /*全部条件为空，默认查询所有*/
    List<User> list = mapper.selectByIdList(array);
}
```

foreach可配置参数

1. collection: 指定传入集合的类型，array， list， Map
2. item：遍历的值或对象
3. separator：多个值或者对象或者语句之间的分隔符
4. open：整个循环外之前的符号（一般是前括号）
5. close：整个循环外之前的符号（一般是后括号）

### 批量删除

```xml
<delete id="deleteBatch">
    DELETE FROM user
    WHERE id IN
    <foreach collection="array" item="id" separator="," open="(" close=")">
        #{id}
    </foreach>
</delete>
```

```java
public Integer deleteBatch(Integer [] ids);
```

```java
@Test
public void test14() {
    Integer [] array = new Integer[]{1, 2, 31};
    /*全部条件为空，默认查询所有*/
    Integer res = mapper.deleteBatch(array);
    session.commit();
    System.out.println(res);
}
```



### 批量增加 

```xml
<insert id="insertBatch" parameterType="user">
        INSERT INTO user
        (<include refid="allColumnName"></include>) VALUES
        <foreach collection="list" item="u" separator=",">
           (#{u.id}, #{u.name}, #{u.password}, #{u.type})
        </foreach>
    </insert>
```

```java
public Integer insertBatch(List<User> userList);
```

```java
@Test
    public void test15() {
        List<User> list = new ArrayList<User>();
        list.add(new User("mamba1", "123132", 1));
        list.add(new User("mamba2", "123132", 1));
        list.add(new User("mamba3", "123132", 1));
        list.add(new User("mamba4", "123132", 2));
        list.add(new User("mamba5", "123132", 2));
        /*全部条件为空，默认查询所有*/
        Integer res = mapper.insertBatch(list);
        session.commit();
        System.out.println(res);
    }
```



### 批量更新

利用foreach标签动态生成多条update语句，实现批量更新

前提是在jdbc.properties中的url添加allowMultiQueries=true，允许多行sql操作





**如果所有update语句成功执行，返回1，否则返回0**

## 指定参数位置

mybatis支持在绑定参数的时候，不使用参数名绑定，而使用参数位置index值绑定

在mybatis3.3之前，支持#{0}, #{1}的方式

之后支持#{arg0},#{arg1}的方式

 

适用于范围查询，需要传入实体类某一个属性的多个实参，可以使用参数位置

### 

```xml
<select id="selectByIdBetweenStartAndEnd" resultType="user">
        SELECT <include refid="allColumnName"></include>
        FROM user
        WHERE id BETWEEN #{arg0} AND #{arg1}
    </select>
```

```java
public List<User> selectByIdBetweenStartAndEnd(Integer start, Integer end);

```

```java
 @Test
    public void test17() {
        Integer start = 1;
        Integer end = 10;
        /*全部条件为空，默认查询所有*/
        List<User> list = mapper.selectByIdBetweenStartAndEnd(start, end);
        list.forEach(user -> System.out.println(user));
    }
```

## 入参是map(***)

键值对

当多个参数且实体类无法封装时，建议使用map进行传递

### 

```xml
<select id="selectByMap" resultType="user">
        SELECT <include refid="allColumnName"></include>
        FROM user
        WHERE id BETWEEN #{id_start} AND #{id_end}
        AND utype=#{utype}

    </select>
```

```java
public List<User> selectByMap(Map map);

```

```java
@Test
    public void test18() {
        Map map = new HashMap<>();
        map.put("id_start", 1);
        map.put("id_end", 10);
        map.put("utype", 3);
        List<User> list = mapper.selectByMap(map);
        list.forEach(user -> System.out.println(user));
    }
```

## 返回值是map

多用于连表查询，对象无法封装



```xml
<!--连表查询-->
    <select id="selectNameInUserAndBirthdayInStudent" resultType="map">
        SELECT user.name, student.birthday
        FROM user, student
        WHERE user.id=#{user_id} AND student.id=#{student_id}

    </select>
```

```java

    public Map selectNameInUserAndBirthdayInStudent(Map map);
```

```java
@Test
    public void test19() {
        Map map = new HashMap<>();
        map.put("user_id", 9);
        map.put("student_id", 1);
        Map res_map = mapper.selectNameInUserAndBirthdayInStudent(map);
        for (Object key: res_map.keySet()){
            System.out.println(key + ": " + res_map.get(key).toString());
        }

    }
```

其实用map的思想就是使用map来代替实体类，封装一些实体类无法封装的数据或参数


```xml
**那么当返回多行数据的时候，需要用List<Map>接收数据**
```
## 类名与列名不一致——别名

当类名与列名不一致的时候，其中一种方法是使用别名来进行统一

## resultMap

可以自定义列名与对象属性之间的映射关系

```xml
<resultMap id="usermap" type="user">
    <!--主键绑定-->
    <id property="userid" column="id"></id>
    <result property="name" column="name"></result>
    <result property="password" column="password"></result>
    <result property="utype" column="utype"></result>
</resultMap>
```



```java
public List<User> getAllReturnResultMap();
```

```java
@Test
public void getAllReturnResultMap(){
    List<User> users = mapper.getAllReturnResultMap();
    users.forEach(user->{
        System.out.println(user);
    });
}
```

# 表的关联关系

关系型数据库

一对多、多对一、一对一、多对多

关联关系是有方向的

涉及到联表查询，需要根据表之间的关联关系，定义resultMap，传统的pojo映射已经无法满足业务需求

##  主键表和外键表

表A和表B

表B引用了表A的主键作为外键

那么表A（主键被引用）为主键表，表B（引用他表的主键）为外键表





## 多对多

![image-20220912112604539](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912112604539.png)

![image-20220912113201396](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912113201396.png)

## 第二种解决方案

不要写一条很长的sql语句，来实现关联查询，可以在resultMap里面的collection或association标签中定义select属性，引用另一个select的查询结果，这样将一个长的sql语句分成了多个简单的sql语句，实现了一次关联查询

![image-20220912113448554](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912113448554.png)

最终解决方案，各个表的查询高内聚，通过select属性调用其他表mapper的查询方法，填入对应的集合或者对象



# 事务

一致性、持久性、隔离性、原子性



同时完成or同时失败

![image-20220912114938516](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912114938516.png)

## 事务管理

核心配置文件中

```xml
<transactionManager type="JDBC"></transactionManager>
```

JDBC :程序员自己控制处理事务提交和回滚

```java
session = factory.openSession();
```

默认时手动提交事务，即false

设置为true，自动提交

```java
session = factory.openSession(true);//自动提交
//在增删改后不需要session.commit();  自动提交事务
```

# 缓存

将经常查询的数据放在缓存（内存）中，这样查询时就不用去磁盘（数据库文件）中查询，而是直接从缓存（内存）中查询，提高了效率

提供一级缓存（默认开启）和二级缓存

## 使用缓存的查询流程

![image-20220912133704229](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912133704229.png)

1. 客户端请求，首先查缓存，缓存有直接返回给客户端

2. 若缓存没有，查数据库

3. 数据库查到后将数据放入缓存

4. 数据再从缓存给客户端

   之后，若再查相同的数据，就可以从缓存直接给客户端了

若数据库数据发生更新，缓存如何实现同步？

​	若数据库数据发生commit操作，则清空缓存中所有的内容，下次查询时第一次还是走数据库，并同步缓存



## 一级缓存

SqlSession作用域，同一个SqlSession可以 共享一级缓存数据



```java
@Test
public void test(){
    User user1 = mapper.getUserById(3);//获取一次
    System.out.println(user1);
    System.out.println("----------------------------");
    User user2 = mapper.getUserById(3);//再次获取
    System.out.println(user2);
    System.out.println(user1 == user2);//验证两者在内存中地址是否一致
}
```

![image-20220912134822615](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912134822615.png)

## 二级缓存

mapper作用域，不同sqlsession只要访问同一个mapper.xml，则可以访问二级缓存数据



![image-20220912134218184](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220912134218184.png)

### 开启步骤

1. 核心配置文件

```xml
<settings>
    <setting name="logImpl" value="STDOUT_LOGGING"/>
    
    
    <!--开启二级缓存-->
    <setting name="cacheEnabled" value="true"/>
</settings>
```

2. xxxMapper.xml中加入cache标签

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   <mapper namespace="com.mamba.mapper.UserMapper">
       <cache></cache>
       <sql id="allCols">
           id, name, password, utype
       </sql>
   
       <resultMap id="usermap" type="user">
           <!--主键绑定-->
           <id property="userid" column="id"></id>
           <result property="name" column="name"></result>
           <result property="password" column="password"></result>
           <result property="utype" column="utype"></result>
       </resultMap>
       
       
       
       
       <select id="getAll" resultType="user">
           SELECT
           <include refid="allCols"></include>
           FROM user
       </select>
   
       <select id="getAllReturnResultMap" resultMap="usermap">
           SELECT
           <include refid="allCols"></include>
           FROM user
   
       </select>
   
       <select id="getUserById" resultMap="usermap">
           SELECT
           <include refid="allCols"></include>
           FROM user
           WHERE id=#{id}
   
       </select>
   </mapper>
   ```



3. 实体类要实现java.io.serializable接口

   ```java
   package com.mamba.pojo;
   
   import lombok.AllArgsConstructor;
   import lombok.Data;
   import lombok.NoArgsConstructor;
   
   import java.io.Serializable;
   
   /**
    * @ClassName User
    * @Description TODO
    * @Author mamba
    * @Date 2022/8/30 15:35
    * @Version 1.0
    */
   
   
   @Data
   @AllArgsConstructor
   @NoArgsConstructor
   public class User implements Serializable {
       private Integer userid;
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

# ORM

Object Relational Mapping

java中用对象操作数据，数据库中以表的形式存储





