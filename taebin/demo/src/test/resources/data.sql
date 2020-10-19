insert into  person(id,name, age, blood_type,year_of_birthday,month_of_birthday,day_of_birthday) values(1,'martin',10,'A',1991,8,15);
insert into  person(id,name, age, blood_type,year_of_birthday,month_of_birthday,day_of_birthday)values(2,'david',9,'B',1992,7,10);
insert into  person(id,name, age, blood_type,year_of_birthday,month_of_birthday,day_of_birthday) values(3,'dennis',8,'O',1993,1,5);
insert into  person(id,name, age, blood_type,year_of_birthday,month_of_birthday,day_of_birthday) values(4,'sophia',7,'AB',1994,6,30);
insert into  person(id,name, age, blood_type,year_of_birthday,month_of_birthday,day_of_birthday) values(5,'benny',6,'A',1995,8,30);

-- insert into person (id, address, age, dayof_birthday, month_of_birthday, year_of_birthday, block_id, blood_type, hobby, job, name, phone_number


-- insert  into person(id,name,age,blood_type) values(1,'john',10,'A');

insert into block(id,name) values(1,'dennis');
insert into block(id,name) values(2,'sophia');

update person set block_id = 1 where id = 3;
update person set block_id = 2 where id = 4;
