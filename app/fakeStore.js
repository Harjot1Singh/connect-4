// Acts as a global store, completely silly
class Store {
    constructor() {
        this.store = {
            ai: true,
            width: 6,
            height: 4
        };
    }
    
    set(obj) {
        // Combine the objects
        this.store = {
            ...this.store,
            ...obj
        };
    }
    
    get() {
        return this.store;
    }
}

const store = new Store();

export default store;