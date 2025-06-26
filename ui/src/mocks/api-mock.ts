// 模拟API模块，用于前端独立运行
export class User {
  id: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  note: string;
  sessionTtl: number;

  constructor(data?: any) {
    this.id = data?.id || '';
    this.email = data?.email || '';
    this.isActive = data?.isActive || false;
    this.isAdmin = data?.isAdmin || false;
    this.note = data?.note || '';
    this.sessionTtl = data?.sessionTtl || 0;
  }
}

export class Tenant {
  id: string;
  name: string;
  description: string;
  canHaveGateways: boolean;
  maxGatewayCount: number;
  maxDeviceCount: number;
  privateGatewaysUp: boolean;
  privateGatewaysDown: boolean;

  constructor(data?: any) {
    this.id = data?.id || '';
    this.name = data?.name || '';
    this.description = data?.description || '';
    this.canHaveGateways = data?.canHaveGateways || false;
    this.maxGatewayCount = data?.maxGatewayCount || 0;
    this.maxDeviceCount = data?.maxDeviceCount || 0;
    this.privateGatewaysUp = data?.privateGatewaysUp || false;
    this.privateGatewaysDown = data?.privateGatewaysDown || false;
  }
}

export class Application {
  id: string;
  name: string;
  description: string;
  organizationId: string;
  serviceProfileId: string;

  constructor(data?: any) {
    this.id = data?.id || '';
    this.name = data?.name || '';
    this.description = data?.description || '';
    this.organizationId = data?.organizationId || '';
    this.serviceProfileId = data?.serviceProfileId || '';
  }
}

export class Device {
  devEui: string;
  name: string;
  applicationId: string;
  description: string;
  deviceProfileId: string;
  isDisabled: boolean;
  variables: { [key: string]: string };
  tags: { [key: string]: string };

  constructor(data?: any) {
    this.devEui = data?.devEui || '';
    this.name = data?.name || '';
    this.applicationId = data?.applicationId || '';
    this.description = data?.description || '';
    this.deviceProfileId = data?.deviceProfileId || '';
    this.isDisabled = data?.isDisabled || false;
    this.variables = data?.variables || {};
    this.tags = data?.tags || {};
  }
}

export class Gateway {
  id: string;
  name: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    altitude: number;
  };
  organizationId: string;
  networkServerId: string;
  isDisabled: boolean;

  constructor(data?: any) {
    this.id = data?.id || '';
    this.name = data?.name || '';
    this.description = data?.description || '';
    this.location = data?.location || { latitude: 0, longitude: 0, altitude: 0 };
    this.organizationId = data?.organizationId || '';
    this.networkServerId = data?.networkServerId || '';
    this.isDisabled = data?.isDisabled || false;
  }
}

// 模拟API响应类
export class ListUsersResponse {
  totalCount: number;
  result: User[];

  constructor(data?: any) {
    this.totalCount = data?.totalCount || 0;
    this.result = (data?.result || []).map((user: any) => new User(user));
  }
}

export class ListTenantsResponse {
  totalCount: number;
  result: Tenant[];

  constructor(data?: any) {
    this.totalCount = data?.totalCount || 0;
    this.result = (data?.result || []).map((tenant: any) => new Tenant(tenant));
  }
}

export class ListApplicationsResponse {
  totalCount: number;
  result: Application[];

  constructor(data?: any) {
    this.totalCount = data?.totalCount || 0;
    this.result = (data?.result || []).map((app: any) => new Application(app));
  }
}

export class ListDevicesResponse {
  totalCount: number;
  result: Device[];

  constructor(data?: any) {
    this.totalCount = data?.totalCount || 0;
    this.result = (data?.result || []).map((device: any) => new Device(device));
  }
}

export class ListGatewaysResponse {
  totalCount: number;
  result: Gateway[];

  constructor(data?: any) {
    this.totalCount = data?.totalCount || 0;
    this.result = (data?.result || []).map((gateway: any) => new Gateway(gateway));
  }
}

// 模拟请求类
export class ListUsersRequest {
  limit: number;
  offset: number;
  search: string;

  constructor(data?: any) {
    this.limit = data?.limit || 10;
    this.offset = data?.offset || 0;
    this.search = data?.search || '';
  }
}

export class ListTenantsRequest {
  limit: number;
  offset: number;
  search: string;

  constructor(data?: any) {
    this.limit = data?.limit || 10;
    this.offset = data?.offset || 0;
    this.search = data?.search || '';
  }
}

export class ListApplicationsRequest {
  limit: number;
  offset: number;
  search: string;
  organizationId: string;

  constructor(data?: any) {
    this.limit = data?.limit || 10;
    this.offset = data?.offset || 0;
    this.search = data?.search || '';
    this.organizationId = data?.organizationId || '';
  }
}

export class ListDevicesRequest {
  limit: number;
  offset: number;
  search: string;
  applicationId: string;

  constructor(data?: any) {
    this.limit = data?.limit || 10;
    this.offset = data?.offset || 0;
    this.search = data?.search || '';
    this.applicationId = data?.applicationId || '';
  }
}

export class ListGatewaysRequest {
  limit: number;
  offset: number;
  search: string;
  organizationId: string;

  constructor(data?: any) {
    this.limit = data?.limit || 10;
    this.offset = data?.offset || 0;
    this.search = data?.search || '';
    this.organizationId = data?.organizationId || '';
  }
}

// 模拟API服务
export const mockApiService = {
  // 用户相关
  listUsers: async (request: ListUsersRequest): Promise<ListUsersResponse> => {
    // 模拟延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 返回模拟数据
    const mockUsers = [
      new User({ id: '1', email: 'admin@example.com', isActive: true, isAdmin: true }),
      new User({ id: '2', email: 'user@example.com', isActive: true, isAdmin: false }),
    ];
    
    return new ListUsersResponse({
      totalCount: mockUsers.length,
      result: mockUsers
    });
  },

  // 租户相关
  listTenants: async (request: ListTenantsRequest): Promise<ListTenantsResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockTenants = [
      new Tenant({ id: '1', name: 'Default Tenant', description: 'Default organization' }),
      new Tenant({ id: '2', name: 'Test Tenant', description: 'Test organization' }),
    ];
    
    return new ListTenantsResponse({
      totalCount: mockTenants.length,
      result: mockTenants
    });
  },

  // 应用相关
  listApplications: async (request: ListApplicationsRequest): Promise<ListApplicationsResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockApplications = [
      new Application({ id: '1', name: 'Test Application', description: 'Test application' }),
      new Application({ id: '2', name: 'Demo Application', description: 'Demo application' }),
    ];
    
    return new ListApplicationsResponse({
      totalCount: mockApplications.length,
      result: mockApplications
    });
  },

  // 设备相关
  listDevices: async (request: ListDevicesRequest): Promise<ListDevicesResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockDevices = [
      new Device({ devEui: '0102030405060708', name: 'Test Device 1', applicationId: '1' }),
      new Device({ devEui: '0807060504030201', name: 'Test Device 2', applicationId: '1' }),
    ];
    
    return new ListDevicesResponse({
      totalCount: mockDevices.length,
      result: mockDevices
    });
  },

  // 网关相关
  listGateways: async (request: ListGatewaysRequest): Promise<ListGatewaysResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockGateways = [
      new Gateway({ 
        id: '0102030405060708', 
        name: 'Test Gateway 1', 
        location: { latitude: 52.3667, longitude: 4.8945, altitude: 0 }
      }),
      new Gateway({ 
        id: '0807060504030201', 
        name: 'Test Gateway 2', 
        location: { latitude: 52.3667, longitude: 4.8945, altitude: 0 }
      }),
    ];
    
    return new ListGatewaysResponse({
      totalCount: mockGateways.length,
      result: mockGateways
    });
  },
};

// 导出所有类型，模拟真实的API模块
export * from './api-mock'; 