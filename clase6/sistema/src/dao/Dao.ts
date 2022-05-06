interface Dao<E,K> {

    add: (Element : E) => void;

    getAll: () => Array<E>;

    get: (Clave : K) => E;

}

export default Dao;