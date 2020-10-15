export default function selectionFilter({ coding, fitness }) {
  return {
    coding: [
      {
        title: "Javascript",
        data: coding.filter((item) => item.genre === "javascript"),
      },
      {
        title: "Python",
        data: coding.filter((item) => item.genre === "python"),
      },
      {
        title: "App Dev",
        data: coding.filter((item) => item.genre === "appdev"),
      },
      {
        title: "Ruby on Rails",
        data: coding.filter((item) => item.genre === "ruby"),
      },
      {
        title: "Java",
        data: coding.filter((item) => item.genre === "java"),
      },
    ],

    fitness: [
      {
        title: "Yoga",
        data: fitness.filter((item) => item.genre === "yoga"),
      },
      {
        title: "Weightlifting",
        data: fitness.filter((item) => item.genre === "weightlifting"),
      },
      {
        title: "Crossfit",
        data: fitness.filter((item) => item.genre === "crossfit"),
      },
      {
        title: "Pilates",
        data: fitness.filter((item) => item.genre === "pilates"),
      },
      {
        title: "Zumba",
        data: fitness.filter((item) => item.genre === "zumba"),
      },
    ],
  };
}
