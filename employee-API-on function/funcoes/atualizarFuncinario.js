import fs from 'node:fs'

const atualizarFuncionario = (id, novosDados, callback) => {
    fs.readFile("empregados.json", "utf8", (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        try {
            const funcionarios = JSON.parse(data);
            const indexFuncionario = funcionarios.findIndex((funcionario) => funcionario.id === id);

            if (indexFuncionario === -1) {
                callback(new Error("Funcionário não encontrado"));
                return;
            }

            const funcionarioAtualizado = { ...funcionarios[indexFuncionario], ...novosDados };
            funcionarios[indexFuncionario] = funcionarioAtualizado;

            fs.writeFile("empregados.json", JSON.stringify(funcionarios, null, 2), (err) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null, funcionarioAtualizado);
            });
        } catch (error) {
            callback(error);
        }
    });
};

export default atualizarFuncionario;
