export function heroWords() {
  const wordsBlcok = document.querySelector(".hero__animation__body");
  if (!wordsBlcok) return;

  let step = 1;
  setInterval(() => {
    step = step === 1 ? 2 : step === 2 ? 3 : 1;
    wordsBlcok.setAttribute("data-step", step);
  }, 2000);
}
