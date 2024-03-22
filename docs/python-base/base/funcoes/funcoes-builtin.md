---
id: funcoes-builtin
title: Builtin
tags:
  - funcoes
  - builtin
  - python
sidebar_position: 1
---

Python vem com uma grande quantidade de funções úteis e estão divididas entre 
s `builtin` (embutidas) e as das `stdlib` (biblioteca padrão instalada junto 
com o Python)

# Funções builtin úteis

Python já vem com uma série de funções úteis 
https://docs.python.org/3/library/functions.html

### SUM

Obtém a soma dos elementos de um iterável contendo números

```python
>>> sum([1, 2, 3])
6
```

### MAX
Retorna o item com maior valor em uma sequência

```python
>>> max([1, 2, 3])
3
```

### MIN
Retorna o item com menor valor em uma sequência

```python
>>> min([1, 2, 3])
1
```

### LEN
Retorna o tamanho de uma sequência

```python
>>> len([1, 2, 3])
3
>>> len("Bruno")
5
```

### Reversed
Retorna uma sequência invertida

```python
>>> list(reversed([1, 2, 3]))
[3, 2, 1]
```

### Sorted
Retorna uma sequência ordenada alfabeticamente

```python
>>> list(sorted([9, 8, 1, 2, 3]))
[1, 2, 3, 8, 9]
```

### Filter
Aplica um filtro em uma sequência, sendo que o filtro é uma função que deve 
retornar True ou False

```python
>>> list(filter(str.isdigit, "Bruno987Rocha452"))
['9', '8', '7', '4', '5', '2']
```

### MAP
Aplica uma função de transformação em cima de uma sequência

```python
>>> list(map(str.upper, ["bruno", "rocha"]))
['BRUNO', 'ROCHA']
```

### All
Retorna True se todos os elementos da sequência forem avaliados para True

```python
>>> valores = [True, True, False]
>>> all(valores)
False
```
> **Atenção:** `all([])` é `True`

### Any
Retorna True se pelo menos um elemento da lista for avaliada para True

```python
>>> valores = [True, True, False]
>>> any(valores)
True
```

### Enumerate
Retorna um objeto iterável que fornece a numeração de itens de uma sequência

```python
>>> nomes = ["Bruno", "Joao", "Maria", "Sofia"]

>>> for num, nome in enumerate(nomes):
...     print(num, nome)
0 Bruno
1 Joao
2 Maria
3 Sofia

>>> for num, nome in enumerate(nomes, start=5):
...     print(num, nome)
5 Bruno
6 Joao
7 Maria
8 Sofia
```

### ZIP
Junta 2 sequências em pares

```python
>>> colunas = ["nome", "sobrenome"]
>>> dados = ["Bruno", "Rocha"]

>>> zip(colunas, dados)
Out[38]: <zip at 0x7fa4c570ba00>

>>> list(zip(colunas, dados))
[('nome', 'Bruno'), ('sobrenome', 'Rocha')]

>>> dict(zip(colunas, dados))
{'nome': 'Bruno', 'sobrenome': 'Rocha'}
``` 