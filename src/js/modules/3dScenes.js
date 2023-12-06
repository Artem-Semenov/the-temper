export function objectScenes() {
  const scenes = document.querySelectorAll(".active-collections__item");
  if (!scenes) return;
  scenes.forEach((scene) => {
    const sceneIndex = scene.dataset.scene;
    const sceneContainer = scene.querySelector(".active-collections__scene");
    const controls = scene.querySelectorAll(".active-collections__control");

    controls.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        controls.forEach((el) => el.classList.remove("active"));
        trigger.classList.add("active");
        const color = trigger.dataset.color;
        console.log({
          sceneIndex,
          color,
          sceneContainer,
        });
      });
    });
  });
}
