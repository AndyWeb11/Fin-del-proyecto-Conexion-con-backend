import { BaseRecord } from "@refinedev/core"

export interface IMembership extends BaseRecord {
    id: number;
    name: string;
    duration: number;
    price: number;
    dailyTrips?: number;
    status: "active" | "inactive";
    description?: string;
    benefits: string[];
}

