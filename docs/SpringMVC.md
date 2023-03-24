---
lang: zh-CN
title: SpringMVC
description: Xiaojunjie的个人网站
---

## Servlet
父项目导入依赖

```xml
<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-aop</artifactId>
        <version>5.3.21</version>
    </dependency>

    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>servlet-api</artifactId>
        <version>2.5</version>
    </dependency>

    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>javax.servlet.jsp-api</artifactId>
        <version>2.3.3</version>
    </dependency>

    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>jstl</artifactId>
        <version>1.2</version>
    </dependency>
</dependencies>
```

创建子项目，为web项目

导入子项目的依赖

```xml
<dependencies>
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>servlet-api</artifactId>
        <version>2.5</version>
    </dependency>

    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>javax.servlet.jsp-api</artifactId>
        <version>2.3.3</version>
    </dependency>
</dependencies>
```

写一个简单的HelloServlet，重写doGet doPost方法

```java
package com.mamba.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String method = req.getParameter("method");
        if (method.equals("add")){
            req.getSession().setAttribute("msg","执行add");
        }
        if (method.equals("delete")){
            req.getSession().setAttribute("msg","执行delete");
        }


        req.getRequestDispatcher("/WEB-INF/jsp/hello.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

配置web.xml 的servlet



```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">


    <servlet>
        <servlet-name>hello</servlet-name>
        <servlet-class>com.mamba.servlet.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
    
    
    <session-config>
        <session-timeout>15</session-timeout>
    </session-config>
    
    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```

部署tomcat

发送请求localhost:8080/hello?method=add

## SpringMVC

底层就是Servlet

优点：

1. 轻量级
2. 高效
3. 与Spring兼容性好
4. 约定优于配置
5. 功能强大：支持RESTful 数据验证 格式化 本地化 主题
6. 简洁灵活



工作流程

![image-20220730111710819](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220730111710819.png)

#### DispatcherServlet

作用 将不同的请求分发到不同的处理器  Spring2.5 和Java5后支持注解开发

没用SpringMVC之前，需要写很多的Servlet处理不同的请求，现在加入一个调度器，负责将不同的请求分配给对应的Servlet

![image-20220730112428451](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220730112428451.png)

调度器负责处理请求，适配URL，跳转页面

DispatcherServlet实际也是一个Servlet

![image-20220730112609232](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220730112609232.png)

#### HelloMVC

创建一个子项目， web项目

再web.xml中配置注册 DispatcherServlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">


    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:/springmvc.xml</param-value>
        </init-param>
<!--        启动级别为1，随服务器一起启动-->
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
<!--
        url-parttern    /   匹配所有的请求，不包括jsp界面
                        /*  包括jsp界面
-->
    </servlet-mapping>
</web-app>
```

然后创建一个SpringMVC的配置文件  springmvc-servlet.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">


    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>

    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
```

写一个Controller

```java
package com.mamba.Controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloController implements Controller {
    @Override
    public ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.addObject("msg", "Hello SpringMVC");
        mv.setViewName("hello"); //自动拼接成/WEB-INF/jsp/hello.jsp
        return mv;
    }
}
```

部署到tomcat，启动项目，报错500，

 **实例化Servlet类[org.springframework.web.servlet.DispatcherServlet]异常**

原因，项目打包后没有lib，手动添加即可，参考[(64条消息) springmvc的注解以及 tomcat异常ClassNotFoundException:org.springframework.web.servlet.DispatcherServlet_小夏同学____的博客-CSDN博客](https://blog.csdn.net/weixin_42437164/article/details/99703124)

重启tomcat，可以成功访问

![image-20220730115411372](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220730115411372.png)

#### SpringMVC运行原理

![image-20220730143156943](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220730143156943.png)

**（1）当用户通过浏览器发起一个HTTP请求，请求直接到前端控制器DispatcherServlet；**
**（2）前端控制器接收到请求以后调用处理器映射器HandlerMapping，处理器映射器根据请求的URL找到具体的Handler，并将它返回给前端控制器；**
**（3）前端控制器调用处理器适配器HandlerAdapter去适配调用Handler；**
**（4）处理器适配器会根据Handler去调用真正的处理器去处理请求，并且处理对应的业务逻辑；**
**（5）当处理器处理完业务之后，会返回一个ModelAndView对象给处理器适配器，HandlerAdapter再将该对象返回给前端控制器；这里的Model是返回的数据对象，View是逻辑上的View。**
**（6）前端控制器DispatcherServlet将返回的ModelAndView对象传给视图解析器ViewResolver进行解析，解析完成之后就会返回一个具体的视图View给前端控制器。（ViewResolver根据逻辑的View查找具体的View）**
**（7）前端控制器DispatcherServlet将具体的视图进行渲染，渲染完成之后响应给用户（浏览器显示）**



#### 使用注解开发SpringMVC

首先创建项目

添加依赖

添加web环境

配置springmvc.xml ，和之前略有不同

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd"
>

<!--自动扫描包，让指定包下的注解生效， 由SpringIOC容器统一管理-->
    <context:component-scan base-package="com.mamba.Controller">
<!--让SpringMVC不处理静态资源-->
    <mvc:default-servlet-handler/>
<!--支持mvc注解驱动
        在SpringMVC中一般使用@RequestMapping来映射关系
        要使该注解生效，必须在上下文注册DefaultAnnotationHandlerMapping
        和一个AnnotationMethodHandlerAdapter实例
        也就是controller映射器和controller适配器
        这两个实例分别在 类级别（对应映射器）和 方法级别处理（对应适配器）


        而annotation-driven配置自动帮我们注入这两个关键实例

-->
    <mvc:annotation-driven/>

<!--    视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
```

使用注解编写Controller

```java
package com.mamba.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller  //使用注解之后，该类会被Spring接管，类中返回值为String的方法，并且有对应界面可以跳转，会直接被视图解析器解析
public class HelloController {

    @RequestMapping("/hello")
    public String hello(Model model){
        //封装数据
        model.addAttribute("msg", "hello SpringMVC in Annotation");

        return "hello";  //返回给视图解析器
    }

}
```

编写对应的前端，部署项目到服务器，run

#### @RequestMapping

用于将url映射到controller或一个特殊的处理方法， 可作用于类或者方法，作用于类表示一个父路径



```java
@RequestMapping("/hello")
public class HelloController(){
    @RequestMapping("/test1")
    public String test1(){
        ...
        // url : localhost:8080/hello/test1
    }
}
```

## Restful

这是一种风格

传统url

​	localhost:8080/select?id=1

Restful

​	localhost:8080/select/1

**Restful仅仅是一种风格，不是标准or协议，基于该风格设计的软件更加简洁，易于实现缓存机制**

#### 功能

网站本质是通过url对服务器各种资源的访问

资源操作有：POST、DELETE、PUT、GET

分别对应：增  删  改  查    4种基本操作

#### 传统vsRestful

| 操作 | 传统                                                     | Restful                         |
| ---- | -------------------------------------------------------- | ------------------------------- |
| 增   | localhost:8080/addUser    (POST)                         | localhost:8080/user  (POST)     |
| 删   | localhost:8080/deleteUser?id=1   (GET)                   | localhost:8080/user/1  (DELETE) |
| 改   | localhost:8080/updateUser   (POST)                       | localhost:8080/user  (PUT)      |
| 查   | localhost:8080/queryUser?id=1  (GET, 或者POST也可以实现) | localhost:8080/user/1  (GET)    |

Restful通过不同的请求方式来区分和实现4种基本操作，而不是通过url来区分，这样保证url能够尽可能简洁，并且实现url的复用

#### @RestController

```java
package com.mamba.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class RestfulController {
    //@RequestMapping(value = "/user/{a}/{b}", method = RequestMethod.GET)
    
    @GetMapping
    @ResponseBody
    public String add(@PathVariable int a, @PathVariable int b){
        return "restful_add: " + (a + b);
    }
}
```

使用@PathVariable注解可以自动映射url与参数

可以通过指定@RequestMapping的method属性来区分请求类型

或者使用@GetMapping  @PostMapping等注解，就不需要单独指定method

###### 好处

url路径简洁

更加容易获得参数，框架可以自动转换参数类型

通过路径变量类型可以约束参数，当类型不一样时，则无法对应正确的请求路径和方法，从这一环节就阻止了非法参数的访问

**安全：不会暴露传的参数的意义**

#### 拓展：小黄鸭调试法（Rubber Duck Debuging）

详细的对别人解释每行代码，助于定位bug



## 重定向与转发

转发：url不变，实现页面跳转，可以返回

重定向：url改变为跳转后的界面，且无法返回



几种实现方式

#### 1. ModelAndView

需要视图解析器，可以根据view的名称，让视图解析器跳转到指定的界面

#### 2. ServletAPI

通过ServletAPI跳转或者重定向，不需要视图解析器

springmvc.xml中并没有配置视图解析器



```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="
      http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.2.xsd
      http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.2.xsd
      http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.2.xsd">

    <!--    扫描包-->
    <context:component-scan base-package="com.mamba.controller"/>
    <!--    注解driver， 注册必要的bean-->
    <mvc:annotation-driven/>

    <!--    过滤静态资源-->
    <mvc:default-servlet-handler/>

    <!--不配置视图解析器,使用传统的ServletAPI进行重定向或者转发-->
<!--    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">-->
<!--        <property name="prefix" value="/WEB-INF/jsp/"/>-->
<!--        <property name="suffix" value=".jsp"/>-->
<!--    </bean>-->

</beans>
```



```java
package com.mamba.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class HelloController {


//    请求转发
    @RequestMapping("/zhuanfa")
    public void zhuanfa(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.getRequestDispatcher("/WEB-INF/jsp/hello.jsp").forward(request, response);
    }
//重定向
    @RequestMapping("/redirect")
    public void redirect(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.sendRedirect("index.jsp");
    }
//前台打印
    @RequestMapping("/write")
    public void write(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.getWriter().println("write");
    }
}
```

#### 3. SpirngMVC实现重定向与转发

不需要视图解析器

```java
package com.mamba.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

    @RequestMapping("forward1")
    public String hello0(){
        return "index.jsp";  // 默认转发
    }

    @RequestMapping("forward2")
    public String hello1(){
        return "forward:/index.jsp"; // 加上forward，实现转发
    }

    @RequestMapping("redirect")
    public String hello2(){
        return "redirect:/index.jsp";  // 加上redirect,实现重定向（重定向无法访问WEB-INF目录下的资源）
    }
}
```

**这种方式，背后实际还是通过返回前缀来去调用原生servlet的转发和重定向方法**





**WEB-INF目录下的内容特性**
WEB-INF是Java的WEB应用的安全目录。所谓安全就是客户端无法访问，只有服务端可以访问的目录。
页面放在WEB-INF目录下面,这样可以限制访问,提高安全性.如JSP,html

**原因**
既然WEB-INF是安全目录，客户端无法访问，而**重定向就相当于用户直接从客户端访问了的路径**，自然就不可以啦，只有程序内部转发的时候才能转发到WEB-INF下的JSP

#### 4. SpringMVC配合视图解析器

对于forward，只需要返回jsp的名称，由视图解析器统一去解析

对于redirect，返回”redirect:/index.jsp“即可

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="
      http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.2.xsd
      http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.2.xsd
      http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.2.xsd">

    <!--    扫描包-->
    <context:component-scan base-package="com.mamba.controller"/>
    <!--    注解driver， 注册必要的bean-->
    <mvc:annotation-driven/>

    <!--    过滤静态资源-->
    <mvc:default-servlet-handler/>

<!--    不配置视图解析器,使用传统的ServletAPI进行重定向或者转发-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

</beans>
```

```java
package com.mamba.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

    @RequestMapping("forward1")
    public String hello0(){
        return "forward";  // 默认转发
    }

    @RequestMapping("forward2")
    public String hello1(){
        return "forward"; // 加上forward，实现转发
    }

    @RequestMapping("redirect")
    public String hello2(){
        return "redirect:/test.jsp";  // 加上redirect,实现重定向
    }
}
```

**注意：一旦显式的写forward或者redirect，都不会走视图解析器**



## 接受请求参数及数据回显

#### 接受数据

###### 1. 若传参name和形参name一致，直接接收即可（但不推荐）

URL：localhost:8080/hello?id=1

```java
package com.mamba.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {



    //传参的name与形参name一致，可以直接实现传参
    @RequestMapping("/hello")  // /hello?id=mamba
    @ResponseBody
    public String hello(String id){
        return "hello" + id;
    }

}
```

![image-20220731165809836](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731165809836.png)

###### 2. 若提交的名称和方法参数的名称不一样（不管一不一样，最好都加上）

需要使用@RequestParam接受参数

```java
package com.mamba.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {



    //传参的name与形参name不一致，通过@RequestParam将提交的域名称与参数名对应
    // /hello?id=mamba
    @RequestMapping("/hello2")
    @ResponseBody
    public String helloInDifferentName(@RequestParam("username") String name){
        return "hello " + name;
    }


}
```

![image-20220731204553245](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731204553245.png)

###### 3. 若提交的为一个对象

在域名称和类属性名称一致的情况下，可以直接使用类对象进行接收

```java
package com.mamba.controller;


import com.mamba.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    //http://localhost:8080/user/add?id=1&name=mamba&sex=nan
    // 请求提交的一个对象，域名称和User类属性名对应的情况下，直接使用User对象进行接收
    @RequestMapping("/user/add")
    @ResponseBody
    public String addUser(User user){
        return user.toString();
    }
}
```

```java
package com.mamba.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    private String id;
    private String name;
    private String sex;
}
```

![image-20220731211744664](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731211744664.png)

**如果某个接收的域名称无法与类属性相匹配，则对应属性为null**

![image-20220731212039130](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731212039130.png)

这种用法明显有一定的前提：

1. 域名称与对象属性一致，可以自动匹配
2. 若无法匹配，仍用对象去接收，那么没有匹配到的属性为null

#### 数据回显

###### 1. ModelAndView

​	返回一个ModelAndView对象，通过视图解析器，跳转到对应前端界面，并且填充数据

```java
package com.mamba.controller;


import com.mamba.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
    @GetMapping("user/query")
    public ModelAndView query(){
        ModelAndView mv = new ModelAndView("test");
        mv.addObject("user", new User("1", "mamba", "Nv"));
        return mv;
    }
}
```

![image-20220731212741910](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731212741910.png)

###### 2.ModelMap

```java
package com.mamba.controller;


import com.mamba.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
    @GetMapping("user/query2")
    public String query2(ModelMap map){
        map.addAttribute("user", new User("123", "modelMap", "Nv"));
        return "test";
    }
}
```

![image-20220731213609601](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731213609601.png)



###### 3.Model

Model对象可以将要显示到前端的数据封装起来

```java
package com.mamba.controller;


import com.mamba.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
    @GetMapping("/user/delete")
    public String delete(@RequestParam("id") String id, Model model){
        System.out.println("删除User" + id);
        model.addAttribute("msg", "已删除");
        return "test2";
    }
}
```

![image-20220731213052702](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731213052702.png)

###### Model与ModelMap的关系

ModelMap继承了LinkedHashMap，功能更加强大

Model类似精简版

![image-20220731213407471](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731213407471.png)

## 乱码问题

假设前端form提交一个中文值到Controller

```html
<%--
  Created by IntelliJ IDEA.
  User: mamba
  Date: 2022/7/31
  Time: 23:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
    <form action="hello" method="post">
      <input type="text" name="userName"/>
      <input type="submit" value="submit"/>
    </form>
  </body>
</html>
```



```java
package com.mamba.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {


    @PostMapping("/hello")
    public String hello(Model model, @RequestParam("userName") String userName){
        System.out.println(userName);
        model.addAttribute("userName", userName);
        return "test";
    }

}
```

![image-20220731233717239](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731233717239.png)

![image-20220731233732223](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220731233732223.png)

出现乱码，由于后台输出也是乱码，所以后台接收的就是乱码的

#### 解决方案——过滤器

在web.xml中添加Spring实现的一个编码过滤器

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc.xml</param-value>
        </init-param>
    </servlet>

    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <!-- characterEncodingFilter字符编码过滤器 -->
    <filter>
        <filter-name>characterEncodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <!--要使用的字符集，一般我们使用UTF-8(保险起见UTF-8最好)-->
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
        <init-param>
            <!--是否强制设置request的编码为encoding，默认false，不建议更改-->
            <param-name>forceRequestEncoding</param-name>
            <param-value>false</param-value>
        </init-param>
        <init-param>
            <!--是否强制设置response的编码为encoding，建议设置为true，下面有关于这个参数的解释-->
            <param-name>forceResponseEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>characterEncodingFilter</filter-name>
        <!--这里不能留空或者直接写 ' / ' ，否者不起作用-->
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```

**<url-pattern></url-pattern>必须为/***, 拦截jsp，让过滤器进行编码修改

## JSON

前后端分离时代：

后端提供接口和数据

前端独立部署，负责渲染后端数据

前后端约定按照一定的约定，进行数据传输和解析，JSON





前端js可以实现对象和JSON字符串的互转

#### Jackson —— JSON解析工具

导入依赖

```xml
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.13.3</version>
</dependency>
```

不适用json，直接返回字符串

```java
package com.mamba.controller;

import com.mamba.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @RequestMapping("/user/query")
    @ResponseBody  //不走视图解析器
    public String query(){

        User user = new User("1", "mamba", "男");
        return user.toString();  //不适用json

    }
}
```

![image-20220801111859713](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220801111859713.png)

使用json

```java
package com.mamba.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mamba.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {


    @RequestMapping("/user/query2")
    @ResponseBody  //不走视图解析器
    public String queryWithJson() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();  // jackson ObjectMapper  对象映射器

        User user = new User("1", "mamba", "男");
        String msg = mapper.writeValueAsString(user);
        return msg;  //json

    }
}
```

![image-20220801112215818](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220801112215818.png)

#### 关于JSON乱码

在SpringMVC中统一配置，添加<mvc:annotaion-driven>的相关配置

```xml
<!--    注解driver， 注册必要的bean-->
<!--解决json 乱码配置-->
<mvc:annotation-driven>
    <mvc:message-converters register-defaults="true">
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <constructor-arg value="UTF-8"/>
        </bean>
        <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
            <property name="objectMapper">
                <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                    <property name="failOnEmptyBeans" value="false"/>
                </bean>
            </property>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

即可统一解决

![image-20220801112708202](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220801112708202.png)

#### 自己实现一个Json工具类

```java
package com.mamba.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.text.SimpleDateFormat;

public class JsonUtils {
    public static String toJson(Object o){
        return toJson(o, "yyyy-MM-dd HH:mm:ss"); // 默认format
    }


    public static String toJson(Object o, String format) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS, false);  //关掉自动转为时间戳
        mapper.setDateFormat(new SimpleDateFormat(format));
        try {
            return mapper.writeValueAsString(o);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

#### FastJson

阿里巴巴开发

可以轻松实现json对象与javabean的转换

导入依赖



```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.4</version>
</dependency>
```

主要类

JSONObject  --- json对象

JSONArray --- json对象数组

JSON ---- JSONObject 和 JSONArray的转化

```java
package com.mamba.controller;


import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mamba.pojo.User;
import com.mamba.utils.JsonUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController //不走视图解析器
public class FastJsonController {

    @RequestMapping(value = "/fastjson/query2")
    public String queryWithJson() throws JsonProcessingException {
        return JSON.toJSONString(new User("1", "mamba", "男"));  //json

    }

    @RequestMapping(value = "/fastjson/queryAll")
    public String queryAll() throws JsonProcessingException {
        List<User> list = new ArrayList<User>();

        list.add(new User("1", "mamba", "男"));
        list.add(new User("2", "mamba", "男"));
        list.add(new User("3", "mamba", "男"));
        list.add(new User("4", "mamba", "男"));
        return JSON.toJSONString(list);  //json
    }

    @RequestMapping("/fastjson/time")
    public String time() throws JsonProcessingException {
        return JSON.toJSONString(new Date());

    }
}
```

Java对象 -> Json字符串

Json字符串->Java对象

Java对象->Json对象

Json对象->java对象

## SSM整合

需求分析-设计-业务-前端-..

#### 建立数据库

![image-20220801135348751](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220801135348751.png)

#### 搭建Maven项目环境

创建Maven项目

导入依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>SpringMVC</artifactId>
        <groupId>com.mamba</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>SSM-01</artifactId>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
<!--数据库-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.28</version>
        </dependency>

        <dependency>
            <groupId>com.mchange</groupId>
            <artifactId>c3p0</artifactId>
            <version>0.9.5.2</version>
        </dependency>


<!--JSP-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>

        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.2</version>
        </dependency>

<!--mybatis-->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.2</version>
        </dependency>

        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis-spring</artifactId>
            <version>2.0.2</version>
        </dependency>
<!--        Spring-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.1.9.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.1.9.RELEASE</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

<!--静态资源导出问题-->
    <build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
        </resources>
    </build>
</project>
```

连接数据库

创建包、创建mybatis-config.xml、applicationContext.xml、database.properties

database.properties



```xml
driver = com.mysql.cj.jdbc.Driver
## ???mysql8.0+ ,url?????????
url = jdbc:mysql://localhost:3306/ssm01?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=Asia/Shanghai
username = root
password = 170715
```

mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
                PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
                "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!--配置数据源，交给spring去做-->
    <typeAliases>
        <package name="com.mamba.pojo"/>
    </typeAliases>

<!--    <mappers>-->
<!--        <package name="com.mamba.dao"/>-->
<!--    </mappers>-->
</configuration>
```

注入mapper/dao层

spring-dao.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
    <!--关联数据库配置-->
    <context:property-placeholder location="classpath:database.properties"/>
    <!--连接池
       1.c3p0：自动化操作
       2.dbcp:半自动化操作
       3.druid:略
    -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>


        <!-- c3p0连接池的私有属性 -->
        <property name="maxPoolSize" value="30"/>
        <property name="minPoolSize" value="10"/>
        <!-- 关闭连接后不自动commit -->
        <property name="autoCommitOnClose" value="false"/>
        <!-- 获取连接超时时间 10s-->
        <property name="checkoutTimeout" value="10000"/>
        <!-- 当获取连接失败重试次数 -->
        <property name="acquireRetryAttempts" value="2"/>
    </bean>


    <!--sqlSessionFactory-->
    <bean id="sqlSesionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!-- 注入数据库连接池 -->
        <property name="dataSource" ref="dataSource"/>
        <!-- 配置MyBaties全局配置文件:mybatis-config.xml -->
        <property name="configLocation" value="classpath:mybatis-config.xml"/>
    </bean>

    <!-- 4.配置扫描Dao接口包，动态实现Dao接口注入到spring容器中 -->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!-- 注入sqlSessionFactory -->
        <property name="sqlSessionFactoryBeanName" value="sqlSesionFactory"/>
        <!-- 给出需要扫描Dao接口包 -->
        <property name="basePackage" value="com.mamba.dao"/>
    </bean>
</beans>
```

spring注入service层

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
    <!-- 扫描service相关的bean -->
    <context:component-scan base-package="com.mamba.service" />

    <!--BookServiceImpl注入到IOC容器中-->
    <bean id="BookServiceImpl" class="com.mamba.service.Impl.BookServiceImpl">
        <property name="bookMapper" ref="bookMapper"/>
    </bean>

    <!-- 配置事务管理器 -->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!-- 注入数据库连接池 -->
        <property name="dataSource" ref="dataSource" />
    </bean>
</beans>

```

spring注入springmvc层

springmvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
    <!-- 配置SpringMVC -->
    <!-- 1.开启SpringMVC注解驱动 -->
    <mvc:annotation-driven />
    <!-- 2.静态资源默认servlet配置-->
    <mvc:default-servlet-handler/>
    <!-- 3.配置jsp 显示ViewResolver视图解析器 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="viewClass" value="org.springframework.web.servlet.view.JstlView" />
        <property name="prefix" value="/WEB-INF/jsp/" />
        <property name="suffix" value=".jsp" />
    </bean>

    <!-- 4.扫描web相关的bean -->
    <context:component-scan base-package="com.mamba.controller" />

    <!--    注解driver， 注册必要的bean-->
    <!--解决json 乱码配置-->
    <mvc:annotation-driven>
        <mvc:message-converters register-defaults="true">
            <bean class="org.springframework.http.converter.StringHttpMessageConverter">
                <constructor-arg value="UTF-8"/>
            </bean>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
                <property name="objectMapper">
                    <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                        <property name="failOnEmptyBeans" value="false"/>
                    </bean>
                </property>
            </bean>
        </mvc:message-converters>
    </mvc:annotation-driven>
</beans>

```

web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!--     设置绑定的配置文件-->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <!-- characterEncodingFilter字符编码过滤器 -->
    <filter>
        <filter-name>characterEncodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <!--要使用的字符集，一般我们使用UTF-8(保险起见UTF-8最好)-->
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
        <init-param>
            <!--是否强制设置request的编码为encoding，默认false，不建议更改-->
            <param-name>forceRequestEncoding</param-name>
            <param-value>false</param-value>
        </init-param>
        <init-param>
            <!--是否强制设置response的编码为encoding，建议设置为true，下面有关于这个参数的解释-->
            <param-name>forceResponseEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>characterEncodingFilter</filter-name>
        <!--这里不能留空或者直接写 ' / ' ，否者不起作用-->
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <!--Session过期时间-->
    <session-config>
        <session-timeout>15</session-timeout>
    </session-config>
</web-app>

```

applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

<!--    bean容器-->
    <import resource="spring-dao.xml"/>
    <import resource="spring-service.xml"/>
    <import resource="springmvc.xml"/>
</beans>
```

Controller

```java
package com.mamba.controller;


import com.alibaba.fastjson.JSON;
import com.mamba.pojo.Book;
import com.mamba.service.Impl.BookServiceImpl;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    private BookServiceImpl bookService;

    @PostMapping("/book/add")
    public String add(@RequestParam("name") String name,
                      @RequestParam("count") Integer count,
                      @RequestParam("detail") String detail){
        Book book = new Book(0, name, count, detail);
        System.out.println(book);
        Integer result = bookService.addBook(book);
        if (result > 0){
            return "添加成功";
        }
        return "添加失败";
    }



    @GetMapping("/book/delete")
    public String delete(@RequestParam("id") Integer id){
        Integer result = bookService.deleteBook(id);
        if(result > 0){
            return "删除成功";
        }
        return "删除失败";
    }

    @GetMapping("/book/query")
    public ModelAndView query(@RequestParam("id") Integer id){
        ModelAndView mv = new ModelAndView("test");
        Book book = bookService.queryBook(id);
        System.out.println(book);
        mv.addObject("msg", JSON.toJSONString(book.toString()));
        return mv;
    }


    @GetMapping("/book/queryAll")
    public ModelAndView queryAll(){
        ModelAndView mv = new ModelAndView("test");
        List<Book> list = bookService.queryAllBook();
        System.out.println(list);
        String msg = "";
        for (Book book : list){
            String bookMsg = book.toString();
            msg += JSON.toJSONString(bookMsg);
        }
        mv.addObject("msg", msg);
        return mv;
    }

    @PostMapping("/book/update")
    public ModelAndView update(@RequestParam("id") Integer id,
                               @RequestParam("name") String name,
                               @RequestParam("count") Integer count,
                               @RequestParam("detail") String detail){
        ModelAndView mv = new ModelAndView("test");
        Book book = bookService.queryBook(id);
        if (book != null){
            book.setName(name);
            book.setCount(count);
            book.setDetail(detail);
            int result = bookService.updateBook(book);
            if (result > 0){
                mv.addObject("msg", "修改成功");
            }else{
                mv.addObject("msg", "修改失败");
            }
        }else{
            mv.addObject("msg", "未查询到相关信息");
        }
        return mv;
    }


}
```

BookMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.mamba.dao.BookMapper">
    <insert id="addBook" parameterType="com.mamba.pojo.Book">
        insert into book (name, count, detail)
        values (##{name}, ##{count}, ##{detail})
    </insert>

    <delete id="deleteBook" parameterType="integer">
        delete from book where id = ##{id}
    </delete>
    
    <update id="updateBook" parameterType="com.mamba.pojo.Book">
        update book set name = ##{name}, count=##{count}, detail=##{detail}
        where id = ##{id}
    </update>

    <select id="queryBook" parameterType="integer" resultType="com.mamba.pojo.Book">
        select * from book
        where id = ##{id}
    </select>

    <select id="queryAllBook" resultType="com.mamba.pojo.Book">
        select * from book
    </select>
</mapper>
```

## Ajax

异步的js和xml

在无需重新加载整个页面的情况下，对部分内容进行更新

type=xhr

#### 伪ajax

iframe可以做出界面部分刷新的效果，但并不是实际的异步刷新

#### 真正的Ajax

$.post

$.get

$.request

通过js异步请求，然后更新页面的dom元素，达到动态更新部分页面效果的目的

## 拦截器

早在Struts中就有拦截器

SpringMVC中的拦截器类似于Servlet中的Filter

**拦截器也是AOP思想的一种具体实现**

#### 过滤器和拦截器的区别

###### 过滤器

是servlet的一种规范，任何javaweb项目可以用

在url-pattern配置为/*，对所有访问资源进行拦截

###### 拦截器

拦截器是SpringMVC框架独有的，只有SpringMVC才可以用

会拦截Controller方法，对jsp、html、css、image、js等静态资源不会拦截

#### 自定义拦截器

1. 实现HandlerInterceptor接口

```java
package com.mamba.config;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
```



2. 在applicationContext.xml中对拦截器进行配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="
      http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.2.xsd
      http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.2.xsd
      http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.2.xsd">

    <!--    扫描包-->
    <context:component-scan base-package="com.mamba.controller"/>
    <!--    注解driver， 注册必要的bean-->
    <mvc:annotation-driven/>

    <!--    过滤静态资源-->
    <mvc:default-servlet-handler/>

    <!--    不配置视图解析器,使用传统的ServletAPI进行重定向或者转发-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
    <!--拦截器配置-->
    <mvc:interceptors>
        <mvc:interceptor>
            <mvc:mapping path="/**"/>
            <bean class="com.mamba.config.MyInterceptor"></bean>
        </mvc:interceptor>
    </mvc:interceptors>
</beans>
```

## 上传文件和下载文件

#### 上传

1. 导入依赖
2. 配置
3. 写Controller

#### 下载

一种通过Controller

一种通过直接请求静态资源

## SSM总结

![image-20220810223654363](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220810223654363.png)

![image-20220810223746370](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220810223746370.png)

![image-20220810223756336](C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220810223756336.png)