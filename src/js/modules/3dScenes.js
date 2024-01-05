export function objectScenes() {
  const scenes = document.querySelectorAll(".active-collections__item");
  if (!scenes) return;
  scenes.forEach((scene) => {
    const sceneTitle = scene.dataset.scene;
    const sceneContainer = scene.querySelector(".active-collections__scene");
    const controls = scene.querySelectorAll(".active-collections__control");
    const imageNode = scene.querySelector(".imageNode");
    imageNode.onload = () => sceneContainer.classList.remove("loading");

    controls.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        controls.forEach((el) => el.classList.remove("active"));
        trigger.classList.add("active");
        const colorIndex = trigger.dataset.color;
        sceneContainer.classList.add("loading");
        imageNode.setAttribute(
          "src",
          `/img/home/activeCollections/${sceneTitle}/${colorIndex}.${sceneTitle === 'skittles' ? 'png' : 'jpg'}`
        );
      });
    });
    controls[0].click();
  });
}
