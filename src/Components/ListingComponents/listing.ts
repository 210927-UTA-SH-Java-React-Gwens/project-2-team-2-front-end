export const formatAsMoney = (value: string) => {
  let x: string = "",
      decimal: number = -1, // -1: No decimal, 0: decimal pt, 1: 1 number after point, 2: 2 numbers after point
      sz: number = 0,
      index: number = 0;

  // Get number of numeric chars - used for placing commas
  for (let i of value)
    if (i === ".") break;
    else if (!isNaN(Number(i)) && i !== " ") sz++;

  if (sz === 0)
    x = "0";

  // Iterate over every char in value
  for (let char of value) {
    // No decimal and i is decimal point
    if (decimal === -1 && char === ".") {
      x += char;
      decimal = 0;
      index = sz + 1;
    }

    // Nonnumeric character
    else if (isNaN(Number(char)) || char === " ")
      continue;
    
    // Decimal has been set
    else if (decimal > -1) {
      decimal++;
      x += char;
      if (decimal === 2) break;
    }

    // Just a number
    else {
      x += char;
      if (++index < sz && (sz - index) % 3 === 0)
          x += ",";
    }
  }

  switch (decimal) {
    case -1: return x + ".00";
    case  0: return x +  "00";
    case  1: return x +   "0";
    default: return x;
  }
};