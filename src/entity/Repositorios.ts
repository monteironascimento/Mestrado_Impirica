import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Repositorios{

    @PrimaryColumn()
    id: number;

    @Column( {nullable: true})
    node_id?: string;    

    @Column( {nullable: true, length:140})
    name?: string;  

    @Column( {nullable: true, length:1000})
    full_name?: string;  

    @Column( {nullable: true})
    private?: string;  

    @Column( {nullable: true, length:5000})
    owner?: string;  

    @Column( {nullable: true})
    html_url?: string;  

    @Column( {nullable: true, length:10000})
    description?: string;  

    @Column( {nullable: true})
    fork?: string;  

    @Column( {nullable: true})
    url?: string;  

    @Column( {nullable: true})
    forks_url?: string;  

    @Column( {nullable: true})
    keys_url?: string;

    @Column( {nullable: true})
    collaborators_url?: string;

    @Column( {nullable: true})
    teams_url?: string;

    @Column( {nullable: true})
    created_at?: string;

    @Column( {nullable: true})
    updated_at?: string;
   
    @Column( {nullable: true})
    pushed_at?: string;

    @Column( {nullable: true})
    size?: string;

    @Column( {nullable: true})
    stargazers_count?: string;

    @Column( {nullable: true})
    watchers_count?: string;

    @Column( {nullable: true})
    language?: string;

    @Column( {nullable: true})
    has_issues?: string;

    @Column( {nullable: true})
    has_projects?: string;

    @Column( {nullable: true})
    has_downloads?: string;

    @Column( {nullable: true})
    has_wiki?: string;

    @Column( {nullable: true})
    has_pages?: string;

    @Column( {nullable: true})
    forks_count?: string;

    @Column( {nullable: true})
    mirror_url?: string;

    @Column( {nullable: true})
    archived?: string;

    @Column( {nullable: true})
    disabled?: string;

    @Column( {nullable: true})
    open_issues_count?: string;

    @Column( {nullable: true})
    allow_forking?: string;

    @Column( {nullable: true})
    is_template?: string;

    @Column( {nullable: true})
    topics?: string;

    @Column( {nullable: true})
    visibility?: string;

    @Column( {nullable: true})
    forks?: string;

    @Column( {nullable: true})
    open_issues?: string;

    @Column( {nullable: true})
    watchers?: string;

    @Column( {nullable: true})
    default_branch?: string;

    @Column( {nullable: true})
    score?: string;

}