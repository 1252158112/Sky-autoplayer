# Sky-autoplayer
# 光遇自动演奏
1.脚本使用auto.js启动
2.将Skymusic文件放置在手机sdcard根目录下
3.打开手机开发者选项，获取光遇第一（左上角）个键的x，y坐标，以及两个按键的坐标差值（一般为200），运行脚本时填入
4.播放乐谱时输入完整的乐谱名，如 right path.txt

# 自动转铺工具指南
（自动sky studio乐谱转换工具，即sky.cpp）
 1.复制从sky studio导出的乐谱，在sky.cpp编译的目录下新建sky.txt文件，将导出琴谱的如[{[{"time":0,"key":"1Key5"},....,{"time":30480,"key":"1Key4"}]}]复制进去
 2.打开sky.cpp编译出的文件，输入按键间隔（手动辨识，time间隔的最小值）
 3.输出结果即为自动演奏专用琴谱

# 乐谱语法规则：
使用txt文本编辑器编辑语法如下：
数字1-15对应键盘从左往右，从上往下，即第一行为1，2，3，4，5；第二行为6，7，8，9，10；第三行为11，12，13，14，15；
符号/表示同时按下，如1/2/即为准备同时按下第1，2键；注意按键后必须有/，即1/2为非法的
符号-表示弹奏，即1/2/-即为同时按下1，2键并弹奏出来
符号_表示休止，每个休止符后均需要-弹奏符，即__-为非法，应当为_-_-即休止两个间隔

示例：8/10/12/-_-10/-11/-12/-_-
同时弹奏8，10，12键 休止一拍 同时弹奏10，11，12键 休止一拍
