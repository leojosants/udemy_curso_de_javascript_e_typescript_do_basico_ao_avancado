// 
exemploComAsyncAwait = () => {
    function rand(min = 0, max = 3) {
        min *= 1000;
        max *= 1000;
        const aleatorio = Math.random() * (max - min) + min;
        return Math.floor(aleatorio);
    }

    function esperaAi(msg, tempo) {
        return new Promise((resolve, reject) => {

            if (typeof msg !== 'string') {
                reject('Entrada inválida!');
                return;
            }

            setTimeout(() => {
                resolve(msg.toUpperCase() + ' --> Passei na promise.');
            }, tempo)
        });
    }

    async function executa() {
        try {
            const fase1 = await esperaAi('Fase 1', rand());
            console.log(fase1);

            const fase2 = await esperaAi('Fase 2', rand());
            console.log(fase2);

            const fase3 = await esperaAi('Fase 3', rand());
            console.log(fase3);

            console.log('\n-> Terminamos na fase:', fase3);
        }
        catch (e) {
            console.log('ERRO:', e);
        }
    }
    executa()

    exemploComAsyncAwait()
}

exemploSemAsyncAwait = () => {
    function rand(min = 0, max = 3) {
        min *= 1000;
        max *= 1000;
        const aleatorio = Math.random() * (max - min) + min;
        return Math.floor(aleatorio);
    }

    function esperaAi(msg, tempo) {
        return new Promise((resolve, reject) => {

            if (typeof msg !== 'string') {
                reject('Entrada inválida!');
                return;
            }

            setTimeout(() => {
                resolve(msg.toUpperCase() + ' --> Passei na promise.');
            }, tempo)
        });
    }

    esperaAi('Fase 1', rand())
        .then(fase => {
            console.log(fase);
            return esperaAi('Fase 2', rand());
        })
        .then(fase => {
            console.log(fase);
            return esperaAi('Fase 3', rand());
        })
        .then(fase => {
            console.log(fase);
            return fase;
        })
        .then(fase => {
            console.log('\n-> Terminamos na fase:', fase);
        })
        .catch(e => console.log('ERRO:', e))

    exemploSemAsyncAwait()
}