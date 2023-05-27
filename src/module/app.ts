/*  
  Порождающие паттерны:

  Factory Method - создает что то
*/


interface IInsurance {
  id: number;
  status: string;
  serVehicle(vehicle: any): void;
  submit(): Promise<boolean>
}

class TFInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;
  serVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }
  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({vehicle: this.vehicle})
    });
    const data = await res.json
    return data.isSuccess; // например возвращает isSuccess
  }
  
}


class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;
  serVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }
  async submit(): Promise<boolean> {
    const res = await fetch('asd', {
      method: 'POST',
      body: JSON.stringify({vehicle: this.vehicle})
    });
    const data = await res.json
    return data.yes; // например возвращает isSuccess
  }
  
}


/* Реализация фабрики */

abstract class InsuranceFactory {
  db: any;
  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status)
  }
}

/* реализация фабрики TF */

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): TFInsurance {
    return new TFInsurance();
  }
  
}

/* реализация фабрики AB */

class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): ABInsurance {
    return new ABInsurance();
  }
  
}

const tfInsuranceFactory = new TFInsuranceFactory(); // создали
const ins = tfInsuranceFactory.createInsurance(); // создали метод страховки
tfInsuranceFactory.saveHistory(ins);



/* альтернативное решение */

const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
}

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
  db: any;

  createInsurance<T extends keyof IT>(type: T): IT[T] {
    return INSURANCE_TYPE[type]
  }

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status)
  }
}

const insuranceFactoryAlt = new InsuranceFactoryAlt();
const ins2 = new (insuranceFactoryAlt.createInsurance('tf'));