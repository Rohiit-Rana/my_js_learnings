const accountId = 144332
let accountEmail = "rohitrana@gmail.com"
var accountPassword = "12434"
accountCity = "jaipur"

//accountId = 2 NOT ALLOWED as const cannot be modified.

accountEmail = "asdfs@gmail.com"
accountPassword = "2343213"
accountCity = "bengaluru"

/* 
Prefer not to use VAR because of issue in block scope and functional scope.
*/

console.table([accountEmail, accountId, accountPassword, accountCity])
