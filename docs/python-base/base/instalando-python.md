---
id: instalando-python
title: Instalando
tags:
  - instalando python
  - python
sidebar_position: 2
---

## Instalação

O caminho recomendado para instalação do Python é através do site oficial [Python.org](https://www.python.org/). Na
página de downloads, você pode obter o instalador para o seu sistema operacional. Para verificar a versão que está
instalada, use o comando:

```bash
python --version
```

É muito importante que a versão seja pelo menos 3.6 (ou maior).

Para enviar uma instrução (ou comando) para o Python, use o `-c`:

```bash
python -c "1 + 1"
```

No comando acima, o Python recebe a expressão `1 + 1`, interpreta e executa a operação matemática de adição, porém não
exibe nenhum output. Para ter a resposta na tela, precisamos usar a função `print`:

```bash
python -c "print(1 + 1)"
```

Output:

```
2
```

Outra maneira de se comunicar com o Python é através da execução de módulos com o `-m`. Para obter informações sobre os
caminhos de instalação do Python:

```bash
python -m site
```

`-m nome_do_modulo` executa um módulo que esteja instalado e habilitado para execução direta. Alguns exemplos
são `json`, `http.server`, `pip`, `site`.

E finalmente, para abrir o terminal interativo, use apenas `python`:

```bash
python
```

Prompt do Python:

```
>>>
```

O sinal `>>>` é o prompt do Python e significa que ele está à espera de um comando.

