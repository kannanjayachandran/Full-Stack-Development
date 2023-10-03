export function sayTime() {
    const now = new Date();
    console.log(now.getHours() + now.getMinutes());
}

export function sayDate() {
    const today = new Date();
    console.log(today.getDate());
}