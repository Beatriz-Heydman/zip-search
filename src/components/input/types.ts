export type InputProps = {
  localidade: string;
  logradouro: string;
  uf: string;
  cepLocale: string;
};

export type Cep = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};
