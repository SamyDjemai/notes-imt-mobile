export async function fetchNotes(username: string, password: string): Promise<any> {
    return fetch('https://notes-imt.djemai.net/sifiQuery.php', {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then((response) => response.json())
        .catch((error) => { throw new Error(error) });
}
