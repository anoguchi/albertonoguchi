---
id: lista
title: Lista
tags:
  - tipos compostos
  - tipos de dados
  - lista
  - python
sidebar_position: 2
---

# Listas

Listas são bastante similares às tuplas e a maioria das operações que podemos
fazer com tuplas também podemos fazer com as listas. Uma das grandes diferenças
está na implementação de protocolos de edição dos elementos, portanto as listas
são mutáveis e permitem que incluamos novos itens, permitem a remoção de itens
existentes e a reordenação.

As listas são criadas usando os literais `[ ]` ou a chamada para a 
classe `list`.

Criando uma lista vazia

```python
colors = []  # forma preferida
# ou
colors = list()
```

Adicionando elementos ao final da lista

```python
colors.append("green")
```

Adicionando elementos ao início da lista

```python
colors.insert(0, "red")
```

Adicionando em uma posição específica

```python
colors.insert(2, "blue")
```

Obtendo o tamanho da lista

```python
len(colors)
```

Acessando elementos via índice

```python
button_color = colors[0]
```

Desempacotamento (igual às tuplas)

```python
red, green, blue = colors
```

E também é possível já iniciar uma lista com valores.

```python
colors = ["red", "green", "blue"]
colors[0]  # "red"
```

Podemos somar 2 listas (criando uma nova lista como resultado)

```python
nova_lista = colors + ["yellow"]
print(nova_lista)  # ["red", "green", "blue", "yellow"]
```

E podemos estender uma lista in-place

```python
colors.extend(["purple"])
print(colors)  # ["red", "green", "blue", "purple"]

# Ou usando um operador de acréscimo
colors += ["purple"]
print(colors)  # ["red", "green", "blue", "purple"]
```

Remover elementos

```python
colors.remove("purple")
# ou
colors.pop()
```

Contar elementos

```python
colors.count("green")  # 1
```




    