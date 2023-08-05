function solve(arr) {
   let initialNum = 1;
   let arrAdd = [];
   for (const operation of arr) {
      switch (operation) {
         case ('add'): {
            arrAdd.push(initialNum);
            initialNum++
         } break;
         case ('remove'): {
            arrAdd.pop()
            initialNum++;
         } break;
      }
   }
   if (arrAdd.length <= 0) {
      console.log('Empty');
   } else {
      arrAdd.forEach(num => {
         console.log(num);
      });
   }

}
solve(['add',
   'add',
   'add',
   'add']
)
solve(['add',
   'add',
   'remove',
   'add',
   'add']
)
solve(['remove',
   'remove',
   'remove'])