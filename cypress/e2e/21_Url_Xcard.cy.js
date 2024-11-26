import givenStepsCamila from "../steps/givenSteps_camila";

function generarTexto(tipo = "title", longitud = 255, semilla = null) {
    // Aplicar semilla si se proporciona
    if (semilla !== null) {
        faker.seed(semilla);
    }

    let texto = "";

    if (tipo === "title") {
        texto = faker.lorem.sentence(50); // Generar un título base
    } else if (tipo === "description") {
        texto = faker.lorem.paragraphs(5); // Generar un párrafo base
    } else {
        throw new Error("El tipo debe ser 'title' o 'description'.");
    }

    // Ajustar la longitud del texto al valor especificado
    if (texto.length > longitud) {
        return texto.substring(0, longitud).trim();
    } else {
        while (texto.length < longitud) {
            texto += " " + faker.lorem.word();
        }
        return texto.substring(0, longitud).trim();
    }
}

describe("62_post_excerpt_301_caracteres", () => {
    beforeEach(() => {
        givenStepsCamila.givenNavigateToLoginPage();
        // and enters a valid username and password and click the login button
        givenStepsCamila.givenLogin();
        // and navigates to the settings
        givenStepsCamila.givenNavigateToSettingsPage();
    })

    it("62_post_excerpt_301_caracteres", () => {

    });
})