/*  CREATE = CRIA TABELA */
/*
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);
*/

/* INSERT => INSERE DADOS NA TABELA CRIADA */
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Diego Baena",
  "diegobaena@gmail.com",
  31
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Luis Silva",
  "luissilva@gmail.com",
  45
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Helena Lira",
  "lelenalira@gmail.com",
  27
);
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Caoline Almeida",
  "caalmeida80@gmail.com",
  41
);
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Wagner Augusto",
  "wagneraugusto1990@gmail.com",
  31
);

/* WHERE => CONSULTA DADOS NA TABELA */
SELECT * FROM usuarios WHERE idade > 40;
SELECT * FROM usuarios WHERE nome = "Diego Baena";

/* DELETE => DELETA REGISTRO DENTRO DE UMA TABELA */
DELETE FROM usuarios WHERE nome = "Luis Silva";

/* UPDATE => ATUALIZA A TABELA */
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Wagner Augusto";