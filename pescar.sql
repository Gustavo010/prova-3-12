drop database if exists Pescaria;
create database Pescaria;
use Pescaria;

create table Pesca(
    id  integer primary key auto_increment,
    cidade varchar(200) not null,
    quantidade decimal (9,2) not null
);

insert into Pesca(cidade, quantidade) values ('Santos', 120),('Ubatuba', 150), ('Pedreira', 20);
