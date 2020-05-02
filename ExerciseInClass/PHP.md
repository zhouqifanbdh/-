PHP开发框架有助于促进快速软件开发（RAD），有助于创建更为稳定的程序，并减少开发者的重复编写代码的劳动。PHP开发框架背后的思想被称为“模型—视图—控制器”（MVC）。



## PHP Restful

REST（英文：Representational State Transfer，简称REST) ，指的是一组架构约束条件和原则。

符合REST设计风格的Web API称为RESTful API。它从以下三个方面资源进行定义：

- 直观简短的资源地址：URI，比如：`http://example.com/resources/`。
- 传输的资源：Web服务接受与返回的互联网媒体类型，比如：JSON，XML，YAM等。
- 对资源的操作：Web服务在该资源上所支持的一系列请求方法（比如：POST，GET，PUT或DELETE）。



```php
/**
 * @path("/hw")
 */
class HelloWorld
{
  /** 
   * @route({"GET","/"})
   */
  public function doSomething() {
    return "Hello World!";
  }
}
```



## RESTful Webservice 实例

```php
<?php
  
Class Site {
    
    private $sites = array(
        1 => 'TaoBao',  
        2 => 'Google',  
        3 => 'Runoob',              
        4 => 'Baidu',              
        5 => 'Weibo',  
        6 => 'Sina'
            
    );
        
    
    public function getAllSite(){
        return $this->sites;
    }
    
    public function getSite($id){
        
        $site = array($id => ($this->sites[$id]) ? $this->sites[$id] : $this->sites[1]);
        return $site;
    }    
}
?>
```



## PHP开发框架

**定义：** PHP框架就是一种可以在项目开发过程中，提高开发效率，创建更为稳定的程序，并减少开发者重复编写代码的基础架构。PHP框架是将不同Web系统开发过程中的共性、通用部分功能进行抽象，形成开发Web程序的基本架构。

**优点：**进行Web系统开发时，开发人员如果在PHP框架基础上进行二次开发，即可大大简化开发过程，快速实现系统功能。PHP框架能促进Web系统的**快速开发**、**节约时间**、**减少重复代码量**，并能帮助初学者创建规范、稳定的Web系统。

**PHP关键技术：** PHP开发框架多采用“模型一视图一控制器”（MVC）架构模式。MVC架构最早存在于桌面应用程序中，M是指[数据模型](https://baike.baidu.com/item/数据模型/1305623)，V是指[用户界面](https://baike.baidu.com/item/用户界面/6582461)，C则是指[控制器](https://baike.baidu.com/item/控制器/2206126)。使用MVC的目的是将M和V的实现代码分离，即隔离了业务逻辑与用户界面，不管哪一方改变都不会影响另一方。在MVC架构中，模型（Model）负责数据，视图（View）负责表现，控制器（Controller）负责业务逻辑。从本质上说，MVC拆分了一个程序的开发过程，这样你就可以修改独立的每一部分，而其他部分不受影响，这使得编写PHP代码更为快捷简单。

**常见框架：**Zend Framework、CakePHP、Yii、ThinkPHP、Codelgniter

