const bindings = {
  tcount: 0,
}


const triads = [
  { name: 'C', triad: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'] },
  { name: 'C#', triad: ['C#', 'D#m', 'Fm', 'F#', 'G#', 'A#m', 'Bdim'] },
  { name: 'D', triad: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'] },
  { name: 'Eb', triad: ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Ddim'] },
  { name: 'E', triad: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'] },
  { name: 'F', triad: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'] },
  { name: 'F#', triad: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fdim'] },
  { name: 'G', triad: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'] },
  { name: 'Ab', triad: ['G#', 'A#m', 'Bm', 'C#', 'D#', 'Fm', 'Gdim'] },
  { name: 'A', triad: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'] },
  { name: 'Bb', triad: ['A#', 'Cm', 'Dm', 'D#', 'F', 'Gm', 'Adim'] },
  { name: 'B', triad: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'] },
];

function transpose(root) {
  const regex = /\[([^\]]+)\]/g;
  const matches = [];
  const  valuesArray = [];
  let match;
  let index = 0;
  let resultString = hchcs.curr_song().olyrics();
  const triad = triads[findTriadIndexByName(root)].triad;
  // Find all matches and add them to the array
  while ((match = regex.exec(resultString)) !== null) {
    console.log(match[1],root,triad)
    matches.push(match[1]);
    valuesArray.push(`[${triad.indexOf(match[1]) ==-1?'*':triad.indexOf(match[1]) + 1}]`);
  }
  
  // Replace each match with corresponding value from valuesArray
  resultString = resultString.replace(regex, () => {
    if (index < valuesArray.length) {
      return valuesArray[index++];
    }
    return '';
  });
  return resultString;
}

function findTriadIndexByName(name) {
  return triads.findIndex(triad => triad.name === name);
}