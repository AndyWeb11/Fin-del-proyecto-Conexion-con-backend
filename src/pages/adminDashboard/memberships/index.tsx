'use client'

import MembershipList from "@/components/adminDash/memberships/list";
import { useEffect } from "react";
import usePermissions from '@/hooks/usePermissions';
import { useRouter } from 'next/navigation';
import DashboardLayout from "../layout";

const MembershipsPage: React.FC = () => {
    const { hasPermission } = usePermissions();
    const router = useRouter();

    useEffect(() => {
        if (!hasPermission('view_memberships')) {
            router.push('/adminDashboard');
        }
    }, [hasPermission, router]);

    if (!hasPermission('view_memberships')) {
        return null;
    }

    return (
        <DashboardLayout>
            <MembershipList />
        </DashboardLayout>
    );
};

export default (MembershipsPage);

// export default function MembershipsPage() {
//     const { hasPermission } = usePermissions();
//     const router = useRouter();

//     useEffect(() => {
//         if (!hasPermission('view_memberships')) {
//             router.push('/adminDashboard');
//         }
//     }, [hasPermission, router]);

//     if (!hasPermission('view_memberships')) {
//         return null;
//     }

//     return <MembershipList />;
// }
