import { type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout('/routes/admin/admin-layout.tsx', [
      route('dashboard', 'route/admin.dashboard.tsx'),
      route('all-users', 'route/all-users.tsx') 
    ])
   
] satisfies RouteConfig;