import foodSaga from './foodSaga';

const sagas = [foodSaga];

export const registerSagaWithMiddleware = middleware => {
    sagas.forEach((saga) => middleware.run(saga))
}
