SELECT language , top.id, count(*) FROM public.repositorios r
	left join public.topics top on (top.id_repository = r.id)
	where  top.id is not null
	and  language is not null
	group by language, top.id

	order by language
	