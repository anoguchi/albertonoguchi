---
id: tipo-de-dado
title: Tipo
tags:
  - tipos de dados
  - python
sidebar_position: 1
---

### Tipo de dado

Todas as informações que usaremos durante a programação são representadas na
memória do computador através de um tipo de dado, você também vai ouvir os
termos classe ou categoria para se referir a mesma coisa.

O computador só entende sequencias de `0` e `1`, os binários, portanto quando
fazemos uma atribuição como `numero = 65` o Python precisa preparar o
espaço de memória necessário para armazenar o binário `1000001` e junto deste
valor armazenar a referência aos métodos e operações suportadas pelo número.

Você pode abrir um terminal Python agora ai e verificar:

```python
python3 -c "print(bin(65))"
'0b1000001'
```

Acontece que caso o nosso valor seja um texto como em `letra = "B"` o
valor `"B"`vai precisar ser armazenado também como uma sequência binária,
e você pode verificar no seu terminal Python.

```python
python -c "print(chr(66))"
B
```

e

```python
python3 -c "print(bin(66))"
0b1000010
```

No caso do texto o Python precisa armazenar a sequência binária `1000010` e
também junto deste valor armazenar a referência para a tabela de caracteres
onde na posição `66` teremos a letra `B`.

Para simplificar esse conceito, considere que a memória RAM é uma pasta
fichário de documentos:

E dentro deste fichário/arquivo em cada pasta ela possui:

- Uma posição (primeira, segunda, terceira)
- Uma etiqueta (identificador, variável)
- Um envelope contendo:
    - Instruções de como usar aquela informação
      A informação em sí

Em Python podemos representar esta analogia com:

```python
# Colocamos um valor no fichário usando a Atribuição
# aproveitamos para colocar uma etiqueta escrita o identificador "letra"
>>> letra = "B"

# Python teve que achar uma pasta vazia para armazenar nosso valor
# a função id() nos diz qual é número dessa posição
>>> id(letra)
139862029254896

# Python precisou colocar o valor "100010" dentro de um envelope
# neste envelope contém também instruções de como usar este valor para obter
# a letra "B".
# a função type() nos diz qual tipo de envelope foi usado
>>> type(letra)
str
```

Todos os objetos em Python são formados por essas 3 propriedades:

- valor `"1000010" ou "B"`
- tipo ou classe `str, int, float, ...`
- posição na memória `o número retornado pela função id()`

Por que usamos tipos de dados?
Para não precisar manipular os dados manualmente, por exemplo, não precisamos
nos preocupar com que cada letra de um texto é armazenada como um
número binário, usamos os tipos de dados definidos pelas classes para utilizar
abstrações que nos entreguem diretamente a letra "B" que queremos.

Também não precisamos nos preocupar com a posição da memória, para nós tanto
faz se o Python armazenou na primeira ou na última pasta da memória, o
importante na nossa camada de abstração é sabermos qual é a etiqueta colada lá,
e quando precisamos do valor usamos a etiqueta para encontrar, portanto, se
quisermos obter o "B" usamos a referência "letra".

```python
>>> print(letra)
B
```

Existem vários tipos de dados para representar uma infinidade de valores e
podemos também criar os nossos próprios tipos de dados.

Eles estão divididos em 2 categorias, os primários e os compostos.


















