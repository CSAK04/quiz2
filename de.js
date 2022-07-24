quiz = [
  {Q:"Four identical particles of equal masses 1kg made to move along the circumference of a circle of radius 1 m under the action of their own mutual gravitational attraction. The speed of each particle will be",
   A: "HLLO",
   B: "HAI",
   C: "FFG",
   D: "FGT",
   ans: A,
  },
]

quizno = 0
const answers= document.querySelectorAll(".answer")/*name*/
const submitbtn = document.getElementById("submit")
const q = document.getElementById('q11')
const a_opt = document.getElementById("a_text")
const b_opt = document.getElementById("b_text")
const c_opt = document.getElementById("c_text")
const d_opt = document.getElementById("d_text")

/* for deselecting */
const deselect = () => {
  answers.forEach((ans) => (ans.checked=false));
};

/* for selecting answers */
const select = () => {
  let answer;
  answers.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  const aquiz = quiz[quizno];
  a_opt.innerText = aquiz.A;
  b_opt.innerText = aquiz.B;
  c_opt.innerText = aquiz.C;
  d_opt.innerText = aquiz.D;
};

loadQuiz();

submitbtn.addEventListener('click',() => {
  const answer= select();
  console.log(answer);
  if(answer){
    if(answer==quiz[quizno].ans){
          q.innerHTML = `
          <h2>THE ANSWER IS RIGHT</h2>
          <button onclick="history.go(0)">PLAY AGAIN</button>
          `;
    }else{
       q.innerHTML =`
       <h2>THE ANSWER IS WRONG</h2>
       <button onclick="history.go(0)">PLAY AGAIN</button>
       `;
    }
   }
});
