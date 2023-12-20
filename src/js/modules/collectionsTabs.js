export function collectionsTabs(imagesLoaded) {
  const triggers = document.querySelectorAll(".collections__nav-button");
  const tabs = document.querySelectorAll(".collections__list");
  const container = document.querySelector(".collections__list-container");
  if (!triggers.length) return;

  const adjustHeight = (list) => {
    const height = list.scrollHeight;
    container.style.height = height + "px";
  };

  triggers.forEach((el) => {
    el.addEventListener("click", (e) => {
      const type = e.target.dataset.view;
      const targetList = document.querySelector(
        `.collections__list[data-type=${type}]`
      );

      adjustHeight(targetList);

      triggers.forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");

      tabs.forEach((el) => {
        el.classList.remove("fade-in");
        el.classList.add("fade-out");
      });

      targetList.classList.remove("fade-out");
      targetList.classList.add("fade-in");
    });
  });

  imagesLoaded(container, () => triggers[0].click());
}
