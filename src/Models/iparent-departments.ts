export interface IparentDepartments {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;
}

export interface IparentDepartmentsResponse {
  message: string;
  result: boolean;
  data: IparentDepartments[];
}
