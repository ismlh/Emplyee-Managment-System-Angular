

export interface IchildDepartments {
  childDeptId: number;
  parentDeptId: number;
  departmentName: string;
}

export interface IchildDepartmentsResponse {
  message: string;
  result: boolean;
  data: IchildDepartments[];
}
