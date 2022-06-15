SELECT language ,  count(*) FROM public.repositorios r
	where  language is not null
		and language not in ('Shell', 'Dockerfile', 'HCL', 'Makefile', 'Smarty', 'PowerShell', 'XSLT', 
							'PLpgSQL', 'EJS', 'Vim script', 'Jinja', 'Roff', 'Jsonnet', 'SaltStack',
							'Common Lisp', 'Gherkin', 'Bicep')
	group by language
	order by count(*) desc
	