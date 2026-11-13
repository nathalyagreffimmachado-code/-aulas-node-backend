import api from './api'

export const createUsuario = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/usuario/create',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const buscarUsuario = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/usuario/buscar',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const busarIdUsuario = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/usuario/buscarId',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}



export const updateUsuario = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/usuario/update',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const deletarUsuario = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/usuario/delete',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

