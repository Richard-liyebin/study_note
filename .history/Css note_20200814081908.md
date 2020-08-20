CSS 笔记心得
----
## 一.css基础
+ 1.一个css规则由一个选择符，和一个声明块组成：  选择符{ 声明块 }
+ 2.css中把元素分为置换元素和非置换元素，又分为块级元素和行内元素
+ 3.块级元素独占一行，宽为父级的宽度，可以设置宽高，内外边距；行内元素不可设置宽高，上下外边距无效，左右外边距有效，并且内边距无效

## 二.CSS选择器
### 1.ID选择器
 + 注意，html文档中，一个ID能且只能使用一次，但是浏览器不一定会去检查ID是否唯一，所以不会报错，但是最好不要用多个相同ID
### 2.类选择器
 >.user.name 可以匹配到class="user name" 或者 "name user" 或者 "user name xxx xxx",就是不可以单独匹配某一个 

### 3.属性选择符

#### 1.简单属性选择符
+  h1[class='name'][title]{}  找class属性值为name并且同时具有title属性的h1元素 注意是同时
#### 2.精确属性值选择符
+ a[href="www.baidu.com"][title="love"] 找href属性值为百度，并且title为love的a标签
```js
<p title="do something"></p>
此时若匹配 p[title="do"] or p[title="something"]是不行的
必须全部精准匹配 p[ttle="do something"]
```
#### 3.部分匹配属性值选择符 起始值属性选择符
```css
[foo|="bar"] 选择的元素有foo属性，且还是以bar或者bar-这种形式开头的元素
[foo*="bar"] 选择的元素有foo属性，只要属性值中包含bar单词，无论在哪，都可以
[foo~="bar"] 选择的元素有foo属性，只要属性值中有bar这个完整的单词就好，必须是单独的完整单词
[foo^="bar"] 选择的元素有foo属性，只要属性值中，开头是bar的元素
[foo$="bar"] 选择的元素有foo属性，只要属性值中，结尾是bar的元素
[foo$="bar"  i] 加上了i 可以匹配大小写都行！
```
### 4.根据文档进行选择
#### 1.后代选择器

> p span{} p元素下的后代所有span元素

#### 2.子代选择器
> p>span{} p元素子代的所有span元素

#### 3.兄弟选择器
> p+span{} 紧邻p元素后面的兄弟span元素,两者同属于一个父级
#### 4.同胞选择器
> p~span{} p元素后面的兄弟span元素，不必紧邻，两者同属于一个父级

### 5.伪类选择器

#### 1.:root 选择文档的根元素

> :root{} 选择html根元素

#### 2.:empty 选择空元素

> :empty{ display:none } 可以匹配元素之间空格和换行符

#### 3. :only-child 选择父级中只有唯一一个子代元素的子代元素

>  a img:only-child{} 匹配a元素后代中，父级只有img这一个子代元素的img，img的父级可以是a，可以不是a，可以是祖先元素 

#### 4. :only-of-type 选择父级中只有唯一一种元素的此种元素

> a img:only-of-type{} 选择a后代元素中，img的父元素中只有一个img元素的此元素，他的父级不可以再有其他img，但是可以有p，span等其他种类的元素
