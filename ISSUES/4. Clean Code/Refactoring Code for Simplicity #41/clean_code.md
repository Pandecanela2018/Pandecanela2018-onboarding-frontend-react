# Answer

## What made the original code complex?

Well, it had a nested structure with 3 statements if in the function,so in this case
the performance could be low.

## How did refactoring improve it?

Code refactoring improves performance because it is shorter
and the statements are in guard clauses, so it will be easier to maintain.
if you have an error or bug, you can fix it quickly.

# Example

/*function evaluarUsuario(usuario) {
  if (usuario.activo) {
    if (usuario.verificado) {
      if (usuario.saldo > 0) {
        return "Acceso concedido";
      } else {
        return "Saldo insuficiente";
      }
    } else {
      return "Usuario no verificado";
    }
  } else {
    return "Usuario inactivo";
  }
}*/

//Refactoring the above code

function evaluarUsuario(usuario) {
  if (!usuario.activo) return 'Usuario inactivo';
  if (!usuario.verificado) return 'Usuario no verificado';
  if (usuario.saldo <= 0) return 'Saldo insuficiente';
  return 'Acceso concedido';
}
console.log(evaluarUsuario({ activo: true, verificado: true, saldo: 100 })); // Acceso concedido
