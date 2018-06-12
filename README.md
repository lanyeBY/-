# Hotel_management_system
## 简单功能的宾馆管理系统
<br/><br/>
#### 编程语言： 
>>##### HTML + CSS + JavaScript + PHP
<br/><br/>
##### 针对不同身份（管理员、前台服务员、客房服务员、采购员）功能不同
<br/><br/>

##### 管理员功能：
* 房间管理，包括查看、插入、删除
* 工作人员管理，包括查看、增加、删除
<br/>
##### 前台服务员功能：
* 业务查询，包括查看房间、查看房客
* 业务办理，包括增加新房客、删除房客
* 增加客房服务指令
<br/>

##### 客房服务员功能：
* 客房服务功能，包括客房服务提醒、客房服务指令查看
* 客房物品管理，包括查看客房物品清单、修改（减少）客房物品数量
<br/>

##### 采购员功能：
* 客房物品管理，包括查看客房物品清单、客房物品数量修改、客房物品缺少提醒
<br/><br/><br/>

##### 数据库搭建：
###### 数据库名称：hotel

###### 表格：
>>user(用户登录表)<br/>
>>room(房间表)<br/>
>>worker(工作人员表)<br/>
>>customer(房客表)<br/>
>>server(客房服务指令表)<br/>
>>amenity(客房物品表)

###### 语句：</h6>
>user:

```
        create table `user`(
          `username` int(8) primary key,
          `userpwd` varchar(16) not null unique
        );
```
<br/>
>room:

```
        create table `room`(
          `rid` int(5) primary key,
          `rname` varchar(20) not null unique,
          `rdec` varchar(20) not null
        );
```
<br/>
>worker:

```
         create table `worker`(
          `wid` int(8) primary key,
          `wname` varchar(20) not null unique,
          `wsex` varchar(4) not null,
          `wsort` varchar(40) not null,
          `wage` int(4) not null
        );
```
<br/>
>customer:

```
          create table `customer`(
            `rid` int(8) not null,
            `cid` varchar(20) primary key,
            `cname` varchar(20) not null unique,
            `csex` varchar(4) not null,
            `cage` int(4) not null
          );
```
<br/>
>server:

```
          create table `server`(
            `rid` int(8) primary key,
            `snote` varchar(20) not null
          );
```
<br/>
>amenity:

```
          create table `amenity`(
            `aname` varchar(40) not null unique,
            `anum` int(4) not null,
            `adec` varchar(20) not null
          );
```
</li>
</ul>
