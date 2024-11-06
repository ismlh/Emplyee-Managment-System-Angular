export interface IDashboard {
  totalEmployee: number;
  totalProject: number;
  recentEmployee: any[];
  recentProjects: RecentProject[];
}

export interface RecentProject {
  projectId: number;
  projectName: string;
  clientName: string;
  startDate: string;
  leadByEmpId: number;
  contactPerson: string;
  contactNo: string;
  emailId: string;
}
