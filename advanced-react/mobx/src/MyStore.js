import { extendObservable } from 'mobx';

class MyStorage {
    constructor(){
        extendObservable(this, {
            myData: 'hi',
            robotName: 'BeeBop'
        });
    }
}

var MyStore = new MyStorage();
export default MyStore;

