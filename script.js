let studentList = [
  {
    nameOfStudent: "Raul",
    firstGrade: 6,
    secondGrade: 7,
  },

  {
    nameOfStudent: "Renan",
    firstGrade: 1,
    secondGrade: 5,
  },

  {
    nameOfStudent: "Larissa",
    firstGrade: 9,
    secondGrade: 2,
  },

  {
    nameOfStudent: "Thayla",
    firstGrade: 8,
    secondGrade: 9,
  },

]

function calculaMedia(firstGrade, secondGrade) {
  let media = (firstGrade + secondGrade) / 2;
  return media;
}

for (let student of studentList) {
  let mediaIndividual = calculaMedia(student.firstGrade, student.secondGrade);
  let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação';

alert(`A média de ${student.nameOfStudent} é ${mediaIndividual}.
  ${aprovadoOuNao}`);
}