---
id: variaveis-ambiente-python
title: Variáveis de ambiente
tags:
  - variaveis
  - ambiente
  - python
sidebar_position: 3
---

# Usando variáveis de ambiente

## Docstring e metadados dunder

Em todo script Python é uma boa prática incluir um comentário de multi linhas
logo nas primeiras linhas do script explicando o objetivo do script e provendo
documentação para o usuário.

```python
#!/usr/bin/env python3
"""Hello World Multi Linguas.


Dependendo da lingua configurada no ambiente o programa exibe a mensagem 
correspondente.


Como usar:


Tenha a variável LANG devidamente configurada ex:


    export LANG=pt_BR


Execução:


    python3 hello.py
    ou
    ./hello.py
"""
__version__ = "0.0.1"
__author__ = "Bruno Rocha"
__license__ = "Unlicense"
```

E além do comentário de documentação, chamado DocString é também comum a
inclusão de variavéis de metadados que inician e terminam com 2 underlines __ a
palavra que usamos para designar essas variavéis é Dunder portanto, Dunder
version se refere a __version__.

## Variavéis de Ambiente

Ambiente é o termo que usamos para referir ao local onde o programa é
executado, o ambiente em termos gerais é formado por um shell que em termos bem
simplificados pode ser entendido como um local isolado onde o seu programa
executa.

Neste ambiente existem variavéis que servem para configurar o comportamento do
próprio ambiente, do sistema e dos programas que rodam.

No linux ao digitar env no terminal você verá uma lista de todas as variáveis
do ambiente, ali por exemplo está o nome do usuário em USER e a linguagem em
que o sistema operacional está configurado LANG.

Podemos dentro do Python acessar essas variáveis de ambiente atráves do módulo
os.

```python
import os


os.environ  # um dicionário Python contendo as variavéis e seus valores


os.getenv("LANG")  # função usada para buscar o valor de uma variável especifica.
```

## Obtendo uma parte de um texto (substring)

Em nosso primeiro programa irá ler a variável de ambiente LANG e apartir dela
decidir qual mensagem de Hello World imprimir na tela, portanto se for pt_BR
imprimimos Olá, Mundo! se for it_IT será Ciao, Mondo! e assim por diante.

O problema é que o comando os.getenv("LANG") vai retornar algo como en_US.utf8
e nós queremos apenas a primeira parte antes do ., nesse caso queremos en_US
ignorando a parte .utf8 e existem algumas formas de obter isso em Python.

```python
# Variável completa
>>> os.getenv("LANG")
'en_US.utf8'


# Apenas os 5 primeiros caractered
>>> os.getenv("LANG")[:5]
'en_US'


# Com um valor default em caso da variável não existir
>>> os.getenv("LANG", "en_US")[:5]
'en_US'


# Através do aplit do texto
>>> os.getenv("LANG", "en_US").split(".")[0]
'en_US'
```

Em nosso programa vamos por enquanto escolher a versão:

```python
>>> os.getenv("LANG", "en_US")[:5]
```





