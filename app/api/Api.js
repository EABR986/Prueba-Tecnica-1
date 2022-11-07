export const getData = async () => {
  let data = await fetch('http://localhost:3000/entries').then((res) => res.json());
  data.map((item) => {
    if (item.programType === 'movie') {
      console.log(item.title);
    }
  });
};
