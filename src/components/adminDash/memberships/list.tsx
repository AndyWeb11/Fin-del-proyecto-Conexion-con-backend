'use client';

import React from "react";
import { List, EditButton, ShowButton } from "@refinedev/mui";
import { useList } from "@refinedev/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import Box from "@mui/material/Box";
import { BaseRecord } from "@refinedev/core";
import { IMembership } from "@/types/memberships";

export default function MembershipList() {
  const { data, isLoading } = useList<IMembership>({
    resource: "memberships",
  });

  return (
    <Box>
      <List>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Viajes Diarios</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((membership: IMembership) => (
              <TableRow key={membership.id}>
                <TableCell>{membership.id}</TableCell>
                <TableCell>{membership.name}</TableCell>
                <TableCell>{membership.duration} días</TableCell>
                <TableCell>${membership.price}</TableCell>
                <TableCell>{membership.maxDailyRides}</TableCell>
                <TableCell>
                  <Chip 
                    label={membership.status}
                    color={membership.status === "active" ? "success" : "error"}
                  />
                </TableCell>
                <TableCell>
                  <EditButton hideText recordItemId={membership.id} />
                  <ShowButton hideText recordItemId={membership.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </List>
    </Box>
  );
}
