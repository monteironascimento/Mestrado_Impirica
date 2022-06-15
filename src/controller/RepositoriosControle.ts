import axios from 'axios';
import { getRepository } from 'typeorm';
import { Repositorios } from '../entity/Repositorios';
import { Request, Response } from 'express';
import { Topics } from '../entity/Topics';
import { isEmpty } from '../tools/Empty';

export const processar = async (req: Request, res: Response) => {

    try{

        let dadosGit;
        let page = 0;
        let dataInicial = "2014-01-01"

        do{

            if(page == 10){
                page = 0;
            }

            page++;
        
            
            const urlEnv = `https://api.github.com/search/repositories?q=microservice+created:>=${dataInicial}&sort=created&order=asc&per_page=100&page=${page}`; 
            
            dadosGit = await axios.get(urlEnv, { headers: { Authorization: 'token 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' } });

            if( (page * 100) > dadosGit.total_count){
                break;
            }

            if(isEmpty(dadosGit.data.items)){
                break;
            }

            console.log(`Processando pagina ${page}  Total: ${dadosGit.data.total_count}   Data Processada: ${dataInicial}`);

            for (const key in dadosGit.data.items) {

                try {
                    await getRepository(Repositorios).save(dadosGit.data.items[key]);

                    for (const keyTop in dadosGit.data.items[key].topics) {
                        
                        const topics: Topics = {
                            "id": dadosGit.data.items[key].topics[keyTop],
                            "id_repository": dadosGit.data.items[key].id
                        }
                        await getRepository(Topics).save(topics);
                        
                    }

                } catch (error) {
                    console.log(error)    
                }

                console.log(dadosGit.data.items[key].created_at);

                if(page == 10){
                    page = 0;
                    console.log(dadosGit.data.items[key].created_at);  
                    dataInicial = dadosGit.data.items[key].created_at;
                }
            }

            await sleep(10000); //1 minutos de intervalo a cada solicitação 
        
        }while(true)

    }catch(error){
        console.log(error)
    }
    return res.status(200).json("ok");
}


async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  } 
  