import VehiculoController from '../controllers/VehiculoControllers.js';
class VehiculoRouter {
    constructor(app, nombre) {
        this.app = app;
        this.nombre = nombre;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.nombre)
            .get(VehiculoController.getAll)
            .post(VehiculoController.add);
        return this.app;
    }
}
export default VehiculoRouter;
