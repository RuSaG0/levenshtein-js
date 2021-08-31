function levenshteinDistance(_obj){

  let { a: _a, b: _b} = _obj;
  const _maxDistance = _obj.maxDistance ?? Number.MAX_SAFE_INTEGER;

  if(typeof _a !== 'string' || typeof _b !== 'string')
    throw new Error('Values expected to be string type');
  
  function prepare(_dd) {
  	const relative = _dd / _b.length;
    const similarity = 1 - relative;
    return {
      steps:_dd,
      relative,
      similarity
    };
  }
  
  if (_a === _b)
    return prepare(0);

  if (_a.length >  _b.length)
    [_a,_b] = [_b,_a];
    
  let la = _a.length;
  let lb = _b.length;

  while (la > 0 && (_a.charCodeAt(la - 1) === _b.charCodeAt(lb - 1))) {
    la--;
    lb--;
  }

  let offset = 0;

  while (offset < la && (_a.charCodeAt(offset) === _b.charCodeAt(offset))) {
    offset++;
  }

  la -= offset;
  lb -= offset;
    

  let x = 0;
  let y;
  let d0;
  let d1;
  let d2;
  let d3;
  let dd;
  let dy;
  let ay;
  let bx0;
  let bx1;
  let bx2;
  let bx3;

  const vector = [];
  const min = (d0, d1, d2, bx, ay) => {
    return d0 < d1 || d2 < d1
      ? d0 > d2
        ? d2 + 1
        : d0 + 1
      : bx === ay
        ? d1
        : d1 + 1;
  };
  
  for (y = 0; y < la; y++) {
    vector.push(y + 1);
    vector.push(_a.charCodeAt(offset + y));
  }

  let len = vector.length - 1;
	let isBreak = false;
  
  for (; x < lb - 3;) {
    bx0 = _b.charCodeAt(offset + (d0 = x));
    bx1 = _b.charCodeAt(offset + (d1 = x + 1));
    bx2 = _b.charCodeAt(offset + (d2 = x + 2));
    bx3 = _b.charCodeAt(offset + (d3 = x + 3));
    
    dd = (x += 4);
    if(dd > _maxDistance) {
    	dd = _maxDistance;
      isBreak = true;
    	break;
    }
    
    for (y = 0; y < len; y += 2) {
      dy = vector[y];
      ay = vector[y + 1];
      d0 = min(dy, d0, d1, bx0, ay);
      d1 = min(d0, d1, d2, bx1, ay);
      d2 = min(d1, d2, d3, bx2, ay);
      dd = min(d2, d3, dd, bx3, ay);
      vector[y] = dd;
      d3 = d2;
      d2 = d1;
      d1 = d0;
      d0 = dy;
    }
  }
  if(isBreak)
  	return prepare(dd)
   
  for (; x < lb;) {
    bx0 =_b.charCodeAt(offset + (d0 = x));
    dd = ++x;
    for (y = 0; y < len; y += 2) {
      dy = vector[y];
      vector[y] = dd = min(dy, d0, dd, bx0, vector[y + 1]);
      d0 = dy;
    }
  }
  
  return prepare(dd)
}