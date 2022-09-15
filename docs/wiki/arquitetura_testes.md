# Arquitetura de testes

O ciclo de vida do nosso software está totalmente atrelado com os testes, de forma que, sejam feitos testes antes, durante e após a funcionalidade ser desenvolvida.

Com critérios de aceite, é possível guiar testes manuais para a validação que a equipe de desenvolvimento e o cliente faz. Definindo assim o DOR e DOD, que são as definições de concluído e de pronto pra ser iniciado. 

Também utilizamos o framework Cypress, em javascript. Foi criado uma suíte de testes automatizados que rodam sempre que um commit é feito, dessa forma, podemos garantir que aquilo que já foi construído continua funcionando perfeitamente. 

Além dos testes automatizados, é importante citar que testes fumaça também são feitos, para garantir que a compilação ocorreu corretamente e não vai ser necessário um rollback. 
