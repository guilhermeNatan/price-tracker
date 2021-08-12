# Price Tracker 

Monitorar o preço de games na playstation store por meio de scrab.

![](./jogo%20justo2.PNG)
![](./jogo%20justo.PNG)


# Como executar projeto 

### Pré-requisitos 
* maven 3.6 ou superior configurado
* jdk 1.8.0_191



# Arquitetura
Toda entidade extends da classe BaseEntity, que possui os atribuitos id, version , createAt , lastUpdate,
sendo os dois  últimos utilizados para auditar os dados, futuramente pode ser incluindo
um atributo createdBy para relacionar o usuário que criou determinado registro. A configuração de auditoria
foi feita na classe AuditingConfig

### Pacotes

**entity:** Contêm todas as entidades utilizadas na modelagem do problema. Toda entidade
herda da classe BaseEntity esta que contêm atributos de auditoria,
além de id e versão de um registro, o atributo versao pode ser utilizado para fazer
tratramentos de acesso concorrente.

**factory**: Dentro do pacote factory foram implementados fábricas para criar instâncias de cada
entidade essas fábricas podem ser usadas tanto no contexto de teste de unidade
quando no contexto da aplicação.

**reuse.Util:** Classes utilitárias

**repository:** Contêm todos os repositórios estes que implementam as regras de acesso ao banco de dados

**service:** Contem todos os services  e implementam regras de negócio como por exemplo validações que envolvem
mais de uma entidade.

**controllers:** estão no pacote controller e implementa os endpoints de acesso, a lógica de regras
de negócio devem ser delegadas para algum service ou repository.

**exception:** Contêm as exceções customizadas.

**schedulers:** Contêm os jobs que serão executados de tempos em tempos como por exemplo o consumo da api de notícias.

**configuration:** Configurações do projeto.

## Executando os testes de unidade

Para executar a bateria de testes execute o seguinte comando dentro da raiz do projeto
```mvn test```


# Client-side 


## Estrutura de diretórios client

```
    ├── TemplateModule   
    ├── actions #actions 
    ├── layout
    │ ├── colors
    │ └── internal-layout
    │     └── components
    │         ├── Header
    │         ├── MLink
    │         └── Menu
    ├── pages
    │ ├── Login
    │     └── components
    │ └── Pesquisa
    │     └── components
    ├── reducers
    ├── resources
    │ └── css
    ├── router
    │   └── PrivateRoute
    ├── service
    └── theme
```

1. **TemplateModule:**

   Nesse diretório contêm a estrutura base utilizada pelos scripts para criação de páginas e componentes

1. **actions:**

   Actions utilizada pela aplicação

1. **layout:**

   Nesse diretório  é definido a estrutura base para cada layout.

   Aqui um layout é como um padrão de estrutura de estilo que a aplicação deve apresentar dado   um contexto que pode ser por exemplo layout da area de
   gestão, layout acesso público,  layout tela de login ,etc.

   3.1 **internal-layout:**

   Estrutura base de layout interno  após autenticação do usuário.

1. **pages**

   Telas da aplicação , uma tela deve ser quebrada em vários componetes menores
   que devem ficar dentro do diretóriio _componets_  localizado dentro de seu diretório.
   Uma tela deve concentrar a lógica de estado de seus componentes internos.

1. **reducers**

   Reducers da aplicação

1. **resources**

   Recursos como imagens, css styles.

1. **router**

   Componte de rotas da aplicação, aquisão registradas as páginas para que possam
   ser acessadas via rota    exemplo se a página X deve ser acessada pela url
   localhost:8080/X  ela deve ser registrada nesse componente .

1. **service**

   Services devem implementar a lógica de acesso aos endpoints.

1. **theme**

   Definições do thema da aplicação  , como cores primárias, tamanho de fontes, etc.


### Scripts para criação de componentes

* **build_component.sh**

  Cria estrutura base de componente dentro de uma página

* **build_module.sh**

  Cria estrutura base de página dentro do diretório pages.



# Tecnologias utilizadas
- Framework Backend: Spring boot
- Framework Frontend: ReactJs
- Banco de dados: H2  (https://www.h2database.com/html/main.html)
- Continuous Integrations: Docker - Github actions - Junit
- IDE:  Intellij IDEA 
- Teste da API rest: Postman  (https://www.postman.com/)
- Teste de unidade: Junit  
- Gerenciador de dependência: Maven 3.6  (https://maven.apache.org/)

