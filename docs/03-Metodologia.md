
# Metodologia

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Seguido do numero da task referente à esta versão. Exemplo:
`dev/task/03`
`test/task/13`

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

esta informação deve necessariamente ser inclusa nos commites entre chaves. Exemplo:
`git commit -m "[bug] test/task/11 correção do bug"`
`git commit -m "[feature] test/task/15 criação da nova funcionalidade"`