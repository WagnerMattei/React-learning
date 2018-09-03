const restful = require("node-restful");
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
  created: { type: Date, default: Date.now, required: true },
  updated: { type: Date, default: Date.now, required: false  },
  nombre: { type: String, required: [true, 'El nombre es requerido'] },
  password: { type: String, required: false  },
  email: { type: String, required: false },
  lastLogin: { type: Date, required: false },
  perfil: { type: String, required: false, enum: ['PROFESOR', 'DIRECTOR', 'ALUMNO'] },
  isAtivo: { type: Boolean, required: false },
  isAdmin: { type: Boolean, default: false } 
});

const asignaturaSchema = new mongoose.Schema({
  created: { type: Date, default: Date.now, required: true },
  updated: { type: Date, default: Date.now, required: false  },
  nombre: { type: String, required: [true, 'El nombre de la asignatura es requerido'] },
  creditos: { type: Number, min: 0, required: [true, 'La cantidad de creditos es requerida'] },
  cargaHoraria: { type: Number },
  profesor: {userSchema},
  valor: { type: Number},
})

const paisSchema = new mongoose.Schema({
  nombre: { type: String, required: true}
})

const alumnoSchema = new mongoose.Schema({
  user: {userSchema},
  cedula: { type: String, required: [true, 'La cedula es requerida']},
  nacionalidad: {paisSchema},
  formaPago: { type: String, required: [true, 'La forma de pago es requerida'], enum: ['AL_CONTADO', 'BECA', 'FONDO_ROTATIVO']}, 
  situacion: { type: String, required: false, enum: ['CONCLUIDO', 'EN_CURSO', 'TRANCADO']}, 
  nombrePadre: { type: String, required: false}, 
  nombreMadre: { type: String, required: false}, 
  fechaNascimiento: { type: Date, required: false}, 
  localNascimiento: { type: String, required: false}, 
  escolaridad: { type: String, required: false}, 
  dataInicioMatricula: { type: Date, required: false, default: Date.now}, 
  dataFinalMatricula: { type: Date, required: false}, 
  dataFinalMatricula: { type: Date, required: false},
  sexo: { type: String, required: [true, 'El sexo es requerido'], enum: ['MASCULINO', 'FEMENINO']},
  observacion: { type: String, required: false},
  asignaturas: [asignaturaSchema]
})

module.exports = {
  alumno: restful.model("Alumno", alumnoSchema),
  pais: restful.model("Pais", paisSchema),
  usuario: restful.model("Usuario", userSchema),
  asignatura: restful.model("Asignatura", asignaturaSchema),
}
