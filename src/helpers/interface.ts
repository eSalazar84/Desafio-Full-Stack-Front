export enum Status {
    pendiente = 'pendiente',
    finalizado = 'finalizado'
}

export interface Itask {
    id: number
    title: string
    description: string
    status: Status
}