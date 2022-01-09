# Capítulo 3 : Produto

## 3.1 Desenvolvimento
### 3.1.1 Documento openapi.yaml
O desenvolvimento desta API começou no Swagger Editor, usando como base o documento openapi.yaml do Laboratório OAS 04 realizado em aula. A primeira definição a ser feita foram os Components, prevenindo assim que o Swagger Editor lançasse erros constantemente. O passo seguinte no desenvolvimento do documento .yaml foram os caminhos e as suas respostas, sendo que os primeiros caminhos a serem definidos foram dos Recursos em si e os últimos foram os Recursos apresentados a partir de uma consulta/query. O último passo no desenvolvimento deste documento foi a definição dos exemplos para cada recurso. Aqui, cada recurso teve dois exemplos "formais" (com o mesmo aspeto que têm quando um pedido GET é efetuado) e um terceiro exemplo com um aspeto próprio para inserção ou atualização (Com chave estrangeira no exemplo).

### 3.1.2 Desenvolvimento e conexão a uma base de dados
Foi desenvolvida uma base de dados no MYSQL Workbench que contém uma tabela para cada recurso. Esta base de dados foi conectada à base de dados através do documento db.js, onde contém uma função responsável pela conexão da API à base de dados. Aqui contém também as credenciais de acesso como palavra passe, nome de utilizador, host e nome da base de dados. A fim da API poder guardar os dados no MySQL, foi necessário alterar todos os controllers, assegurando assim que os pedidos da API podiam ser traduzidos para comandos que o MySQL conseguisse compreender.

### 3.1.3 Docker
Com vista a API poder ser montada rapidamente, ignorando definições anteriores, a API e o servidor MySQL foram postos em containers Docker. Para estes containers conseguirem comunicar entre si, foi desenvolvido um dockercompose que cria as imagens, detalhando o seu espaço de trabalho e cria uma rede interna partilhada pelos dois contentores.
## 3.2 Instalação

## 3.3 Instruções de Utilização

## 3.4 Detalhes de Implementação

<br>

| [<<](capitulo1.md) | [<](capitulo2.md) | [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) | [4](capitulo4.md) | [>](capitulo4.md) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |