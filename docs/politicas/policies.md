# Políticas do Repositório

## Objetivo do documento:

<p style="text-ident: 20px; text-align: justify" >
Estabelecer critérios que devem ser seguidos para contribuir com o projeto, focado principalmente para a equipe de desenvolvimento do software e de engenharia de requisitos.
</p>

**Índice do documento:**
- [Políticas do Repositório](#políticas-do-repositório)
    - [Objetivo do documento:](#objetivo-do-documento)
    - [Política de Branches](#política-de-branches)
        - [main](#main)
        - [feature](#feature)
        - [hotfix](#hotfix)
        - [doc](#doc)
    - [Política de Commits](#política-de-commits)
    - [Política de Remoção de Branches](#política-de-remoção-de-branches)
    - [Política de Pull Request](#política-de-pull-request)


## Política de Branches

<p style="text-ident: 20px; text-align: justify" >
A branches são referenciadas às issues e serão a base da divisão das tarefas de desenvolvimento e documentação que serão adicionadas ao projeto. 
</p>

### Padronização das Branches

 O projeto possui 4 tipos de branches:
 - [main](#main)
 - [Feature](#feature)
 - [Hotfix](#hotfix)
 - [Doc](#doc)

#### Formato:
```
<prefixo>#número da issue/assunto
```

Não esquecer de dividir as palavras(sempre minúsculas) do assunto com "-".
Exemplo: 
```
feature#87/novo-menu
```


 ### Main 

**É trabalhado somente com uma única branch *main*.** Nela, o projeto deve conter a sua versão estável. Baseia-se na branch *main* para as releases do projeto. As funcionalidadades implementadas e a documentação devem ser adicionadas a partir de um pull request para essa branch, onde será analisada pelos revisores responsáveis. Não recomenda-se que sejam realizados commits diretamente na *main.*


#### Feature

Essa ramificação é criada sempre que uma issue endereça uma nova funcionalidade para o projeto. **Essa branch é criada a partir da [main](#main) e é mesclada à mesma branch**. Para criar uma branch desse tipo, devemos executar os comandos:

```git
git branch feature/indice-nome-da-issue
git checkout indice-nome-da-issue
```


#### Hotfix

As branches hotfix devem ser criadas quando há uma issue apontando a necessidade de correção de bugs nas funcionalidades do projeto. **Essa branch é criada apartir da [main](#main) e é mesclada à mesma branch**.

Para criar uma branch desse tipo, devemos executar os comandos:

```git
git branch hotfix/indice-nome-da-issue
git checkout hotfix/indice-nome-da-issue
```

#### Doc

As branches docs devem ser criadas quando há uma issue apontando a necessidade de criação de documentos. **Essa branch é criada apartir da [Main](#main) e é mesclada à mesma branch**. Após a primeira versão estável, correções podem ser feitas diretamente na branch main.

Para criar uma branch desse tipo, devemos executar os comandos:

```git
git branch doc/indice-nome-da-issue
git checkout doc/indice-nome-da-issue
```

## Política de Commits

Os commits são essenciais para acompanharmos as alterações e adições ao projeto.

Deve ser usado o modo imperativo (ações e ordens assertivas) para mencionar o que foi feito.

Caso o commit trate de uma questão simples, faça o commit da seguinte maneira:

```git
git commit -m "#IdIssue - Mensagem"
```


Devido à importância, caso o commit trate de algo mais complexo, use o seguinte template para padronização, substituindo o texto dos comentários '# não será lido no commit':

```txt
. #Id-da-Issue - Título do commit: comece com  letra maiúscula, objetivo
#Não mais que 50 chars,Essa linha possui   50                   #
#Pular linha

# Corpo: Explique o quê e porque
# Não mais que 72 caracteres (essa linha possui)                                                                             #

#OPCIONAL: Caso haja, inclua essa linha de co-autores do seu commit para cada contribuidor.
#Pular 2 linhas


# Co-authored-by: nome1 <usuário1@users.noreply.github.com>
# Co-authored-by: nome2 <usuário2@users.noreply.github.com>
#Pular linha

```
## Política de Remoção de Branches

A remoção será feita logo após um Pull Request revisado, aceito e já fundido na branch main, bastando acessar a lista de branches do repositório e certificar que a branch já está unida a *main*.

## Política de Pull Request

Para unir branches a main, devemos fazer um Pull Request, indicando sobre o que é, o que foi feito, revisores e qual issue(s) será cumprida através do Merge.

**Abra o PR interligando com a issue usando `Closes #NumIssue` ,indique os revisores e os assignees.**
**Para um PR mais completo, principalmente para features e hotfix, deve-se utilizar o template:**

```markdown
# Descrição

Por favor inclua o resumo das mudanças e a issue de referência. Também inclua motivação e contexto. Liste qualquer outra dependência que precise ser concluída para que este PR seja finalizado.

Fixes #(issue) <- para correções

Closes #(issue) <- para finalizações

## Tipo de mudança

Por favor remova as não relevantes!

- [ ] Bug fix (mudança que corrige alguma issue)
- [ ] Novo feature (mudança que adiciona nova funcionalidade)
- [ ] Breaking change (Mudança que pode alterar o funcionamento de algo implementado, inclusive quebrar/bugar)
- [ ] Se necessita de mudança na documentação (diagramas, docs, backlog...)

# Como foi testado?

Descreva os testes rodados. Coloque instruções para serem rodados pelos revisores. Coloque qualquer outro detalhe relevante.

- [ ] Teste A
- [ ] Teste B

# Checklist:

- [ ] Meu código segue os princípios do projeto.
- [ ] Revisei o meu código
- [ ] Comentei meu código muito bem, principalmente em partes difíceis de entender
- [ ] Fiz as mudanças necessárias na documentação para se adequar ao meu código.
- [ ] Minhas mudanças não geram Warnings para o compilador/editor.
- [ ] Realizei testes que comprovam o funcionamento da nova funcionalidade/fix.
- [ ] Testes unitários necessários/criados foram feitos e o código passou.
```



