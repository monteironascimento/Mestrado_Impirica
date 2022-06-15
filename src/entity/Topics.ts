import {  Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Topics{

    @PrimaryColumn()
    id: string;

    @Column( {nullable: true})
    id_repository?: number; 
}