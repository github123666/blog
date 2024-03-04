"use strict";(self["webpackChunkdiary"]=self["webpackChunkdiary"]||[]).push([[142],{142:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=function(){var n=this,e=n._self._c;return e("MarkdownToVue",{attrs:{markdown:"`set autocommit = off;`   \n当将autocommit设置为off就有点git味道了\n通过rollback可以回滚到上一个版本   \n**非空约束**   \nmodify colunmname type  not null    \n**set 默认值**\n1. alter table tablename\nalter columnname  set default value\n2. alter table tablename modify columnname type default value\n**set primary key **\n+ create \n  - 直接跟在column后面\n+ alter table tablename add constraint primary key(column_name);\n\n**关于自增**  \n自增的只能是主键   \n**设置外键**  \nforeign key(self table colunm) references table(table colunm);   \n**关于外键**  \n当该表被外键引用了,如果不设置删除条件就不能单独删除,外键一定是其他表的主键或具有唯一性或唯一性约束   \n**关于内连接，左外连接，右外连接**   \n> 内连接 取共同      \n> 左外连接 取左边表的全部,以及右表能匹配的部分  \n> 右外连接 与左外连接同理  \n \n**关于limit语句**   \nlimit start_place, getdata;   \nlimit 10,10\n从第10行开始放回10条数据   \n**关于union语句**   \n可以用在两个select语句中间,求两个select的并集   \n**创建索引**\ncreate index indexname on tableName(colunm1 name,colunm2 name);可以写一个也可以写多个,注意顺序。查询的时候要按照定义索引的顺序才能加快查询\n**group by语句**  \n作用:用于分组求和  \n扩展:可以在后面接with rollup 来汇总(求和)\n\n**关于外键删除**   \n语句:     \n``` alter table tablename drop foreign key keyname ```\n\n当删除的一行有其他表引用时会报错,可以在定义外键时设置,如何处理引用。    \n1. 可以在定义时将引用该行的行的外键设置为空\n   - on delete set null\n2. 可以将引用该行的行全部删除(级联删除)\n   - on  delete  cascade  \n  \n**sql语句存储**   \nmysql 默认是用分号分隔的,用下面语句会报错   \nTip delimiter 加分隔符 如$$   \ncreate procedure function_name()  \nbegin    \nselect * from table;   \nend;($$)\n修改回来以免影响其他语句\ndelimiter ;  \n调用：call function_name()\n删除: drop procedure function_name;\n进阶:参数传递(in arg type,int arg2 type,.......)\n优点:可以减少网络流量，提高性能   \n**触发器**   \ncreate trigger trigger_name    \ntrigger_time[before,after] operate[update,delete,insert] on table_name   \nfor  each  row  sql语句  \n**用户创建**\ncreate user \"username\"@\"host\" identified by \"password\"\n\nhost: 表示用户可以在什么环境下访问数据库,localhost表示只有在本机访问, % 表示可以在其他环境下访问,但不包括本机   \n\n**授权**  \ngrant privileges on database.table to 'username'@ 'host'    \nprivileges: 可以是All 表示全部控制权限，grant options(授予其他用户权限),proxy\n\n**撤销用户权限**   \nrevoke  privileges on database.table from 'username'@'host'"}})},l=[],r=t(1001),o={},i=(0,r.Z)(o,a,l,!1,null,null,null),m=i.exports}}]);
//# sourceMappingURL=142.9664da45.js.map