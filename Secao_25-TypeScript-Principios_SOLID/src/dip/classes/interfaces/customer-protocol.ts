export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  fisrtName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
