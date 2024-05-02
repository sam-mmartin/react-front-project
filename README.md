# Project Frontend React-NextJS

## Projeto frontend do site em React utilizando NextJS

### Pré-requisitos

Antes de começar você vai precisar ter instalado na sua máquina
as seguinte ferramentas:

- [Git](https://git-scm.com)
- [Docker](https://docker.com)
- [VS Code](https://code.visualstudio.com/)
- [wsl2](https://learn.microsoft.com/pt-br/windows/wsl/install)

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
> - **--rm** apaga containers antigos
>
> **--volume "/home/your_user/react-project:/app"** realiza um link entre a pasta local do projeto com a pasta da aplicação dentro do container.
> <br> **--workdir "/app"** diretório inicial quando o container é iniciado.
> <br> **--publish 3000:3000** mapeia a porta 3000 do host para a porta 3000 do aplicativo.
> <br> **-it** link entre o terminal do computador com o output do container
