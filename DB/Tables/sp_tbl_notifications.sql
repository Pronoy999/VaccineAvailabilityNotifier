drop procedure if exists sp_tbl_notifications;
create procedure sp_tbl_notifications()
begin
    declare currentSchema varchar(50);
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_notifications'
        ) then
        create table tbl_notifications
        (
            id            int primary key auto_increment,
            user_id       int                                 not null,
            subject       varchar(255),
            body          varchar(255),
            email_address varchar(255),
            is_notified   tinyint   default 0,
            is_active     tinyint   default 1,
            created       timestamp default current_timestamp not null,
            modified      timestamp default null
        );
    end if;
end;
call sp_tbl_notifications();
drop procedure if exists sp_tbl_notifications;