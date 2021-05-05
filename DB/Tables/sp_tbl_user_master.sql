drop procedure if exists sp_tbl_user_master;
create procedure sp_tbl_user_master()
begin
    declare currentSchema varchar(50);
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_user_master'
        ) then
        create table tbl_user_master
        (
            id            int primary key auto_increment,
            first_name    varchar(255)                        not null,
            last_name     varchar(255),
            email_address varchar(255) unique                 not null,
            pincode       varchar(10)                         not null,
            age           int                                 not null,
            is_active     tinyint   default 1,
            created       timestamp default current_timestamp not null,
            modified      timestamp default null
        );
    end if;
end;
call sp_tbl_user_master();
drop procedure if exists sp_tbl_user_master;