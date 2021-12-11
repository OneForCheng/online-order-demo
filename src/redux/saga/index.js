
const sagas = [];

export const registerSagaWithMiddleware = middleware => {
    sagas.forEach((saga) => middleware.run(saga))
}
