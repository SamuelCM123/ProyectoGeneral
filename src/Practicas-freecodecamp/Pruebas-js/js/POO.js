class Usuario{
    constructor(nombre,email,password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    saludo(){
        console.log(`Hola ${this.nombre}`);
    }

    login(email, password){
        return this.email == email && this.password == password;
    }
}

class Alumno extends Usuario{
    constructor(nombre,email,password){
        super(nombre,email,password)
        this.cursos = []
        this.activo = false
    }

    despedida(){
        console.log(`Hasta luego ${this.nombre}`);
    }

    activo(){
        this.activo = true
    }

    agregarCurso(curso){
        this.cursos.push(curso)
        return this.cursos
    }

    login(email,password){
        if(!this.activo) return false;
        return super.login(email,password);
    }
}

const pedro = new Usuario('Pedro','pedro.lopez@gmail.com','123456');
const jose = new Alumno('Jose','jose.lopez@gmail.com','654321');

console.log("Jose instanceof Usuario: ",jose instanceof Usuario);
console.log("Jose instanceof Alumno: ",jose instanceof Alumno);
console.log("");
console.log("pedro instanceof Alumno: ",pedro instanceof Alumno);
console.log("pedro instanceof Alumno: ",pedro instanceof Usuario);

// Login usuario que returna un valor boolean dependiendo de si corresponde email y password.
console.log(pedro.login("pedro.lopez@gmail.com","123456"));//Login usuario
console.log(pedro);//USUARIO

// Agregar curso
jose.agregarCurso('Fisica');
console.log(jose);//ALUMNO