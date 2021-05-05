drop procedure if exists sp_registerUser;
create procedure sp_registerUser(parFirstName varchar(255), parLastName varchar(255), parEmail varchar(255),
                                 parPincode varchar(10), parAge int)
begin
    set @isExists = 0;
    select id into @isExists from tbl_user_master where email_address = parEmail and is_active = 1;
    if @isExists = 0 then
        insert into tbl_user_master(first_name, last_name, email_address, pincode, age)
            value (parFirstName, parLastName, parEmail, parPincode, parAge);
        select last_insert_id() as id;
    else
        select -1 as id;
    end if;
end;