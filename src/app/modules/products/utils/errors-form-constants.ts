export const errorsForm = {
    id: [
        {
            type: 'required',
            message: 'Este campo es requerido'
        },
        {
            type: 'minlength',
            message: 'Deben ser mas de 3 caracteres'
        },
        {
            type: 'maxlength',
            message: 'Deben ser máximo de 10 caracteres'
        },
        {
            type: 'invalidId',
            message: 'ID no válido'
        }
    ],
    name: [
        {
            type: 'required',
            message: 'Este campo es requerido'
        },
        {
            type: 'minlength',
            message: 'Deben ser mas de 5 caracteres'
        },
        {
            type: 'maxlength',
            message: 'Deben ser máximo de 100 caracteres'
        },
    ],
    description: [
        {
            type: 'required',
            message: 'Este campo es requerido'
        },
        {
            type: 'minlength',
            message: 'Deben ser mas de 10 caracteres'
        },
        {
            type: 'maxlength',
            message: 'Deben ser máximo de 200 caracteres'
        },
    ],
    logo: [
        {
            type: 'required',
            message: 'Este campo es requerido'
        },
    ],
}