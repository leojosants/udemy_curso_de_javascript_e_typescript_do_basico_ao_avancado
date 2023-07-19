/* function exemplo_01() {

  type TemNome = { nome: string };
  type TemSobreNome = { sobrennome: string };
  type TemIdade = { idade: number };
  type Pessoa = TemNome & TemSobreNome & TemIdade;

  const pessoa: Pessoa = {
    nome: 'Leonardo',
    sobrennome: 'Santos',
    idade: 39,
  };

  console.log(pessoa);

  exemplo_01();
};
*/


function exemplo_02() {

  type AB = 'A' | 'B';
  type AC = 'A' | 'C';
  type AD = 'A' | 'D';
  type Intersecao = AB & AC & AD;

};
exemplo_02();