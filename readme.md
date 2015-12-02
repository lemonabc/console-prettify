扩展console，增加log、warn、error、info颜色输出。并新增 blue、cyan、green、magenta方法。

### 安装

    npm install console-prettify

### 使用

    require('console-prettify')();
    
    console.log('hello console');
    
### 参数
#### 前缀[prefix]

默认没有前缀，如要输出前缀，传参即可

    require('console-prettify')({
        prefix: true
    });
    
    console.log('log')
    console.info('info')
结果：

**log**: <span style="color:grey">log</span><br/>
**info**: <span style="color:green">info</span><br/>
**error**: <span style="color:red">info</span>

#### 自定义样式[theme]

如果默认样式满足你的需求，你可以通过`theme`参数自定义样式。

##### 样式
```
    require('console-prettify')({
        prefix: true,
        theme:{
            log: ['underline' ,'green', 'redBG']
        }
    });

    console.log('hello log')
```
输出：

<span style="font-weight:900">log:</span><span style="background-color:#bb040f;color:#00bd44;text-decoration: underline;">hello log</span>

##### Theme属性列表

名称  | 示例
------------- | -------------
bold    |**粗体**
underline  | <u>下划线_<u>
inverse |<span style="background:#000;color:#fff;">反色</span>
strikethrough   | <s>删除线</s>

有些属性貌似不支持，貌似我的Mac就不支持删除线

##### 文字颜色示例

属性  | 示例
------------- | -------------
white   |...
grey    |...
black   |...
blue    |...
cyan    |<span style="background-color:#00bbc5">&nbsp;&nbsp;&nbsp;</span>
green   |<span style="background-color:#00bd44">&nbsp;&nbsp;&nbsp;</span>
magenta |<span style="background-color:#ff39cb">&nbsp;&nbsp;&nbsp;</span>
red |<span style="background-color:#eb392b">&nbsp;&nbsp;&nbsp;</span>
yellow  |<span style="background-color:#aaae43">&nbsp;&nbsp;&nbsp;</span>

##### 背景颜色示例

属性  | 示例
------------- | -------------
whiteBG |...
greyBG  |...
blackBG |...
blueBG  |<span style="background-color:#3200ab">&nbsp;&nbsp;&nbsp;</span>
cyanBG  |<span style="background-color:#00a5b0">&nbsp;&nbsp;&nbsp;</span>
greenBG |<span style="background-color:#00a630">&nbsp;&nbsp;&nbsp;</span>
magentaBG   |<span style="background-color:#bb0510">&nbsp;&nbsp;&nbsp;</span>
redBG   |<span style="background-color:#bb040f">&nbsp;&nbsp;&nbsp;</span>
yellowBG    | <span style="background-color:#9a9924;">&nbsp;&nbsp;&nbsp;</span>