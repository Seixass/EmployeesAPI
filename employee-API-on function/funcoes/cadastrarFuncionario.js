import fs from 'node:fs'

const cadastrarNovoFuncionario = (novoFuncionario, callback) => {
    fs.readFile("empregados.json", "utf8", (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        try {
            const funcionarios = JSON.parse(data);
            novoFuncionario.id = funcionarios.length + 1;
            funcionarios.push(novoFuncionario);

            fs.writeFile("empregados.json", JSON.stringify(funcionarios, null, 2), (err) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null, novoFuncionario);
            });
        } catch (error) {
            callback(error);
        }
    });
};

export default cadastrarNovoFuncionario;