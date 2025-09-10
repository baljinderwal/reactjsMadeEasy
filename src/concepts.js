const concepts = [
  {
    path: "jsx-basics",
    title: "JSX Basics",
    component: JsxBasics,
  },
  // Future concepts will be added here
];

// We need a way to easily look up a component by its path
const conceptMap = concepts.reduce((map, concept) => {
  map[concept.path] = concept;
  return map;
}, {});
