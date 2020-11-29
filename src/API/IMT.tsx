export async function getNotesCSV(username: string, password: string): Promise<any> {
    const url = 'https://notes-imt.djemai.net/sifiQuery.php'

    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then((response) => response.json())
        .catch((error) => { throw new Error(error) });
}
