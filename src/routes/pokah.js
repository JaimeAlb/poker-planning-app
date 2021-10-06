export const Routes = {
  "GET    /notes": "src/list.main",
  "POST   /notes": "src/create.main",
  "POST   /insertCustomData": "src/insertCustomData.main",
  "GET    /notes/{id}": "src/get.main", 
  "GET    /notesCUstom/{id}": "src/notesCUstom.main", 
  "GET    /customGet/{id}": "src/customGet.main", 
  "PUT    /notes/{id}": "src/update.main",
  "DELETE /notes/{id}": "src/delete.main",
  "POST   /billing": "src/billing.main",
}
//  tareas:
//  1) mover el objeto de routes a otro archivo (lo que te dije)
//  2) quiero q hagas una API, como la de custom de recien, pero que en vez de POST sea GET
//  y por ende, los datos no viajan en "body"
//  viajan en la URL, asi:
//  http://asdasdas/customInsetWithGet?param1=hola&param2=chao
//  denante te dije sobre un console.log, eso te servirá pra debugear qué es lo que viene en data, y asi saber como obtener los datos desde GET y desde POST, me faltó hacer eso
//  al final solo estamos insertando el custom: "123" en duro, yo queria que lo insertaramos desde el body (en post) o desde la URL (en GET)
//  asi que son 3 tareas:
//  1) mover routes a archivos
// 2) modificar el customInsert que hiciste para que inserte algo que vaya en el body, y no ese "123" en duro
// 3) hacer la version GET de esa misma api
//  suficiente pega antes de meterte con authentication
//  De ahi vamos a crear unas api como lo q hiciste en python creo, insertaras un curso con sus notas, y luego una api pa consultar las notas de un alumno en particular y q te traiga su promedio y otras observaciones