# Especificações do Projeto



## Personas

#### Persona 1:

   Guilherme tem 21 anos, trabalha na area de TI e esta cursando Sistemas de Informação. É 
jogador profissional de CS ha 5 anos, possui uma agenda apertada. Ele costuma fazer lives jogando CS sempre que possivel, e isso é cada vez mais raro. As vezes 2 ou 3 vezes na semana, no maximo.   

#### Persona 2:

   Arthur com 29 anos, trabalha com marketing digital e devido a pandemia acabou tendo uma 
uma rotina de vida mais lenta, agora anda procurando uma maneira mais 
simples de possuir uma renda em casa enquanto joga seus jogos favoritos.

#### Persona 3:

   Cristiane com 23 anos formada na universidade UNA, recem chegada no mercado de 
trabalho ainda não possui investimento/renda suficiente para se manter. Por isso, ainda vive com os pais em um bairro de Belo Horizonte. Cristiane costuma jogar free fire com seus amigos sempre que possivel, e sempre que possivel abre sua live "free funny" por ser muito divertido jogar com seus amigos!

## Histórias de Usuários
Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                                    |PARA ... `MOTIVO/VALOR`                    |
|--------------------|---------------------------------------------------------------------------------------|-------------------------------------------|
|Streamer  | Me cadastrar no sistema | me conectar com novos patrocinadores |
|Streamer  | Linkar em minha live o conteudo do patrocinador | promover views para suas ads |
|Streamer  | Receber a renda gerada pelo serviço prestado | adquirir renda por meio disto |
|Streamer  | Atualizar minhas informações sempre que possivel | manter meu cadastro atual |
|Streamer  | Filtrar anuncios que serão exibidos em minha live | manter o meu publico em contato com o que realmente importa pra eles |
|Sponsor   | Me cadastrar no sistema | me conectar com streamers divulgadores |
|Sponsor   | CRUD dos meus anuncios | manter os anuncios atualizados na plataforma |
|Sponsor   | Definir quando o anuncio será exibido | me conectar com novos patrocinadores |
|Sponsor   | Filtrar streamers que exibirão os anuncios | me conectar com novos patrocinadores |

## Requisitos
A partir das estórias dos usuarios, identificou-se os requisitos funcionais e não funcionais abaixo descritos.
### Requisitos Funcionais
|ID| REQUISITO|PRIORIDADE|
| RF-01 |Permitir o CRUD de streamers |ALTA|
| RF-02 |Permitir o CRUD de sponsors |ALTA|
| RF-03 |Permitir o CRUD de administradores |ALTA|
| RF-04 |Permitir que o streamer defina seu publico alvo |ALTA|
| RF-05 |Permitir que o sponsors defina o publico alvo desejado |ALTA|
| RF-06 |Permitir que o streamer gere relatorios de propagandas exibidas |ALTA|
| RF-07 |Permitir que o sponsor gere relatorios de propagandas exibidas |ALTA|
| RF-08 |Permitir ao sponsor o CRUD de suas Ads |ALTA|
| RF-09 |Permitir ao administrador o CRUD de todas as Ads |ALTA|
| RF-10 |Permitir o CRUD de streamers por meio de redes sociais (Tiwtch) |BAIXA|


### Requisitos não Funcionais
|ID| REQUISITO|PRIORIDADE|
| RNF-01 |Deve processar requisições do usuário em no máximo 3s |MÉDIA|
| RNF-02 |O sistema deve prover ao usuário as funcionalidades da maneira mais usual possível permitindo que sejam necessárias poucas interações para atingir o objetivo. |ALTA|
| RNF-03 |O usuário deve ser capaz de acessar o sistema através das plataformas e navagadores compatíveis de acordo com informações disponibilizadas no site. |ALTA|
| RNF-04 |O sistema deverá registrar logs afim registrar eventos e tratar eventuais falhas. |BAIXA|
| RNF-05 |O banco de dados utilizado deverá ser o MongoDB. |ALTA|
| RNF-06 |s informações sensíveis dos dados dos usuários devem ser mantidos em sigilo e tratados de acordo com a LGPD (Lei de acessso e proteção de dados pessoais) permitindo o acesso apenas as informações necessáras inerentes as consultas. |ALTA|

## Restrições
|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não deverá ser desenvolvido uma aplicação mobile        |
