#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <fstream>
using namespace std;
int main(void)
{
	int key[10000][6];
	memset(key,0,sizeof(key));
	char old[1000000];
	int T;
	printf("输入间隔");
	scanf("%d",&T);
	fstream sky;
	sky.open("sky.txt");
	if(!sky)
		printf("文件丢失!!无法运行\n");
	string line;
	getline (sky,line);
//	gets(old);
	for(int i=0;line[i]!='\0';i++)
		old[i]=line[i];
	int len=strlen(old);
	int flag=0;
	int tag=0;
	char temp[10];
	int ptr=0;
	int now=0;
	int zero=0;
	for(int i=0;i<len;i++)
	{
		if(old[i]>='0'&&old[i]<='9'&&tag==1&&flag!=1)
		{
			tag=2;
			continue;		
		}
		if(old[i]>='0'&&old[i]<='9')
		{
			if(flag==0&&old[i]=='0')
			{
				flag=2;
				zero=1;
			}
			else
			{
				flag=1;
				temp[ptr++]=old[i];
				if(old[i+1]<'0'||old[i+1]>'9')
					flag=2;	
			}
		}
		if(flag==2&&tag==0)
		{
			if(zero==1)
				now=0;
			else
				now=atoi(temp)/T;
			//printf("now-%d-",now);
			zero=0;
			flag=0;
			tag=1;
			ptr=0;
			memset(temp,0,sizeof(temp));
		}
		if(flag==2&&tag==2)
		{
			key[now][0]++;
			if(zero==1)
				key[now][key[now][0]]=1;
			else	
				key[now][key[now][0]]=atoi(temp)+1;	
			//printf("key-%d\n",atoi(temp));
			zero=0;
			flag=0;
			tag=0;
			ptr=0;
			memset(temp,0,sizeof(temp));
		}
	}
	for(int i=0;i<=now;i++)
	{
		if(key[i][0]==0)
			printf("_-");
		if(key[i][0]!=0)
		{
			for(int j=1;j<=key[i][0];j++)
				printf("%d/",key[i][j]);
			printf("-");
		}
	}
	while(1);
}
