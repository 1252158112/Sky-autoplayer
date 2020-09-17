var pot=new Array();
var xt=dialogs.input("请输入第一个音符x坐标","770");
var y=dialogs.input("请输入第一个音符y坐标","210");
var t=dialogs.input("请输入音符的间隔","200");
for(let i=0;i<3;i++)
{
    pot[i]=new Array();
    var x=xt;
    for(let j=0;j<5;j++)
    {
        pot[i][j]=new Array();
        pot[i][j][0]=x;
        pot[i][j][1]=y;
        x+=t;
        
    }
    y+=t;
}
console.show();
console.error("10s后运行，请打开光遇并调至演奏界面");
sleep(100);
console.setSize(device.width/10,device.height/10);
console.info("测试音阶");
var dl=dialogs.input("请输入弹奏速度(音符🎶的间隔，以ms为单位)，若输入0跳过该步骤","0");
console.info("间隔确定为:",dl);
if(dl!=0)
{
    sleep(1000);
    console.hide();
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<5;j++)
        {
            gestures([0,5,[pot[i][j][0],pot[i][j][1]],[pot[i][j][0],pot[i][j][1]]]);
            console.info(pot[i][j][0],"-",pot[i][j][1]);
            sleep(dl);
        }
    }
    sleep(1000);
}    
console.show();
console.info("测试完毕");
if(files.isDir("/sdcard/SkyMusic/"))
    console.info("SkyMusic文件夹存在");
else
{
    console.error("SkyMusic文件夹不存在");
    if(files.create("/sdcard/SkyMusic/"))
        console.info("创建文件夹成功")
    else
        console.error("创建文件夹失败")
}
var fe=dialogs.rawInput("请输入琴谱(完整名字，如天空之城.txt");
if(files.isFile("/sdcard/SkyMusic/"+fe))
    console.info("载入成功");
else
    console.error("文件不存在");
var music=files.read("/sdcard/SkyMusic/"+fe);
console.log("读取到的乐谱为");
console.info(music);
dl=dialogs.input("请输入弹奏速度(音符🎶的间隔，以ms为单位)，若输入0跳过该步骤","250");
var pi=new Array();
var num=new Array();
var ti=0;
var pit=0;
for(let i=0;i<music.length;i++)
{
    console.log(music[i]);
    
    if(music[i]=="/")
    {
        if(pit==1)
            num[ti++]=parseInt(pi[0])-1;
        else
            num[ti++]=parseInt(pi[0]+pi[1])-1;
        pit=0;
        pi.length=0
        continue;
    }
    else if(music[i]=="-")
    {
        console.error(i);
        console.info("弹奏",num);
        var xp=new Array();
        var yp=new Array();
        for(let k=0;k<num.length;k++)
        {
            xp[k]=pot[Math.floor(num[k]/5)][num[k]%5][0];
            yp[k]=pot[Math.floor(num[k]/5)][num[k]%5][1];
        }
        console.info(xp,",",yp);
        console.hide();
        if(num.length==1&&num[0]==0)
        {
            sleep(dl);
        }
        else if(num.length==1)
        {
            gestures([0,5,[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]],[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]]]);
            sleep(dl);
        }
        else if(num.length==2)
        {
            log(num);
            gestures([0,5,[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]],[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]]],
	                 [0,5,[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]],[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]]]);
            sleep(dl);
        }
	       	else if(num.length==3)
        {
            gestures([0,5,[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]],[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]]],
	                 [0,5,[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]],[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]]],
					 [0,5,[pot[Math.floor(num[2]/5)][num[2]%5][0],pot[Math.floor(num[2]/5)][num[2]%5][1]],[pot[Math.floor(num[2]/5)][num[2]%5][0],pot[Math.floor(num[2]/5)][num[2]%5][1]]]);
            sleep(dl);
        }
       		else if(num.length==4)
        {
            gestures([0,5,[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]],[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]]],
	                 [0,5,[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]],[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]]],
					 [0,5,[pot[Math.floor(num[2]/5)][num[2]%5][0],pot[Math.floor(num[2]/5)][num[2]%5][1]],[pot[Math.floor(num[2]/5)][num[2]%5][0],pot[Math.floor(num[2]/5)][num[2]%5][1]]],
					 [0,5,[pot[Math.floor(num[3]/5)][num[3]%5][0],pot[Math.floor(num[3]/5)][num[3]%5][1]],[pot[Math.floor(num[3]/5)][num[3]%5][0],pot[Math.floor(num[3]/5)][num[3]%5][1]]]);
            sleep(dl);
        }
        	else if(num.length==5)
        {
            gestures([0,5,[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]],[pot[Math.floor(num[0]/5)][num[0]%5][0],pot[Math.floor(num[0]/5)][num[0]%5][1]]],
	                 [0,5,[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]],[pot[Math.floor(num[1]/5)][num[1]%5][0],pot[Math.floor(num[1]/5)][num[1]%5][1]]],
					 [0,5,[pot[Math.floor(num[2]/5)][num[2]%5][0],pot[Math.floor(num[2]/5)][num[2]%5][1]],[pot[Math.floor(num[2]/5)][num[2]%5][0],pot[Math.floor(num[2]/5)][num[2]%5][1]]],
					 [0,5,[pot[Math.floor(num[3]/5)][num[3]%5][0],pot[Math.floor(num[3]/5)][num[3]%5][1]],[pot[Math.floor(num[3]/5)][num[3]%5][0],pot[Math.floor(num[3]/5)][num[3]%5][1]]],
					 [0,5,[pot[Math.floor(num[4]/5)][num[4]%5][0],pot[Math.floor(num[4]/5)][num[4]%5][1]],[pot[Math.floor(num[4]/5)][num[4]%5][0],pot[Math.floor(num[4]/5)][num[4]%5][1]]]);
            sleep(dl);
        }
        ti=0;
        num.length=0
    }
        else if(music[i]=="_")
    {
        num[ti++]=0;
    }
    else
        pi[pit++]=music[i];
}