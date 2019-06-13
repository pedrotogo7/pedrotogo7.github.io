#Tipos de dados
a = None
if a is None:
print("Nada!")

b = list(i fir i in range(5))
if not (b is None):
    print(b)

    lista = [2,3,4,5]
    a = tuple()
    tupla = (2,3,4,5)
print(lista, tupla)

dic = dict() #Dicionário vazio
dic = {
    'zero' : 0,
    'um' : 1,
    'dois' : 2,
    'três' : 3,
}
print(dic['dois'])
msg = 'Custa dois reais'
novamsg = []
for palavra in msg.split():
    if palavra in dic.keys():
         novamsg.append(palavra)
    else:
        novamsg.append(palavra)
novamsg = ' ',join(novamsg)
print(novamsg)

dic = {
    "I'm" : "Eu sou",
    "green" : "verde",
    "apple" : "maçã",
    "eating" : "comendo",
}
msg = "I'm eating a green apple"
traducao = []
for palavra in msg.split():
    if palavra in dic.keys():
        traducaoo.append(dic[palavra])
    else:
        traducao.append(palavra)
        print(' '.join(traducao))

#Funções
def imprime(x):
    """
    x: Qualquer coisa
    """
    
    print(x)
    
imprime(2)
imprime('Olá mundo!')
imprime(dic)
imprime((2,3))
imprime(None)
imprime([True, False])


def distancia(a,b):
    return ((a[0] - b[0])**2 + a[1] - b[1]**2**0.5))

imprime(distancia)
imprime(distancia((0,0),(3,4)))
imprime(distancia([0,0],[3,4]))
imprime(distancia((0,0),{2,3,4,5,7,8,9,3,4]))


def divisaoInteira(x,y):
    return x//y, x%y, x > y, y == 0

    #Quociente, resto = divisaoInteria(15, 8)
    quociente,_, _, denominadorZero = divisaoInteira(15, 8)
    _, resto, maiorque1, _ = divisaoInteria(15, 8)
    print('Quociente: ', quociente, 'Resto:', resto)
    print('>1: ', maiorque1, '/0:', denominadorZero)


def mapear(funcao, lista):
    return list(funcao(elemento) for elemneot in lista)

    def quadrado(x):
        return x**2

    def raiz(x):
        return x**0.5

lista = list(i for i in range(11))
print(lista)
print(mapear(quadrado, lista))
print(mapear(raiz, lista))


