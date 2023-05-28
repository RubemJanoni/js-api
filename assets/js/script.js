const API_KEY = "5RG9mB0RVgGEB3ncNKzENQ6MDxk";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    }
    else
    {
        throw new Error(data.error);
    }

}

function displayStatus(data)
{
    resultsModal.show()
}