drop procedure if exists sp_GetAllUsers;
create procedure sp_GetAllUsers()
begin
    select id, first_name, last_name, email_address, pincode, age
    from tbl_user_master
    where is_active = 1;
end;