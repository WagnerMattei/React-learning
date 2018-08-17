const restful = require("node-restful");
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
  created: { type: Date, default: Date.now, required: true },
  updated: { type: Date, default: Date.now, required: false  },
  nombre: { type: String, required: true },
  password: { type: String, required: false  },
  email: { type: String, required: false },
  lastLogin: { type: Date, required: false },
  perfil: { type: String, required: false, enum: ['PROFESOR', 'DIRECTOR', 'ALUMNO'] },
  perfil: { type: Date, required: false },
  isAtivo: { type: Boolean, required: false },
  isAdmin: { type: Boolean, default: false } 
});

const asignaturaSchema = new mongoose.Schema({
  created: { type: Date, default: Date.now, required: true },
  updated: { type: Date, default: Date.now, required: false  },
  nombre: { type: String, required: true },
  cargaHoraria: { type: Number, min: 0, required: true },
  profesor: {userSchema},
  valor: { type: Number, default: cargaHoraria * 18},
  alumnos: [alumnoSchema]
})

const paisSchema = new mongoose.Schema({
  nombre: { type: String, required: true}
})

const alumnoSchema = new mongoose.Schema({
  user: {userSchema},
  cedula: { type: String, required: true},
  nacionalidad: {paisSchema},
  formaPago: { type: String, required: true, enum: ['AL_CONTADO', 'BECA', 'FONDO_ROTATIVO']}, 
  situacion: { type: String, required: false, enum: ['CONCLUIDO', 'EN_CURSO', 'TRANCADO']}, 
  nombrePadre: { type: String, required: false}, 
  nombreMadre: { type: String, required: false}, 
  fechaNascimiento: { type: Date, required: false}, 
  localNascimiento: { type: String, required: false}, 
  escolaridad: { type: String, required: false}, 
  dataInicioMatricula: { type: Date, required: false, default: Date.now}, 
  dataFinalMatricula: { type: Date, required: false}, 
  dataFinalMatricula: { type: Date, required: false},
  sexo: { type: String, required: true, enum: ['MASCULINO', 'FEMENINO']},
  observacion: { type: String, required: false},
  asignaturas: [asignaturaSchema]
})

module.exports = restful.model("Alumno", alumnoSchema);
