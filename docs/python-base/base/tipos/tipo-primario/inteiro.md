---
id: tipo-inteiro
title: Tipo Inteiro
tags:
  - protocolos
  - tipos primários
  - tipos de dados
  - inteiro
  - python
sidebar_position: 1
---

### Inteiro

O tipo usado para armazenar os números inteiros em Python é representado pela
classe `int`. Em Python, nós não precisamos declarar qual o tipo de dado a ser
usado, pois o Python faz a inferência de tipos dinamicamente. O interpretador
primeiro verifica como o valor se parece e então decide por conta própria qual
a classe a ser utilizada. Abaixo, exemplos de uso de `int`:

```python
# a idade de uma pessoa
idade = 25

# o código de um produto
codigo_produto = 4587

# quantidade de itens
quantidade = 3
```

Em qualquer um dos casos acima, o Python irá armazenar como `int`, e você pode
usar a função `type` para verificar:

```python
>>> type(idade)
int
```

Você até pode, se desejar, forçar o tipo de dado explicitamente, mas isso é
considerado redundante:

```python
idade = int(25)  # isso funciona, mas é redundante
```

`idade` é um identificador que faz referência ao valor 25 e nós podemos fazer
uma variedade de operações com este valor. Essas operações fazem parte do que
chamamos Protocolo do objeto, e quem define os protocolos que o objeto
implementa é a classe `int`.

Você pode, no seu terminal, verificar todos os protocolos que o `int`
implementa.

Verificando quais comportamentos estão no protocolo de um tipo de dado.
Verificando quais comportamentos estão no protocolo de um tipo de dado.

```python
>>> dir(int)
# atributos especiais da classse int
['__abs__',
 '__add__',
 '__and__',
 '__bool__',
 '__ceil__',
 '__class__',
 '__delattr__',
 '__dir__',
 '__divmod__',
 '__doc__',
 '__eq__',
 '__float__',
 '__floor__',
 '__floordiv__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__getnewargs__',
 '__gt__',
 '__hash__',
 '__index__',
 '__init__',
 '__init_subclass__',
 '__int__',
 '__invert__',
 '__le__',
 '__lshift__',
 '__lt__',
 '__mod__',
 '__mul__',
 '__ne__',
 '__neg__',
 '__new__',
 '__or__',
 '__pos__',
 '__pow__',
 '__radd__',
 '__rand__',
 '__rdivmod__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__rfloordiv__',
 '__rlshift__',
 '__rmod__',
 '__rmul__',
 '__ror__',
 '__round__',
 '__rpow__',
 '__rrshift__',
 '__rshift__',
 '__rsub__',
 '__rtruediv__',
 '__rxor__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__sub__',
 '__subclasshook__',
 '__truediv__',
 '__trunc__',
 '__xor__',
 
 # daqui para baixo estão atributos públicos que podemos usar diretamente
 'as_integer_ratio',
 'bit_count',
 'bit_length',
 'conjugate',
 'denominator',
 'from_bytes',
 'imag',
 'numerator',
 'real',
 'to_bytes']
```

A lista acima exibe os nomes de todos os atributos dos objetos armazenados com
a classe `int`. Tudo o que começa com `__` e termina com `__` são chamados de
métodos
dunder e são atributos especiais do modelo de dados do Python. Não precisamos
usar esses atributos diretamente em nosso código (apesar de às vezes eles serem
úteis). Normalmente, utilizamos abstrações que por baixo dos panos farão a
chamada para esses métodos.
Neste momento, não vamos falar de todos eles, pois são muitos, e a ideia é que
aos poucos você vá entendendo conforme utiliza. Mas vamos explorar um exemplo
simples e que provavelmente usaremos sempre.

**Protocolo Addible**

Um dos métodos ali na lista retornada pelo `dir(int)` é chamado `__add__` (
Dunder Add). Add em português significa adicionar e todo objeto em Python
que possui este método `__add__` nós chamamos de um objeto Addible. Isso
significa que com este objeto podemos efetuar operações de adição, ou seja,
podemos somar um número a outro.

Exemplo:

```python
preco = 10
imposto = 2
total = preco + imposto
```

No exemplo acima, fizemos uma operação de soma utilizando 2 objetos
inteiros `preco` e `imposto`, e para efetuar a operação usamos o operador `+`,
que é exatamente o que aprendemos nas aulas de matemática básica na escola.

Acontece que por debaixo dos panos, o Python ao
interpretar `total = preco + imposto` vai, na verdade, efetuar outra operação,
ele vai fazer:

```python
total = preco.__add__(imposto)
```

O operador `+` é um símbolo que faz o Python invocar o método `__add__` no
objeto que está do lado esquerdo de uma expressão.

**IMPORTANTE:** No dia a dia, nós usamos apenas os operadores da forma
abstraída. Por exemplo: `1 + 1`, `10 - 8`, `5 * 4`, etc. Porém, é importante
você saber como isso é implementado pelo Python, pois através de uma lista de
atributos você conseguirá determinar o que aquele objeto suporta de
operações. Todos os outros comportamentos que esperamos de um número inteiro
também estarão implementados naquela lista, alguns exemplos:

- A operação `preco - desconto` internamente é `preco.__sub__(desconto)`.
- `preco * quantidade` é `preco.__mul__(quantidade)`.
- `preco / parcelas` é `preco.__div__(parcelas)`.

Essas são as 4 operações matemáticas básicas, mas para todos os outros
operadores como potenciação `**` -> `__pow__`, módulo `%` -> `__mod__`, terá
sempre um desses métodos dunder especiais.

E não apenas para operações matemáticas, essa lógica vai seguir para qualquer
outra expressão do Python, será muito comum nós fazermos comparações como
fizemos no nosso script `hello.py`:

```python
if current_language == "pt_BR":
    msg = "Hello, World!"
```

A parte `current_language == "pt_BR"` irá invocar o protocolo `Comparable` que
faz com que o objeto possa ser comparado com outro e o método Dunder que
implementa essa funcionalidade é o `__eq__`. Pode testar com:

```python
>>> idade = 25
# Comparando por igualdade
>>> idade == 25
True
# O mesmo resultado
>>> idade.__eq__(25)
True
```

**IMPORTANTE:** Lembre-se que não usamos o `.__eq__` diretamente, quem faz isso
para nós é o interpretador quando ele encontra o sinal de `==`. Teremos um
método dunder similar ao `__eq__` no objeto para todos os outros operadores de
comparação, como por
exemplo `>` -> `__gt__`, `<` -> `__lt__`, `>=` -> `__ge__`, `<=` -> `__le__` e
assim por diante.

Esta mesma lógica vai ser usada para todos os outros tipos de dados em Python.


















