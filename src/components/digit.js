export const calPoints = (ops) => {
  let result = 0;
  let mapOps = [];

  // console.log(ops);

  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(Number(ops[i])) && Number(ops[i]) !== undefined) {

      mapOps.push(Number(ops[i]));
      console.log(mapOps)
    } else {
      if (ops[i] === 'C' && mapOps.length >= 1) { 

        mapOps.pop(i-1);
        console.log(mapOps);
      } else if(ops[i] === 'D' && mapOps.length >= 1) {

        //onrécupère le dernier élément
        const lastItem = mapOps[ mapOps.length - 1 ];

        mapOps.push(lastItem*2 )
      } else if (ops[i] === '+' && mapOps.length >= 2) {
        console.log('index : ', i)

        const prelastItem = mapOps[ mapOps.length - 2 ]
        const lastItem = mapOps[ mapOps.length - 1 ];

        mapOps.push(lastItem + prelastItem)
      } else {
        console.log( ops[i], ' ne respecte pas les contrainte');
      }

    }
  }

  console.log("map", mapOps)

  for(let num of mapOps) {
    console.log(num);
    result += num
  }
  console.log("tableau ops mappé", mapOps, "résultat : ", result );

  return result;
};
