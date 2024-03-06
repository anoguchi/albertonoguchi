---
id: primeiro-script-python
title: Primeiro script
tags:
  - primeiro script
  - python
  - hello world
sidebar_position: 3
---

# Primeiro script em Python

Obrigatoriamente, seu primeiro script deve ser um programa que imprime na tela a frase "Hello, World!"

Um script nada mais é do que o conjunto de comandos que enviamos individualmente ao interpretador mas de uma forma
organizada em um único arquivo.

Da mesma forma que é possível executar:

```bash
python -c "print('Hello, World!')"
python -c "print(1 + 1)"
```

Você pode criar um arquivo e colocar os comandos em sequência, linha a linha dentro dele.

Utilize o editor de sua preferência para criar um arquivo:

```bash
micro hello.py
```

Com o editor aberto, coloque o conteúdo do seu script:

```python
print("Hello, World!")
```

Salve o script (ctrl + S na maioria dos editores) e em outro terminal execute:

```bash
python3 hello.py
```

Saída:

```
Hello, World!
```

Repare que usamos `python3` para ser específico em relação à versão do Python utilizada para executar.

### Comentários no código

Em Python é possível adicionar partes do código que serão ignoradas pelo interpretador. Essas linhas são úteis para
adicionar comentários, lembretes e metadados do programa.

Exemplos:

```python
# Comentário de linha

print("Hello")  # Comentário de final de linha

"""
comentário 
multi
linhas
"""
```

As linhas iniciadas em `#` são ignoradas pelo Python, assim como tudo que estiver após `#` em uma linha de código e
também todo o conteúdo dentro de `"""`.

### Ambiente

Muitas coisas estão atreladas ao ambiente. O ambiente muda se você está no terminal, servidor
da amazon ou esteira de testes. Sempre estamos consumindo as variáveis de ambiente para tomar
decisões dentro do nosso programa.

### Shebang

Em ambientes Linux, é muito importante definir o comentário especial Shebang, nele especificamos qual interpretador será
usado para executar o programa:

```bash
#!/usr/bin/env python3

print("Hello, World!")
```

A primeira linha informa o terminal que aquele programa roda com o Python3 da env em execução. Esta forma é possível
omitir o interpretador e executar o script diretamente pelo seu nome.

```bash
# Primeiro damos permissão de execução ao script
chmod +x hello.py
```

Agora podemos executar de duas formas:

```bash
# Especificando o interpretador na linha de comando
python3 hello.py

# Usando o interpretador especificado na linha `#!/usr/bin/env python`
./hello.py
```

A vantagem da segunda forma é que podemos mudar a extensão de `.py` para `.exe`, por exemplo, ou podemos até remover a
extensão e executar `./hello`.


