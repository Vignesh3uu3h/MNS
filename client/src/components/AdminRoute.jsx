import { Navigate } from 'react-router-dom';
import { isAdminUser } from '../utils/auth';

function AdminRoute({ children }) {
  if (!isAdminUser()) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
