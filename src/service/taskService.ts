import { Itask } from "../helpers/interface";

export const BASE_URL: string = 'http://localhost:3000/task'


export const getAllTask = async () => {
    try {

        const res = await fetch(BASE_URL, {
            method: 'GET',
            headers: { 'Content-Type': "application/json" },
        })
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();        
        return parsed;
    } catch (err) {
        throw new Error(err);
    }
}

export const createTask = async (task: Itask) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        if (!res.ok) throw new Error(`Response not OK`)
        const parsed = res.json()
        return parsed;

    } catch (err) {
        throw new Error(err);
    }
}

export const removeTask = async (id: number) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        if (!res.ok) throw new Error(`Response not OK`)
        const parsed = await res.json();
        window.location.reload();
        return parsed

    } catch (err) {
        throw new Error(err);
    }
}