# Project Frontend React-NextJS

## Projeto frontend do site em React utilizando NextJS

### Pré-requisitos

Antes de começar você vai precisar ter instalado na sua máquina
as seguinte ferramentas:

- [Git](https://git-scm.com)
- [Docker](https://docker.com)
- [VsCode](https://code.visualstudio.com/)
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
