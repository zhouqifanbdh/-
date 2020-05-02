# JSON 数据格式



## JSON定义

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式，而非编程语言。其语法只支持字符串，数值，布尔值及null以及在此基础上的对象和数组。JSON 可以将 JavaScript 对象中表示的一组数据转换为字符串，然后就可以在函数之间轻松地传递这个字符串，或者在异步应用程序中将字符串从 Web 客户机传递给服务器端程序。



## JSON基础结构

1. **“名称/值”对的集合（A collection of name/value pairs）。**不同的语言中，它被理解为对象（object），记录（record），结构（struct），字典（dictionary），哈希表（hash table），有键列表（keyed list），或者关联数组 （associative array）。

2. **值的有序列表（An ordered list of values）。**在大部分语言中，它被理解为数组（array）。



## JSON基础示例

### 表示名值对

**单个名值对** { "firstName": "Brett" }

**多个名值对** { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" }

### 表示数组

**多个带花括号的记录分组在一起**

```json
{ "people": [

{ "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },

{ "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},

{ "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" }

]}
```



**相同的语法表示多个值（每个值包含多个记录）**

 ```json
{ "programmers": [

{ "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },

{ "firstName": "Jason", "lastName":"Hunter", "email": "bbbb" },

{ "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" }

],

"authors": [

{ "firstName": "Isaac", "lastName": "Asimov", "genre": "science fiction" },

{ "firstName": "Tad", "lastName": "Williams", "genre": "fantasy" },

{ "firstName": "Frank", "lastName": "Peretti", "genre": "christian fiction" }

],

"musicians": [

{ "firstName": "Eric", "lastName": "Clapton", "instrument": "guitar" },

{ "firstName": "Sergei", "lastName": "Rachmaninoff", "instrument": "piano" }

] }


 ```



## JSON应用

### 访问数据

长字符串实际上只是一个数组；将这个数组放进 JavaScript 变量之后，用点号表示法来表示数组元素。如

```json
people.programmers[0].lastName;
```

注意，数组索引是从零开始的。所以，这行代码首先访问 people 变量中的数据；然后移动到称为 programmers的条目，再移动到第一个记录（[0]）；最后，访问 lastName 键的值。结果是字符串值 “McLaughlin”。

下面是使用同一变量的几个示例。

```json
people.authors[1].genre                       // Value is "fantasy"
people.musicians[3].lastName          // Undefined. This refers to the fourth entry, and there isn't one
people.programmers.[2].firstName      // Value is "Elliotte"
```



### 修改数据

```json
people.musicians[1].lastName = "Rachmaninov";
```



### 转换回字符串

```json
String newJSONtext = people.toJSONString();
```



## JSON数据格式的优点

1. 数据格式比较简单，易于读写，格式都是压缩的，占用带宽小；
2. 易于解析，客户端JavaScript可以简单的通过eval() 进行JSON数据的读取；
3. 支持多种语言，包括ActionScript, C, C#, ColdFusion, Java, JavaScript, Perl, PHP, Python, Ruby等服务器端语言，便于服务器端的解析；
4. 在PHP世界，已经有PHP-JSON和JSON-PHP出现了，偏于PHP序列化后的程序直接调用，PHP服务器端的对象、数组等能直接生成JSON格式，便于客户端的访问提取；
5. 因为JSON格式能直接为服务器端代码使用，大大简化了服务器端和客户端的代码开发量，且完成任务不变，并且易于维护。

## JSON与XML

### 与XML相同之处

- JSON 是纯文本
- JSON 具有"自我描述性"（人类可读）
- JSON 具有层级结构（值中存在值）
- JSON 可通过 JavaScript 进行解析
- JSON 数据可使用 AJAX 进行传输

###  与XML不同之处

- 没有结束标签
- 更短
- 读写的速度更快
- 能够使用内建的 JavaScript eval() 方法进行解析
- 使用数组
- 不使用保留字