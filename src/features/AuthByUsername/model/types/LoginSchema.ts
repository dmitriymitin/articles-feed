export interface LoginSchemaInputFields {
  username: string;
  password: string;
}

export interface LoginSchema extends LoginSchemaInputFields {
  isLoading: boolean;
  error?: string;
}
