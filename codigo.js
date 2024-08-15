function exibirdados(){
    const carros = [
    {
        "marca": "Toyota",
        "modelo": "Corolla",
        "ano": 2022,
        "cor": "Vermelho",
        "motor": {
            "tipo": "Híbrido",
            "potencia": 121
        },
        "caracteristicas": ["Ar Condicionado", "Sistema de Navegação", "Bluetooth"],
        "eEletrico": false,
        "proprietario": {
            "nome": "João Silva",
            "numeroDeHabilitacao": "XYZ1234"
        }
    },
    {
        "marca": "Honda",
        "modelo": "Civic",
        "ano": 2020,
        "cor": "Preto",
        "motor": {
            "tipo": "Combustão",
            "potencia": 158
        },
        "caracteristicas": ["Ar Condicionado", "Cruise Control", "Câmera de Ré"],
        "eEletrico": false,
        "proprietario": {
            "nome": "Maria Oliveira",
            "numeroDeHabilitacao": "ABC9876"
        }
    },
    {
        "marca": "Tesla",
        "modelo": "Model 3",
        "ano": 2023,
        "cor": "Branco",
        "motor": {
            "tipo": "Elétrico",
            "potencia": 283
        },
        "caracteristicas": ["Autopilot", "Painel Touchscreen", "Bluetooth"],
        "eEletrico": true,
        "proprietario": {
            "nome": "Carlos Pereira",
            "numeroDeHabilitacao": "LMN4567"
        }
    }
    ];

console.clear();
console.log("// exibe todos os carros dentro da estrutura JSON");
console.log(carros);
console.log("// exibe o dados do primeiro carro");
console.log(carros[0]);
console.log("// exibe o dados do segundo carro");
console.log(carros[1]);
console.log("// exibe se o carro 2 é eEletrico");
console.log(carros[1].eEletrico);
}
