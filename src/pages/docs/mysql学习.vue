<template>  <MarkdownToVue markdown="`set autocommit = off;`   
当将autocommit设置为off就有点git味道了
通过rollback可以回滚到上一个版本   
**非空约束**   
modify colunmname type  not null    
**set 默认值**
1. alter table tablename
alter columnname  set default value
2. alter table tablename modify columnname type default value
**set primary key **
+ create 
  - 直接跟在column后面
+ alter table tablename add constraint primary key(column_name);

**关于自增**  
自增的只能是主键   
**设置外键**  
foreign key(self table colunm) references table(table colunm);   
**关于外键**  
当该表被外键引用了,如果不设置删除条件就不能单独删除,外键一定是其他表的主键或具有唯一性或唯一性约束   
**关于内连接，左外连接，右外连接**   
> 内连接 取共同      
> 左外连接 取左边表的全部,以及右表能匹配的部分  
> 右外连接 与左外连接同理  
 
**关于limit语句**   
limit start_place, getdata;   
limit 10,10
从第10行开始放回10条数据   
**关于union语句**   
可以用在两个select语句中间,求两个select的并集   
**创建索引**
create index indexname on tableName(colunm1 name,colunm2 name);可以写一个也可以写多个,注意顺序。查询的时候要按照定义索引的顺序才能加快查询
**group by语句**  
作用:用于分组求和  
扩展:可以在后面接with rollup 来汇总(求和)

**关于外键删除**   
语句:     
``` alter table tablename drop foreign key keyname ```

当删除的一行有其他表引用时会报错,可以在定义外键时设置,如何处理引用。    
1. 可以在定义时将引用该行的行的外键设置为空
   - on delete set null
2. 可以将引用该行的行全部删除(级联删除)
   - on  delete  cascade  
  
**sql语句存储**   
mysql 默认是用分号分隔的,用下面语句会报错   
Tip delimiter 加分隔符 如$$   
create procedure function_name()  
begin    
select * from table;   
end;($$)
修改回来以免影响其他语句
delimiter ;  
调用：call function_name()
删除: drop procedure function_name;
进阶:参数传递(in arg type,int arg2 type,.......)
优点:可以减少网络流量，提高性能   
**触发器**   
create trigger trigger_name    
trigger_time[before,after] operate[update,delete,insert] on table_name   
for  each  row  sql语句  
**用户创建**
create user &quot;username&quot;@&quot;host&quot; identified by &quot;password&quot;

host: 表示用户可以在什么环境下访问数据库,localhost表示只有在本机访问, % 表示可以在其他环境下访问,但不包括本机   

**授权**  
grant privileges on database.table to 'username'@ 'host'    
privileges: 可以是All 表示全部控制权限，grant options(授予其他用户权限),proxy

**撤销用户权限**   
revoke  privileges on database.table from 'username'@'host'" /> </template>