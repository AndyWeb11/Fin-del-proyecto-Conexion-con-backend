
import React from "react";
import { Edit } from "@refinedev/mui";
import { Box, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { BaseRecord } from "@refinedev/core";
import { IMembership } from "@/types/memberships";

export default function MembershipEdit() {
  const {
    saveButtonProps,
    register,
    formState: { errors },
    control,
    setValue,
  } = useForm<IMembership>({
    refineCoreProps: {
      resource: "memberships",
      action: "edit",
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "Este campo es requerido",
          })}
          error={!!errors.name}
          helperText={errors.name?.message?.toString()}
          margin="normal"
          fullWidth
          label="Nombre de la Membresía"
          name="name"
        />

        <TextField
          {...register("duration", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "La duración debe ser al menos 1 día",
            },
          })}
          error={!!errors.duration}
          helperText={errors.duration?.message?.toString()}
          margin="normal"
          fullWidth
          type="number"
          label="Duración (días)"
          name="duration"
        />

        <TextField
          {...register("price", {
            required: "Este campo es requerido",
            min: {
              value: 0,
              message: "El precio no puede ser negativo",
            },
          })}
          error={!!errors.price}
          helperText={errors.price?.message?.toString()}
          margin="normal"
          fullWidth
          type="number"
          label="Precio"
          name="price"
        />

        <TextField
          {...register("maxDailyRides", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "Debe permitir al menos 1 viaje diario",
            },
          })}
          error={!!errors.maxDailyRides}
          helperText={errors.maxDailyRides?.message?.toString()}
          margin="normal"
          fullWidth
          type="number"
          label="Máximo de Viajes Diarios"
          name="maxDailyRides"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Estado</InputLabel>
          <Select
            {...register("status", {
              required: "Este campo es requerido",
            })}
            error={!!errors.status}
            label="Estado"
          >
            <MenuItem value="active">Activo</MenuItem>
            <MenuItem value="inactive">Inactivo</MenuItem>
          </Select>
        </FormControl>

        <TextField
          {...register("description")}
          margin="normal"
          fullWidth
          multiline
          rows={4}
          label="Descripción"
          name="description"
        />
      </Box>
    </Edit>
  );
}
