---
id: linguagens-de-programação
title: Linguagens de Programação
tags:
  - programming
sidebar_position: 2
---

# Linguagens de Programação

### O computador e as linguagens

O computador, ou qualquer unidade computacional (um celular, um chip etc) é um
dispositivo eletrônico digital que por sua natureza só entende informações em
formato binário, o formato binário é um esquema lógico onde as informações são
formadas por sequencias de `0` e `1` encadeadas, cada um desses dígitos é chamado
de `bit` e a sequencia de `8` deles é chamada de `Byte` ex: `10010100` portanto para
enviar qualquer tipo de instrução ao computador precisamos colocar os bits na ordem
desejada e essa é uma tarefa humanamente bem difícil.

Por exemplo, toda vez que você pressiona a tecla `A` em seu teclado os componentes do
teclado precisam enviar a mensagem `1000001` (7 bits) para o computador que
internamente passa essa mensagem ao sistema operacional (windows, Linux, mac,
android etc) e converte essa sequencia em um número decimal, neste caso é o `65`
e a partir deste número o sistema operacional consegue ir até uma tabela de
caracteres e consultar a letra que está presente na posição `65` que neste caso
é o `A` e só então o `A` pode ser usado por exemplo para ser mostrado em sua tela.

![1 byte = 8 bits](../static/img/bit-byte.webp)

Por isso que existem as linguagens de abstração para programação, todas as
linguagens de programação tem por objetivo abstrair a necessidade de fazer
esses cálculos binários e trazer as instruções para uma camada mais próxima do ser
humano e mais longe da máquina.

Por isso classificamos as linguagens de programação entre as de **"Baixo Nível"** que
são aquelas que diretamente convertem suas instruções para o código binário e
muitas vezes tem uma sintaxe de escrita mais difícil e menos natural.

E as de **"Alto Nível"** que oferecem formas mais simples, em linguagem natural, com
palavras normais da lingua inglesa, porém entre o programa e o código binário
final existem uma série de camadas de abstração.

Tudo dentro da programação gira em torno da **entrada e saída de dados(input e output).**

![input output](../static/img/input-output.png)

### Programa

Um programa é um conjunto de instruções colocados de forma organizada em um ou mais arquivos
e que podem ser executados várias vezes obtendo os mesmos resultados.

Existem 2 categorias de programas, os programas **interpretados** e os **compilados.**

Os compilados exigem que toda as linhas de código sejam avaliadas e validadas
antes do programa executável ser gerado já na linguagem de máquina `(0,1..)` e
no momento da execução o programa está todo pronto para rodar.

Os programas interpretados são aqueles que podem ser escritos em arquivos mas
são avaliados linha a linha, bloco a bloco, sem a necessidade de o programa
inteiro estar avaliado, cada instrução é lida e logo em seguida interpretada
e executada, este tipo de programação é mais fácil e mais dinâmica, mas pode ser
também mais suscetível a erros.

![1 byte = 8 bits](../static/img/difference-between-compiler-and-interpreter.png)
