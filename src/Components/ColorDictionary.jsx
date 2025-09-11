const colors = {
  'primary-blue': '#2f88ff',
  'primary-red': '#ee1b1b',
  'primary-green': '#90f230',
  'neutral': '#a3aab5'
};

function getColor(colorKey) {
  for (const [key, value] of Object.entries(colors)) {
    if (colorKey === key) {
      return value;
    }
  }
  return null; // ou undefined, caso não encontre
}

export default getColor;