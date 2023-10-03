import axios from "axios";

export async function getUni() {
    try {
      return await axios.get('https://apiapn.copisterialowcost.info/Universidades', {
        params: {
        }
      })
    } catch (error) {
      console.error(error);
    }
}

export async function getFacu(code) {
  if (code !== undefined && code !== "") {
    try {
      return await axios.get('https://apiapn.copisterialowcost.info/Facultades', {
        params: {
          universidadCode: code
        }
      })
    } catch (error) {
      console.error(error);
    }
  } else {
    return "no uni"
  }
  
}


export async function getGrado(code) {
  if (code !== undefined) {
    try {
      return await axios.get('https://apiapn.copisterialowcost.info/Grados', {
        params: {
          facultadCode: code
        }
      })
    } catch (error) {
      console.error(error);
    }
  } else {
    return "no facu"
  }
  
}


export async function getCurso(code) {
  if (code !== undefined) {
    try {
      return await axios.get('https://apiapn.copisterialowcost.info/Cursos', {
        params: {
          gradoId: code
        }
      })
    } catch (error) {
      console.error(error);
    }
  } else {
    return "no grado"
  }
  
}

  