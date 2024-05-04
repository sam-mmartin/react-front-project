# Project Frontend React-NextJS

## Projeto frontend do site em React

### Pré-requisitos

Antes de começar você vai precisar ter instalado na sua máquina
as seguinte ferramentas:

-   [Git](https://git-scm.com)
-   [Docker](https://docker.com)
-   [VS Code](https://code.visualstudio.com/)
-   [wsl2](https://learn.microsoft.com/pt-br/windows/wsl/install)

### Criando a imagem base

Primeiramente devemos criar uma página para o projeto em nosso ambiente. No meu caso criei a pasta **react-project**.

```bash
$ mkdir react-project
# Acessamos a pasta
$ cd react-project
# Execute o seguinte comando
$ docker run --rm --volume "/home/your_user/react-project:/app" --workdir "/app"
$ --publish 3000:3000 -it node:22 bash
```

Com este comando nós iremos executar um container baseado na imagem node:22, e nos conectaremos neste container via terminal.

Sobre os parâmetros do comando:

> [!NOTE]
>
> `--rm` apaga containers antigos
>
> `--volume "/home/your_user/react-project:/app"` realiza um link entre a pasta local do projeto com a pasta da aplicação dentro do container.
>
> `--workdir "/app"` diretório inicial quando o container é iniciado.
>
> `--publish 3000:3000` mapeia a porta 3000 do host para a porta 3000 do aplicativo.
>
> `-it` link entre o terminal do computador com o output do container

Agora que estamos conectado ao container, podemos inicilizar o projeto.

```bash
$ npm init -y
```

Agora vamos instalar o react e next

```bash
$ npm install next@latest react@latest react-dom@latest
```

> [!IMPORTANT]
>
> Aqui há algo muito importante de mencionar. As instalações que você faz quando está conectado ao container serão perdidas quando o container for reiniciado.
>
> Porém as instalações feitas aqui são compartilhadas com o ambiente local. Ou seja, tudo que for criado dentro do container não será perdido.

Antes de iniciar o desenvolvimento, precisamos nos atentar que vários arquivos foram criados por dentro do container e talvez tenhamos que alterar o Owner das pastas e arquivos.

Vamos executar este comando no ambiente local:

```bash
$ sudo chown -R <USERNAME> /home/your_user/react-project/
```

Agora podemos criar nossa imagem base executando os comandos a seguir:

```bash
$ docker build -t <NOME_DA_IMAGEM> .
# Agora podemos executar o container com nosso projeto
$ docker run -dp 3000:3000 <NOME_DA_IMAGEM>
```

> [!NOTE]
>
> `-dp` executa o container em segundo plano, mapeia a porta 3000 do host para a porta 3000 do aplicativo.
